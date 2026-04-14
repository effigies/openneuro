import * as Sentry from "@sentry/node"
import { builder } from "../builder"
import { dataset } from "../resolvers/dataset"
import { elasticClient } from "../../elasticsearch/elastic-client"
import Star from "../../models/stars"
import Subscription from "../../models/subscription"
import Permission from "../../models/permission"
import { hashObject } from "../../libs/authentication/crypto"

import { DatasetConnectionRef } from "./refs"

const elasticIndex = "datasets"

/**
 * Accepts an array of fields representing the sort order for the search
 */
const encodeCursor = (sort: unknown[]): string =>
  Buffer.from(JSON.stringify(sort)).toString("base64")

/**
 * Accepts a cursor and returns the deserialized elastic search search_after array
 */
const decodeCursor = (cursor: string): unknown[] =>
  JSON.parse(Buffer.from(cursor, "base64").toString("utf-8"))

/**
 * Return a relay cursor from an elastic search result
 */
const elasticRelayConnection = (
  body: Record<string, unknown>,
  id: string,
  size: number,
  childResolvers = { dataset },
  user: string | null = null,
  userInfo: Record<string, unknown> | null = null,
) => {
  try {
    const hits = body.hits as Record<string, unknown>
    const hitList = hits.hits as Array<Record<string, unknown>>
    const total = hits.total as Record<string, unknown>
    const count = total.value as number
    const lastMatch = hitList[hitList.length - 1]
    const hasNextPage = Boolean(hitList[size - 1])
    return {
      id,
      edges: hitList.map((hit) => {
        const source = hit._source as Record<string, unknown>
        const node = childResolvers.dataset(
          null,
          { id: source.id },
          { user, userInfo },
        )
        return { id: source.id, node }
      }),
      pageInfo: {
        count,
        endCursor: lastMatch ? encodeCursor(lastMatch.sort as unknown[]) : null,
        hasNextPage,
        startCursor: null,
        hasPreviousPage: false,
      },
    }
  } catch (err) {
    Sentry.captureException(err)
  }
}

const addClause = (
  query: Record<string, Record<string, unknown[]>>,
  type: string,
  clause: unknown,
) => {
  if (query.bool[type]) {
    query.bool[type] = [...query.bool[type], clause]
  } else {
    query.bool[type] = [clause]
  }
}

const parseQuery = async (
  query: Record<string, Record<string, unknown[]>>,
  datasetType: string,
  datasetStatus: string,
  userId: string,
) => {
  if (datasetType === "All Public") {
    addClause(query, "filter", {
      term: { public: { value: true } },
    })
  } else if (datasetType === "Following") {
    const results = await Subscription.find({ userId })
    const followedDatasets = results.map(
      ({ datasetId }: { datasetId: string }) => datasetId,
    )
    addClause(query, "filter", { terms: { id: followedDatasets } })
  } else if (datasetType === "My Bookmarks") {
    const results = await Star.find({ userId })
    const bookmarkedDatasets = results.map(
      ({ datasetId }: { datasetId: string }) => datasetId,
    )
    addClause(query, "filter", { terms: { id: bookmarkedDatasets } })
  } else if (datasetType === "My Datasets") {
    const results = await Permission.find({ userId })
    const permittedDatasets = results.map(
      ({ datasetId }: { datasetId: string }) => datasetId,
    )
    addClause(query, "filter", { terms: { id: permittedDatasets } })
    if (datasetStatus && datasetStatus !== "All") {
      if (datasetStatus === "Public") {
        addClause(query, "filter", { term: { public: { value: true } } })
      } else if (datasetStatus === "Shared with Me") {
        addClause(query, "filter", {
          terms: {
            ["permissions.userPermissions.level"]: ["ro", "rw"],
          },
        })
      } else if (datasetStatus === "Invalid") {
        addClause(query, "filter", {
          range: { "latestSnapshot.validation.errors": { gt: 0 } },
        })
      }
    }
  }
  return query
}

builder.queryField("search", (t) =>
  t.field({
    type: DatasetConnectionRef,
    args: {
      q: t.arg.string({ required: true }),
      after: t.arg.string(),
      first: t.arg.int(),
    },
    resolve: async (_root, { q, after, first: firstArg }) => {
      const first = firstArg ?? 25
      const searchId = hashObject({ q })
      const requestBody: Record<string, unknown> = {
        sort: [{ _score: "asc", id: "desc" }],
        search_after: undefined,
      }
      if (after) {
        try {
          requestBody.search_after = decodeCursor(after)
        } catch (_err) {
          // Don't include search_after if parsing fails
        }
      }
      const result = await elasticClient.search({
        index: elasticIndex,
        size: first,
        q: `${q} AND public:true`,
        ...requestBody,
      })
      return elasticRelayConnection(
        result as unknown as Record<string, unknown>,
        searchId,
        first,
      )
    },
  }))

builder.queryField("advancedSearch", (t) =>
  t.field({
    type: DatasetConnectionRef,
    args: {
      query: t.arg({ type: "JSON", required: true }),
      allDatasets: t.arg.boolean(),
      datasetType: t.arg.string(),
      datasetStatus: t.arg.string(),
      sortBy: t.arg({ type: "JSON" }),
      after: t.arg.string(),
      first: t.arg.int(),
    },
    resolve: async (
      _root,
      {
        query,
        allDatasets,
        datasetType,
        datasetStatus,
        sortBy,
        after,
        first: firstArg,
      },
      { user, userInfo },
    ) => {
      const first = firstArg ?? 25
      const searchId = hashObject({
        query,
        datasetType,
        datasetStatus,
        sortBy,
        user,
      })
      const sort: unknown[] = [{ _score: "desc" }, { id: "desc" }]
      if (sortBy) {
        sort.unshift(sortBy)
      }
      let search_after: unknown
      if (after) {
        try {
          search_after = decodeCursor(after)
        } catch (_err) {
          // Don't include search_after if parsing fails
        }
      }
      const requestBody = {
        index: elasticIndex,
        size: first,
        sort,
        query: allDatasets ? query : await parseQuery(
          query as Record<string, Record<string, unknown[]>>,
          datasetType ?? "",
          datasetStatus ?? "",
          user,
        ),
        search_after,
      }
      const result = await elasticClient.search(requestBody)
      return elasticRelayConnection(
        result as unknown as Record<string, unknown>,
        searchId,
        first,
        undefined,
        user,
        userInfo as unknown as Record<string, unknown>,
      )
    },
  }))
