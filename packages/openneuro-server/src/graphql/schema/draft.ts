import { builder } from "../builder"
import { summary } from "../resolvers/summary"
import { issues, issuesDraftStatus } from "../resolvers/issues.js"
import { description } from "../resolvers/description.js"
import { readme } from "../resolvers/readme.js"
import { getDraftRevision } from "../../datalad/draft.js"
import { getFiles, getFilesRecursive } from "../../datalad/files"
import { filterRemovedAnnexObjects } from "../utils/file.js"
import { validation } from "../resolvers/validation"
import { fileCheck } from "../resolvers/draft"
import { contributors } from "../../datalad/contributors"
import Summary from "../../models/summary"

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
const UploadMetadataRef = builder.objectRef<Record<string, unknown>>(
  "UploadMetadata",
)
const FileCheckRef = builder.objectRef<Record<string, unknown>>("FileCheck")
const ContributorRef = builder.objectRef<Record<string, unknown>>("Contributor")

export const DraftRef = builder.objectRef<Record<string, unknown>>("Draft")

DraftRef.implement({
  fields: (t) => ({
    id: t.id({
      resolve: (obj) => obj.id as string,
    }),
    dataset: t.field({
      type: DatasetRef,
      resolve: (obj) => obj as Record<string, unknown>,
    }),
    modified: t.field({
      type: "DateTime",
      resolve: (obj) => obj.modified as string,
    }),
    summary: t.field({
      type: SummaryRef,
      resolve: (obj) => summary(obj),
    }),
    issues: t.field({
      type: [ValidationIssueRef],
      resolve: (obj, _args, context) =>
        issues(obj, undefined, { userInfo: context.userInfo }),
    }),
    issuesStatus: t.field({
      type: ValidationIssueStatusRef,
      resolve: (obj) => issuesDraftStatus(obj),
    }),
    validation: t.field({
      type: DatasetValidationRef,
      resolve: (obj, _args, context) => validation(obj, undefined, context),
    }),
    files: t.field({
      type: [DatasetFileRef],
      args: {
        tree: t.arg.string(),
        recursive: t.arg.boolean(),
      },
      resolve: async (obj, args, { userInfo }) => {
        const hexsha = await getDraftRevision(obj.id as string)
        const treeish = args.tree || hexsha
        const files = args.recursive
          ? await getFilesRecursive(obj.id as string, treeish)
          : await getFiles(obj.id as string, treeish)
        return filterRemovedAnnexObjects(obj.id as string, userInfo)(files)
      },
    }),
    description: t.field({
      type: DescriptionRef,
      resolve: (obj) => description(obj),
    }),
    readme: t.string({
      resolve: (obj) => readme(obj),
    }),
    uploads: t.field({
      type: [UploadMetadataRef],
      resolve: (obj) => obj.uploads as Record<string, unknown>[],
    }),
    head: t.string({
      resolve: (obj) => obj.revision as string,
    }),
    size: t.field({
      type: "BigInt",
      resolve: async (obj) => {
        const hexsha = await getDraftRevision(obj.id as string)
        return Summary.findOne({ datasetId: obj.id, id: hexsha })
          .exec()
          .then((res) => res?.toObject()?.size)
      },
    }),
    fileCheck: t.field({
      type: FileCheckRef,
      resolve: (obj) => fileCheck(obj),
    }),
    contributors: t.field({
      type: [ContributorRef],
      resolve: (obj) => contributors(obj as { id: string }),
    }),
  }),
})
