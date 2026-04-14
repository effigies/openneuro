import { builder } from "../builder"
import { user } from "../resolvers/user"
import { getDraftInfo } from "../../datalad/draft"
import { latestSnapshot, snapshots } from "../resolvers/snapshots"
import {
  analytics,
  datasetName,
  followers,
  following,
  starred,
  stars,
} from "../resolvers/dataset.js"
import { permissions } from "../resolvers/permissions"
import { datasetComments } from "../resolvers/comment"
import { metadata } from "../resolvers/metadata"
import { history } from "../resolvers/history"
import { onBrainlife } from "../resolvers/brainlife"
import { brainInitiative } from "../resolvers/brainInitiative"
import { derivatives } from "../resolvers/derivatives"
import { getDatasetWorker } from "../../libs/datalad-service"
import { reviewers } from "../resolvers/reviewer"
import { datasetEvents } from "../resolvers/datasetEvents"
import {
  CommentRef,
  DatasetConnectionRef,
  DatasetEdgeRef,
  DatasetEventRef,
  DatasetRef,
  DraftRef,
  SnapshotRef,
  UserRef,
} from "./refs"
import { DatasetPermissions as DatasetPermissionsRef } from "./permissions"
import { Analytic as AnalyticRef } from "./analytics"
import {
  DatasetCommit as DatasetCommitRef,
  Follower as FollowerRef,
  Star as StarRef,
} from "./misc"
import { Metadata as MetadataRef } from "./metadata"
import { DatasetReviewer as DatasetReviewerRef } from "./reviewer"
import { PageInfo as PageInfoRef } from "./pagination"

export {
  DatasetConnectionRef as DatasetConnection,
  DatasetEdgeRef as DatasetEdge,
  DatasetRef,
}

export const DatasetDerivatives = builder.simpleObject("DatasetDerivatives", {
  fields: (t) => ({
    name: t.string(),
    local: t.boolean(),
    s3Url: t.string(),
    dataladUrl: t.string(),
  }),
})

DatasetRef.implement({
  fields: (t) => ({
    id: t.id({
      nullable: false,
      resolve: (obj) => obj.id as string,
    }),
    created: t.field({
      type: "DateTime",
      nullable: false,
      resolve: (obj) => obj.created as string,
    }),
    uploader: t.field({
      type: UserRef,
      resolve: (obj, _args, context) =>
        user(obj, { id: obj.uploader as string }, context),
    }),
    public: t.boolean({
      resolve: (obj) => obj.public as boolean,
    }),
    draft: t.field({
      type: DraftRef,
      resolve: async (obj) => {
        const draftHead = await getDraftInfo(obj.id as string)
        return {
          id: obj.id,
          revision: draftHead.ref,
          modified: draftHead.modified,
        }
      },
    }),
    snapshots: t.field({
      type: [SnapshotRef],
      nullable: { list: true, items: true },
      resolve: (obj) => snapshots(obj),
    }),
    latestSnapshot: t.field({
      type: SnapshotRef,
      nullable: false,
      resolve: (obj, _args, context) => latestSnapshot(obj, undefined, context),
    }),
    permissions: t.field({
      type: DatasetPermissionsRef,
      resolve: (obj, _args, context) => permissions(obj, undefined, context),
    }),
    analytics: t.field({
      type: AnalyticRef,
      resolve: (obj) => analytics(obj),
    }),
    stars: t.field({
      type: [StarRef],
      nullable: { list: true, items: true },
      resolve: (obj) => stars(obj),
    }),
    followers: t.field({
      type: [FollowerRef],
      nullable: { list: true, items: true },
      resolve: (obj) => followers(obj),
    }),
    name: t.string({
      resolve: (obj) => datasetName(obj),
    }),
    comments: t.field({
      type: [CommentRef],
      nullable: { list: true, items: true },
      resolve: (obj) => datasetComments(obj),
    }),
    following: t.boolean({
      resolve: (obj, _args, context) => following(obj, undefined, context),
    }),
    starred: t.boolean({
      resolve: (obj, _args, context) => starred(obj, undefined, context),
    }),
    publishDate: t.field({
      type: "DateTime",
      resolve: (obj) => obj.publishDate as string,
    }),
    onBrainlife: t.boolean({
      directives: { cacheControl: { maxAge: 10080, scope: "PUBLIC" } },
      resolve: (obj) => onBrainlife(obj as { id: string }),
    }),
    derivatives: t.field({
      type: [DatasetDerivatives],
      nullable: { list: true, items: true },
      directives: { cacheControl: { maxAge: 3600, scope: "PUBLIC" } },
      resolve: (obj) => derivatives(obj as { id: string }),
    }),
    metadata: t.field({
      type: MetadataRef,
      resolve: (obj, _args, context) => metadata(obj, undefined, context),
    }),
    history: t.field({
      type: [DatasetCommitRef],
      nullable: { list: true, items: true },
      resolve: (obj) => history(obj),
    }),
    worker: t.string({
      resolve: (obj) => getDatasetWorker(obj.id as string),
    }),
    reviewers: t.field({
      type: [DatasetReviewerRef],
      nullable: { list: true, items: true },
      resolve: (obj) => reviewers(obj),
    }),
    brainInitiative: t.boolean({
      resolve: (obj, _args, context) =>
        brainInitiative(obj as { id: string }, undefined, context),
    }),
    events: t.field({
      type: [DatasetEventRef],
      nullable: { list: true, items: true },
      resolve: (obj, _args, context) => datasetEvents(obj, undefined, context),
    }),
  }),
})

DatasetEdgeRef.implement({
  fields: (t) => ({
    id: t.string({
      nullable: false,
      resolve: (obj) => obj.id as string,
    }),
    node: t.field({
      type: DatasetRef,
      nullable: false,
      resolve: (obj) => obj.node as Record<string, unknown>,
    }),
    cursor: t.string({
      nullable: false,
      resolve: (obj) => obj.cursor as string,
    }),
  }),
})

DatasetConnectionRef.implement({
  fields: (t) => ({
    edges: t.field({
      type: [DatasetEdgeRef],
      nullable: { list: true, items: true },
      resolve: (obj) => obj.edges as Record<string, unknown>[],
    }),
    pageInfo: t.field({
      type: PageInfoRef,
      nullable: false,
      resolve: (obj) => obj.pageInfo as Record<string, unknown>,
    }),
  }),
})
