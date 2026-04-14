import { builder } from "../builder"
import { Severity, SortOrdering } from "./enums"

export const UserSortInput = builder.inputType("UserSortInput", {
  fields: (t) => ({
    field: t.string({ required: true }),
    order: t.field({ type: SortOrdering }),
  }),
})

export const DatasetSort = builder.inputType("DatasetSort", {
  fields: (t) => ({
    created: t.field({ type: SortOrdering }),
    name: t.field({ type: SortOrdering }),
    uploader: t.field({ type: SortOrdering }),
    stars: t.field({ type: SortOrdering }),
    downloads: t.field({ type: SortOrdering }),
    views: t.field({ type: SortOrdering }),
    subscriptions: t.field({ type: SortOrdering }),
    publishDate: t.field({ type: SortOrdering }),
  }),
})

export const DatasetFilter = builder.inputType("DatasetFilter", {
  fields: (t) => ({
    public: t.boolean(),
    shared: t.boolean(),
    invalid: t.boolean(),
    starred: t.boolean(),
    all: t.boolean(),
  }),
})

export const DeleteFile = builder.inputType("DeleteFile", {
  fields: (t) => ({
    path: t.string({ required: true }),
    filename: t.string(),
  }),
})

export const UploadFile = builder.inputType("UploadFile", {
  fields: (t) => ({
    filename: t.string({ required: true }),
    size: t.field({ type: "BigInt", required: true }),
  }),
})

export const SummaryPetInput = builder.inputType("SummaryPetInput", {
  fields: (t) => ({
    BodyPart: t.stringList({ required: { list: false, items: false } }),
    ScannerManufacturer: t.stringList({
      required: { list: false, items: false },
    }),
    ScannerManufacturersModelName: t.stringList({
      required: { list: false, items: false },
    }),
    TracerName: t.stringList({ required: { list: false, items: false } }),
    TracerRadionuclide: t.stringList({
      required: { list: false, items: false },
    }),
  }),
})

export const ValidatorMetadataInput = builder.inputType(
  "ValidatorMetadataInput",
  {
    fields: (t) => ({
      validator: t.string(),
      version: t.string(),
    }),
  },
)

export const SubjectMetadataInput = builder.inputType("SubjectMetadataInput", {
  fields: (t) => ({
    participantId: t.string({ required: true }),
    age: t.float(),
    sex: t.string(),
    group: t.string(),
  }),
})

export const SummaryInput = builder.inputType("SummaryInput", {
  fields: (t) => ({
    id: t.id({ required: true }),
    datasetId: t.id({ required: true }),
    modalities: t.stringList({ required: { list: false, items: false } }),
    secondaryModalities: t.stringList({
      required: { list: false, items: false },
    }),
    dataTypes: t.stringList({ required: { list: false, items: false } }),
    sessions: t.stringList({ required: { list: false, items: false } }),
    subjects: t.stringList({ required: { list: false, items: false } }),
    subjectMetadata: t.field({
      type: [SubjectMetadataInput],
      required: { list: false, items: false },
    }),
    tasks: t.stringList({ required: { list: false, items: false } }),
    size: t.field({ type: "BigInt", required: true }),
    totalFiles: t.int({ required: true }),
    dataProcessed: t.boolean(),
    pet: t.field({ type: SummaryPetInput }),
    validatorMetadata: t.field({ type: ValidatorMetadataInput }),
    schemaVersion: t.string(),
  }),
})

export const ValidatorIssueInput = builder.inputType("ValidatorIssueInput", {
  fields: (t) => ({
    code: t.string({ required: true }),
    subCode: t.string(),
    location: t.string(),
    severity: t.field({ type: Severity }),
    rule: t.string(),
    issueMessage: t.string(),
    affects: t.string(),
    line: t.int(),
  }),
})

export const ValidatorCodeMessageInput = builder.inputType(
  "ValidatorCodeMessageInput",
  {
    fields: (t) => ({
      code: t.string({ required: true }),
      message: t.string({ required: true }),
    }),
  },
)

export const ValidatorInput = builder.inputType("ValidatorInput", {
  fields: (t) => ({
    id: t.id({ required: true }),
    datasetId: t.id({ required: true }),
    issues: t.field({
      type: [ValidatorIssueInput],
      required: { list: true, items: false },
    }),
    codeMessages: t.field({
      type: [ValidatorCodeMessageInput],
      required: { list: true, items: false },
    }),
    validatorMetadata: t.field({
      type: ValidatorMetadataInput,
      required: true,
    }),
  }),
})

export const MetadataInput = builder.inputType("MetadataInput", {
  fields: (t) => ({
    datasetId: t.id({ required: true }),
    datasetUrl: t.string(),
    datasetName: t.string(),
    firstSnapshotCreatedAt: t.field({ type: "DateTime" }),
    latestSnapshotCreatedAt: t.field({ type: "DateTime" }),
    dxStatus: t.string(),
    tasksCompleted: t.stringList({ required: { list: false, items: false } }),
    trialCount: t.int(),
    studyDesign: t.string(),
    studyDomain: t.string(),
    studyLongitudinal: t.string(),
    dataProcessed: t.boolean(),
    species: t.string(),
    associatedPaperDOI: t.string(),
    openneuroPaperDOI: t.string(),
    seniorAuthor: t.string(),
    adminUsers: t.stringList({ required: { list: false, items: false } }),
    ages: t.floatList({ required: { list: false, items: false } }),
    modalities: t.stringList({ required: { list: false, items: false } }),
    grantFunderName: t.string(),
    grantIdentifier: t.string(),
    affirmedDefaced: t.boolean(),
    affirmedConsent: t.boolean(),
  }),
})

export const ContributorInput = builder.inputType("ContributorInput", {
  fields: (t) => ({
    name: t.string(),
    givenName: t.string(),
    familyName: t.string(),
    orcid: t.string(),
    contributorType: t.string(),
    order: t.int(),
  }),
})

export const AnnexFsckInput = builder.inputType("AnnexFsckInput", {
  fields: (t) => ({
    command: t.string(),
    errorMessages: t.stringList({ required: { list: false, items: false } }),
    file: t.string(),
    key: t.string(),
    note: t.string(),
    success: t.boolean(),
    dead: t.stringList({ required: { list: false, items: false } }),
    missing: t.stringList({ required: { list: false, items: false } }),
    untrusted: t.stringList({ required: { list: false, items: false } }),
    input: t.stringList({ required: { list: false, items: false } }),
  }),
})
