import { builder } from "../builder"
import { analytics } from "../resolvers/dataset.js"
import { issuesSnapshotStatus, snapshotIssues } from "../resolvers/issues.js"
import { snapshotValidation } from "../resolvers/validation"
import { onBrainlife } from "../resolvers/brainlife"
import { contributors } from "../../datalad/contributors"

// Forward references for types defined in other schema files
const DatasetRef = builder.objectRef<Record<string, unknown>>("Dataset")
const SummaryRef = builder.objectRef<Record<string, unknown>>("Summary")
const ValidationIssueRef = builder.objectRef<Record<string, unknown>>(
  "ValidationIssue",
)
const ValidationIssueStatusRef = builder.objectRef<Record<string, unknown>>(
  "ValidationIssueStatus",
)
const DatasetValidationRef = builder.objectRef<Record<string, unknown>>(
  "DatasetValidation",
)
const DatasetFileRef = builder.objectRef<Record<string, unknown>>("DatasetFile")
const DescriptionRef = builder.objectRef<Record<string, unknown>>("Description")
const AnalyticRef = builder.objectRef<Record<string, unknown>>("Analytic")
const DeprecatedSnapshotRef = builder.objectRef<Record<string, unknown>>(
  "DeprecatedSnapshot",
)
const RelatedObjectRef = builder.objectRef<Record<string, unknown>>(
  "RelatedObject",
)
const ContributorRef = builder.objectRef<Record<string, unknown>>("Contributor")

export const SnapshotRef = builder.objectRef<Record<string, unknown>>(
  "Snapshot",
)

SnapshotRef.implement({
  directives: { cacheControl: { maxAge: 3600, scope: "PUBLIC" } },
  fields: (t) => ({
    id: t.id({
      nullable: false,
      resolve: (obj) => obj.id as string,
    }),
    tag: t.string({
      nullable: false,
      resolve: (obj) => obj.tag as string,
    }),
    dataset: t.field({
      type: DatasetRef,
      nullable: false,
      resolve: (obj) => {
        // The dataset field is set as a thunk by the snapshot query resolver
        if (typeof obj.dataset === "function") {
          return obj.dataset()
        }
        return obj as Record<string, unknown>
      },
    }),
    created: t.field({
      type: "DateTime",
      resolve: (obj) => obj.created as string,
    }),
    summary: t.field({
      type: SummaryRef,
      resolve: (obj) => {
        // The summary field is set as a thunk by the snapshot query resolver
        if (typeof obj.summary === "function") {
          return obj.summary()
        }
        return null
      },
    }),
    issues: t.field({
      type: [ValidationIssueRef],
      resolve: (obj) => snapshotIssues(obj),
    }),
    issuesStatus: t.field({
      type: ValidationIssueStatusRef,
      resolve: (obj) => issuesSnapshotStatus(obj),
    }),
    validation: t.field({
      type: DatasetValidationRef,
      resolve: (obj, _args, context) =>
        snapshotValidation(obj, undefined, context),
    }),
    files: t.field({
      type: [DatasetFileRef],
      args: {
        tree: t.arg.string(),
        recursive: t.arg.boolean(),
      },
      resolve: (obj) => {
        // The files field is set as a thunk by the snapshot query resolver
        if (typeof obj.files === "function") {
          return obj.files({})
        }
        return null
      },
    }),
    description: t.field({
      type: DescriptionRef,
      resolve: (obj) => {
        // The description field is set as a thunk by the snapshot query resolver
        if (typeof obj.description === "function") {
          return obj.description()
        }
        return null
      },
    }),
    analytics: t.field({
      type: AnalyticRef,
      resolve: (obj) => analytics(obj),
    }),
    readme: t.string({
      directives: { cacheControl: { maxAge: 31536000, scope: "PUBLIC" } },
      resolve: (obj) => {
        // The readme field is set as a thunk by the snapshot query resolver
        if (typeof obj.readme === "function") {
          return obj.readme()
        }
        return null
      },
    }),
    hexsha: t.string({
      resolve: (obj) => obj.hexsha as string,
    }),
    deprecated: t.field({
      type: DeprecatedSnapshotRef,
      resolve: (obj) => {
        // The deprecated field is set as a thunk by the snapshot query resolver
        if (typeof obj.deprecated === "function") {
          return obj.deprecated()
        }
        return null
      },
    }),
    related: t.field({
      type: [RelatedObjectRef],
      resolve: (obj) => {
        // The related field is set as a thunk by the snapshot query resolver
        if (typeof obj.related === "function") {
          return obj.related()
        }
        return null
      },
    }),
    onBrainlife: t.boolean({
      directives: { cacheControl: { maxAge: 10080, scope: "PUBLIC" } },
      resolve: (obj) => {
        // The onBrainlife field is set as a thunk by the snapshot query resolver
        if (typeof obj.onBrainlife === "function") {
          return obj.onBrainlife()
        }
        return onBrainlife(obj as { id: string })
      },
    }),
    size: t.field({
      type: "BigInt",
      resolve: (obj) => {
        // The size field is set as a thunk by the snapshot query resolver
        if (typeof obj.size === "function") {
          return obj.size()
        }
        return null
      },
    }),
    contributors: t.field({
      type: [ContributorRef],
      resolve: (obj) => {
        const datasetId = (obj.datasetId ??
          (obj.id as string)?.split(":")[0]) as string
        return contributors({
          id: `${datasetId}:${obj.hexsha}`,
          tag: obj.tag as string,
          hexsha: obj.hexsha as string,
        })
      },
    }),
  }),
})
