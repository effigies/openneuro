import { builder } from "../builder"
import {
  dataset as datasetResolver,
  datasets as datasetsResolver,
} from "../resolvers/dataset.js"
import {
  participantCount as participantCountResolver,
  snapshot as snapshotResolver,
} from "../resolvers/snapshots.js"
import { user as userResolver, users as usersResolver } from "../resolvers/user"
import { flaggedFiles as flaggedFilesResolver } from "../resolvers/flaggedFiles"
import { publicMetadata as publicMetadataResolver } from "../resolvers/metadata"

// Input type refs
import { DatasetFilter, DatasetSort, UserSortInput } from "./inputs"

// Forward references for return types defined in other schema files
const DatasetRef = builder.objectRef<Record<string, unknown>>("Dataset")
const DatasetConnectionRef = builder.objectRef<Record<string, unknown>>(
  "DatasetConnection",
)
const UserRef = builder.objectRef<Record<string, unknown>>("User")
const UserListRef = builder.objectRef<Record<string, unknown>>("UserList")
const SnapshotRef = builder.objectRef<Record<string, unknown>>("Snapshot")
const FlaggedFileRef = builder.objectRef<Record<string, unknown>>("FlaggedFile")
const MetadataRef = builder.objectRef<Record<string, unknown>>("Metadata")

builder.queryType({
  fields: (t) => ({
    dataset: t.field({
      type: DatasetRef,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        datasetResolver(root, { id: args.id as string }, context),
    }),

    datasets: t.field({
      type: DatasetConnectionRef,
      args: {
        first: t.arg.int({ defaultValue: 25 }),
        after: t.arg.string(),
        before: t.arg.string(),
        orderBy: t.arg({
          type: DatasetSort,
          defaultValue: { created: "ascending" },
        }),
        filterBy: t.arg({ type: DatasetFilter, defaultValue: {} }),
        myDatasets: t.arg.boolean(),
        modality: t.arg.string(),
      },
      resolve: (root, args, context) => datasetsResolver(root, args, context),
    }),

    user: t.field({
      type: UserRef,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        userResolver(root, { id: args.id as string }, context),
    }),

    users: t.field({
      type: UserListRef,
      nullable: false,
      args: {
        orderBy: t.arg({ type: [UserSortInput] }),
        isAdmin: t.arg.boolean(),
        isBlocked: t.arg.boolean(),
        search: t.arg.string(),
        limit: t.arg.int(),
        offset: t.arg.int(),
      },
      resolve: (root, args, context) => usersResolver(root, args, context),
    }),

    participantCount: t.int({
      directives: { cacheControl: { maxAge: 3600, scope: "PUBLIC" } },
      args: {
        modality: t.arg.string(),
      },
      resolve: (root, args) =>
        participantCountResolver(root, { modality: args.modality }, {}),
    }),

    snapshot: t.field({
      type: SnapshotRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        tag: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        snapshotResolver(
          root,
          { datasetId: args.datasetId as string, tag: args.tag },
          context,
        ),
    }),

    flaggedFiles: t.field({
      type: [FlaggedFileRef],
      args: {
        flagged: t.arg.boolean({ defaultValue: true }),
        deleted: t.arg.boolean({ defaultValue: false }),
      },
      resolve: (root, args, context) =>
        flaggedFilesResolver(root, args, context),
    }),

    publicMetadata: t.field({
      type: [MetadataRef],
      directives: { cacheControl: { maxAge: 86400, scope: "PUBLIC" } },
      resolve: (root) => publicMetadataResolver(root),
    }),

    orcidConsent: t.boolean({
      resolve: (_root, _args, context) =>
        context.userInfo?.orcidConsent ?? null,
    }),
  }),
})
