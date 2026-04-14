import { builder } from "../builder"
import { ValidatorMetadata } from "./misc"

export const SummaryPetFields = builder.simpleObject("SummaryPetFields", {
  fields: (t) => ({
    BodyPart: t.stringList(),
    ScannerManufacturer: t.stringList(),
    ScannerManufacturersModelName: t.stringList(),
    TracerName: t.stringList(),
    TracerRadionuclide: t.stringList(),
  }),
})

export const SubjectMetadata = builder.simpleObject("SubjectMetadata", {
  fields: (t) => ({
    participantId: t.string({ nullable: false }),
    age: t.float(),
    sex: t.string(),
    group: t.string(),
  }),
})

export const Summary = builder.simpleObject("Summary", {
  fields: (t) => ({
    id: t.id({ nullable: false }),
    modalities: t.stringList(),
    primaryModality: t.string(),
    secondaryModalities: t.stringList(),
    sessions: t.stringList(),
    subjects: t.stringList(),
    subjectMetadata: t.field({ type: [SubjectMetadata] }),
    tasks: t.stringList(),
    size: t.field({ type: "BigInt", nullable: false }),
    totalFiles: t.int({ nullable: false }),
    dataProcessed: t.boolean(),
    pet: t.field({ type: SummaryPetFields }),
    schemaVersion: t.string(),
    validatorMetadata: t.field({ type: ValidatorMetadata }),
  }),
})

export const Metadata = builder.simpleObject("Metadata", {
  fields: (t) => ({
    datasetId: t.id({ nullable: false }),
    datasetUrl: t.string(),
    datasetName: t.string(),
    firstSnapshotCreatedAt: t.field({ type: "DateTime" }),
    latestSnapshotCreatedAt: t.field({ type: "DateTime" }),
    dxStatus: t.string(),
    tasksCompleted: t.stringList(),
    trialCount: t.int(),
    studyDesign: t.string(),
    studyDomain: t.string(),
    studyLongitudinal: t.string(),
    dataProcessed: t.boolean(),
    species: t.string(),
    associatedPaperDOI: t.string(),
    openneuroPaperDOI: t.string(),
    seniorAuthor: t.string(),
    adminUsers: t.stringList(),
    ages: t.floatList(),
    modalities: t.stringList(),
    grantFunderName: t.string(),
    grantIdentifier: t.string(),
    affirmedDefaced: t.boolean(),
    affirmedConsent: t.boolean(),
  }),
})
