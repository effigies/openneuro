import { builder } from "../builder"
import { Severity } from "./enums"
import { ValidationIssueFile } from "./files"

export const ValidatorCodeMessage = builder.simpleObject(
  "ValidatorCodeMessage",
  {
    fields: (t) => ({
      code: t.string({ nullable: false }),
      message: t.string({ nullable: false }),
    }),
  },
)

export const ValidatorIssue = builder.simpleObject("ValidatorIssue", {
  fields: (t) => ({
    code: t.string({ nullable: false }),
    subCode: t.string(),
    location: t.string(),
    severity: t.field({ type: Severity }),
    rule: t.string(),
    issueMessage: t.string(),
    affects: t.string(),
    line: t.int(),
  }),
})

export const DatasetValidation = builder.simpleObject("DatasetValidation", {
  fields: (t) => ({
    id: t.string(),
    datasetId: t.string(),
    issues: t.field({ type: [ValidatorIssue] }),
    codeMessages: t.field({ type: [ValidatorCodeMessage] }),
    errors: t.int(),
    warnings: t.int(),
  }),
})

export const ValidationIssue = builder.simpleObject("ValidationIssue", {
  fields: (t) => ({
    severity: t.field({ type: Severity, nullable: false }),
    key: t.string({ nullable: false }),
    code: t.int(),
    reason: t.string({ nullable: false }),
    files: t.field({ type: [ValidationIssueFile] }),
    additionalFileCount: t.int(),
    helpUrl: t.string(),
  }),
})
