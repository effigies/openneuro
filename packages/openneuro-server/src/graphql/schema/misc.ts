import { builder } from "../builder"
import {
  NotificationStatusType,
  RelatedObjectKind,
  RelatedObjectRelation,
} from "./enums"

export const RepoMetadata = builder.simpleObject("RepoMetadata", {
  fields: (t) => ({
    token: t.string(),
    endpoint: t.int(),
  }),
})

export const FlaggedFile = builder.simpleObject("FlaggedFile", {
  fields: (t) => ({
    datasetId: t.string(),
    snapshot: t.string(),
    filepath: t.string(),
    annexKey: t.string(),
    removed: t.boolean(),
    flagged: t.boolean(),
    createdAt: t.field({ type: "DateTime" }),
  }),
})

export const AnnexFsck = builder.simpleObject("AnnexFsck", {
  fields: (t) => ({
    command: t.string(),
    errorMessages: t.stringList(),
    file: t.string(),
    key: t.string(),
    note: t.string(),
    success: t.boolean(),
  }),
})

export const FileCheck = builder.simpleObject("FileCheck", {
  fields: (t) => ({
    datasetId: t.string({ nullable: false }),
    hexsha: t.string({ nullable: false }),
    refs: t.stringList({ nullable: false }),
    annexFsck: t.field({ type: [AnnexFsck] }),
    remote: t.string(),
  }),
})

export const DatasetId = builder.simpleObject("DatasetId", {
  fields: (t) => ({
    datasetId: t.id(),
  }),
})

export const UserNotificationStatus = builder.simpleObject(
  "UserNotificationStatus",
  {
    fields: (t) => ({
      status: t.field({ type: NotificationStatusType, nullable: false }),
    }),
  },
)

export const ValidatorMetadata = builder.simpleObject("ValidatorMetadata", {
  fields: (t) => ({
    validator: t.string(),
    version: t.string(),
  }),
})

export const DiffFiles = builder.simpleObject("DiffFiles", {
  fields: (t) => ({
    status: t.string(),
    mode: t.int(),
    old: t.string(),
    new: t.string(),
    binary: t.boolean(),
  }),
})

export const DatasetCommit = builder.simpleObject("DatasetCommit", {
  fields: (t) => ({
    id: t.id({ nullable: false }),
    date: t.field({ type: "DateTime" }),
    authorName: t.string(),
    authorEmail: t.string(),
    message: t.string(),
    references: t.string(),
    files: t.field({ type: [DiffFiles] }),
    filesChanged: t.int(),
    insertions: t.int(),
    deletions: t.int(),
  }),
})

export const Follower = builder.simpleObject("Follower", {
  fields: (t) => ({
    userId: t.string(),
    datasetId: t.string(),
  }),
})

export const FollowDatasetResponse = builder.simpleObject(
  "FollowDatasetResponse",
  {
    fields: (t) => ({
      following: t.boolean(),
      newFollower: t.field({ type: Follower }),
    }),
  },
)

export const Star = builder.simpleObject("Star", {
  directives: { cacheControl: { maxAge: 300, scope: "PUBLIC" } },
  fields: (t) => ({
    userId: t.string(),
    datasetId: t.string(),
  }),
})

export const StarDatasetResponse = builder.simpleObject("StarDatasetResponse", {
  fields: (t) => ({
    starred: t.boolean(),
    newStar: t.field({ type: Star }),
  }),
})

export const RelatedObject = builder.simpleObject("RelatedObject", {
  fields: (t) => ({
    id: t.id({ nullable: false }),
    relation: t.field({ type: RelatedObjectRelation, nullable: false }),
    kind: t.field({ type: RelatedObjectKind, nullable: false }),
    description: t.string(),
  }),
})

export const DeprecatedSnapshot = builder.simpleObject("DeprecatedSnapshot", {
  fields: (t) => ({
    id: t.id({ nullable: false }),
    user: t.string(),
    reason: t.string(),
    timestamp: t.field({ type: "Date" }),
  }),
})

export const ValidationIssueStatus = builder.simpleObject(
  "ValidationIssueStatus",
  {
    fields: (t) => ({
      errors: t.int(),
      warnings: t.int(),
    }),
  },
)
