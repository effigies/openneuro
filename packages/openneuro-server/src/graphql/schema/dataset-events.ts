import { builder } from "../builder"
import { ResponseStatusType } from "./enums"
import { UserNotificationStatus } from "./misc"
import { Contributor } from "./description"
import { toGraphqlStatus } from "../resolvers/response-status"
import type { DbStatus } from "../resolvers/response-status"

// Forward reference for User type (defined in user.ts)
const UserRef = builder.objectRef<Record<string, unknown>>("User")

export const DatasetEventDescriptionRef = builder
  .objectRef<Record<string, unknown>>("DatasetEventDescription")

DatasetEventDescriptionRef.implement({
  fields: (t) => ({
    type: t.string({
      resolve: (obj) => obj.type as string,
    }),
    version: t.string({
      resolve: (obj) => obj.version as string,
    }),
    public: t.boolean({
      resolve: (obj) => obj.public as boolean,
    }),
    target: t.field({
      type: UserRef,
      resolve: (obj) => obj.target as Record<string, unknown>,
    }),
    targetUserId: t.id({
      resolve: (obj) => obj.targetUserId as string,
    }),
    level: t.string({
      resolve: (obj) => obj.level as string,
    }),
    ref: t.string({
      resolve: (obj) => obj.ref as string,
    }),
    message: t.string({
      resolve: (obj) => obj.message as string,
    }),
    requestId: t.id({
      resolve: (obj) => obj.requestId as string,
    }),
    reason: t.string({
      resolve: (obj) => obj.reason as string,
    }),
    datasetId: t.id({
      resolve: (obj) => obj.datasetId as string,
    }),
    resolutionStatus: t.field({
      type: ResponseStatusType,
      resolve: (obj) =>
        toGraphqlStatus(obj.resolutionStatus as DbStatus | null | undefined),
    }),
    contributorData: t.field({
      type: Contributor,
      resolve: (obj) => obj.contributorData as Record<string, unknown>,
    }),
  }),
})

export const DatasetEventRef = builder.objectRef<Record<string, unknown>>(
  "DatasetEvent",
)

DatasetEventRef.implement({
  fields: (t) => ({
    id: t.id({
      resolve: (obj) => obj.id as string,
    }),
    timestamp: t.field({
      type: "DateTime",
      resolve: (obj) => obj.timestamp as string,
    }),
    user: t.field({
      type: UserRef,
      resolve: (obj) => obj.user as Record<string, unknown>,
    }),
    event: t.field({
      type: DatasetEventDescriptionRef,
      resolve: (obj) => obj.event as Record<string, unknown>,
    }),
    success: t.boolean({
      resolve: (obj) => obj.success as boolean,
    }),
    note: t.string({
      resolve: (obj) => obj.note as string,
    }),
    datasetId: t.id({
      resolve: (obj) => obj.datasetId as string,
    }),
    notificationStatus: t.field({
      type: UserNotificationStatus,
      resolve: (obj) => obj.notificationStatus as Record<string, unknown>,
    }),
    responseStatus: t.field({
      type: ResponseStatusType,
      resolve: (obj) =>
        toGraphqlStatus(obj.responseStatus as DbStatus | null | undefined),
    }),
    hasBeenRespondedTo: t.boolean({
      resolve: (obj) => (obj.hasBeenRespondedTo as boolean) ?? false,
    }),
  }),
})
