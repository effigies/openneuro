import { builder } from "../builder"

// Resolver imports — grouped by source file
import {
  createDataset,
  deleteDataset,
  deleteFiles,
  flagAnnexObject,
  removeAnnexObject,
  trackAnalytics,
  updatePublic,
} from "../resolvers/dataset.js"
import {
  createSnapshot,
  deleteSnapshot,
  deprecateSnapshot,
  undoDeprecateSnapshot,
} from "../resolvers/snapshots.js"
import {
  removeUser,
  setAdmin,
  setBlocked,
  updateUser,
} from "../resolvers/user.js"
import { updateSummary } from "../resolvers/summary"
import { revalidate, updateValidation } from "../resolvers/validation.js"
import {
  removePermissions,
  updateOrcidPermissions,
  updatePermissions,
} from "../resolvers/permissions"
import { followDataset } from "../resolvers/follow.js"
import { starDataset } from "../resolvers/stars.js"
import { publishDataset } from "../resolvers/publish.js"
import {
  updateDescription,
  updateDescriptionList,
} from "../resolvers/description.js"
import { updateReadme } from "../resolvers/readme.js"
import { addComment, deleteComment, editComment } from "../resolvers/comment.js"
import { subscribeToNewsletter } from "../resolvers/newsletter"
import { addMetadata } from "../resolvers/metadata"
import { finishUpload, prepareUpload } from "../resolvers/upload.js"
import { prepareRepoAccess } from "../resolvers/git"
import { cacheClear } from "../resolvers/cache"
import { reexportRemotes } from "../resolvers/reexporter"
import { resetDraft } from "../resolvers/reset"
import { createReviewer, deleteReviewer } from "../resolvers/reviewer"
import { createRelation, deleteRelation } from "../resolvers/relation"
import {
  finishImportRemoteDataset,
  importRemoteDataset,
} from "../resolvers/importRemoteDataset"
import {
  createContributorCitationEvent,
  createContributorRequestEvent,
  processContributorCitation,
  processContributorRequest,
  saveAdminNote,
  updateEventStatus,
} from "../resolvers/datasetEvents"
import { createGitEvent } from "../resolvers/gitEvents"
import { fsckDataset, updateFileCheck } from "../resolvers/fileCheck"
import { updateContributors } from "../../datalad/contributors"
import { updateWorkerTask } from "../resolvers/worker"

// Input type imports
import {
  AnnexFsckInput,
  ContributorInput,
  DeleteFile,
  MetadataInput,
  SummaryInput,
  ValidatorInput,
} from "./inputs"

// Enum imports
import {
  AnalyticTypes,
  NotificationStatusType,
  RelatedObjectKind,
  RelatedObjectRelation,
  ResponseStatusType,
} from "./enums"

import { DatasetEventRef, DatasetRef, SnapshotRef, UserRef } from "./refs"
import { Metadata as MetadataRef, Summary as SummaryRef } from "./metadata"
import { DatasetPermissions as DatasetPermissionsRef } from "./permissions"
import {
  Description as DescriptionRef,
  UpdateContributorsPayload as UpdateContributorsPayloadRef,
} from "./description"
import {
  FileCheck as FileCheckRef,
  FollowDatasetResponse as FollowDatasetResponseRef,
  RepoMetadata as RepoMetadataRef,
  StarDatasetResponse as StarDatasetResponseRef,
  UserNotificationStatus as UserNotificationStatusRef,
} from "./misc"
import { UploadMetadata as UploadMetadataRef } from "./upload"
import { DatasetReviewer as DatasetReviewerRef } from "./reviewer"
import { WorkerTask as WorkerTaskRef } from "./worker"

builder.mutationType({
  fields: (t) => ({
    createDataset: t.field({
      type: DatasetRef,
      args: {
        affirmedDefaced: t.arg.boolean(),
        affirmedConsent: t.arg.boolean(),
      },
      resolve: (root, args, context) => createDataset(root, args, context),
    }),

    deleteDataset: t.boolean({
      args: {
        id: t.arg.id({ required: true }),
        reason: t.arg.string(),
        redirect: t.arg.string(),
      },
      resolve: (root, args, context) =>
        deleteDataset(
          root,
          {
            id: args.id as string,
            reason: args.reason,
            redirect: args.redirect,
          },
          context,
        ),
    }),

    createSnapshot: t.field({
      type: SnapshotRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        tag: t.arg.string({ required: true }),
        changes: t.arg.stringList(),
      },
      resolve: (root, args, context) =>
        createSnapshot(
          root,
          {
            datasetId: args.datasetId as string,
            tag: args.tag,
            changes: args.changes,
          },
          context,
        ),
    }),

    deleteSnapshot: t.boolean({
      nullable: false,
      args: {
        datasetId: t.arg.id({ required: true }),
        tag: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        deleteSnapshot(
          root,
          { datasetId: args.datasetId as string, tag: args.tag },
          context,
        ),
    }),

    removeAnnexObject: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        snapshot: t.arg.string({ required: true }),
        annexKey: t.arg.string({ required: true }),
        path: t.arg.string(),
        filename: t.arg.string(),
      },
      resolve: (root, args, context) =>
        removeAnnexObject(root, args as Record<string, unknown>, context),
    }),

    flagAnnexObject: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        snapshot: t.arg.string({ required: true }),
        filepath: t.arg.string({ required: true }),
        annexKey: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        flagAnnexObject(root, args as Record<string, unknown>, context),
    }),

    deleteFiles: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        files: t.arg({
          type: [DeleteFile],
          required: { list: false, items: false },
        }),
      },
      resolve: (root, args, context) =>
        deleteFiles(
          root,
          { datasetId: args.datasetId as string, files: args.files },
          context,
        ),
    }),

    updatePublic: t.boolean({
      nullable: false,
      args: {
        datasetId: t.arg.id({ required: true }),
        publicFlag: t.arg.boolean({ required: true }),
      },
      resolve: (root, args, context) =>
        updatePublic(
          root,
          { datasetId: args.datasetId as string, publicFlag: args.publicFlag },
          context,
        ),
    }),

    updateSummary: t.field({
      type: SummaryRef,
      args: {
        summary: t.arg({ type: SummaryInput, required: true }),
      },
      resolve: (root, args) => updateSummary(root, { summary: args.summary }),
    }),

    updateValidation: t.boolean({
      args: {
        validation: t.arg({ type: ValidatorInput, required: true }),
      },
      resolve: (root, args) =>
        updateValidation(root, { validation: args.validation }),
    }),

    updatePermissions: t.field({
      type: DatasetPermissionsRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        userEmail: t.arg.string({ required: true }),
        level: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        updatePermissions(root, args as Record<string, unknown>, context),
    }),

    updateOrcidPermissions: t.field({
      type: DatasetPermissionsRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        userOrcid: t.arg.string({ required: true }),
        level: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        updateOrcidPermissions(root, args as Record<string, unknown>, context),
    }),

    removePermissions: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        userId: t.arg.string({ required: true }),
      },
      resolve: (root, args) => removePermissions(root, args),
    }),

    removeUser: t.boolean({
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        removeUser(root, { id: args.id as string }, context),
    }),

    setAdmin: t.field({
      type: UserRef,
      args: {
        id: t.arg.id({ required: true }),
        admin: t.arg.boolean({ required: true }),
      },
      resolve: (root, args, context) =>
        setAdmin(root, { id: args.id as string, admin: args.admin }, context),
    }),

    setBlocked: t.field({
      type: UserRef,
      args: {
        id: t.arg.id({ required: true }),
        blocked: t.arg.boolean({ required: true }),
      },
      resolve: (root, args, context) =>
        setBlocked(
          root,
          { id: args.id as string, blocked: args.blocked },
          context,
        ),
    }),

    updateUser: t.field({
      type: UserRef,
      args: {
        id: t.arg.id({ required: true }),
        location: t.arg.string(),
        institution: t.arg.string(),
        links: t.arg.stringList({ required: { list: false, items: false } }),
        orcidConsent: t.arg.boolean(),
      },
      resolve: (root, args, context) =>
        updateUser(root, args as Record<string, unknown>, context),
    }),

    trackAnalytics: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        tag: t.arg.string(),
        type: t.arg({ type: AnalyticTypes }),
      },
      resolve: (root, args) => trackAnalytics(root, args),
    }),

    followDataset: t.field({
      type: FollowDatasetResponseRef,
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        followDataset(
          root,
          { datasetId: args.datasetId as string },
          context,
        ),
    }),

    starDataset: t.field({
      type: StarDatasetResponseRef,
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        starDataset(
          root,
          { datasetId: args.datasetId as string },
          context,
        ),
    }),

    publishDataset: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        publishDataset(
          root,
          { datasetId: args.datasetId as string },
          context,
        ),
    }),

    updateDescription: t.field({
      type: DescriptionRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        field: t.arg.string({ required: true }),
        value: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        updateDescription(
          root,
          {
            datasetId: args.datasetId as string,
            field: args.field,
            value: args.value,
          },
          context,
        ),
    }),

    updateDescriptionList: t.field({
      type: DescriptionRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        field: t.arg.string({ required: true }),
        value: t.arg.stringList(),
      },
      resolve: (root, args, context) =>
        updateDescriptionList(
          root,
          {
            datasetId: args.datasetId as string,
            field: args.field,
            value: args.value,
          },
          context,
        ),
    }),

    updateReadme: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        value: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        updateReadme(
          root,
          { datasetId: args.datasetId as string, value: args.value },
          context,
        ),
    }),

    addComment: t.id({
      args: {
        datasetId: t.arg.id({ required: true }),
        parentId: t.arg.id(),
        comment: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        addComment(
          root,
          {
            datasetId: args.datasetId as string,
            parentId: args.parentId as string | undefined,
            comment: args.comment,
          },
          context,
        ),
    }),

    editComment: t.boolean({
      args: {
        commentId: t.arg.id({ required: true }),
        comment: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        editComment(
          root,
          { commentId: args.commentId as string, comment: args.comment },
          context,
        ),
    }),

    deleteComment: t.stringList({
      nullable: { list: true, items: true },
      args: {
        commentId: t.arg.id({ required: true }),
        deleteChildren: t.arg.boolean(),
      },
      resolve: (root, args, context) =>
        deleteComment(
          root,
          {
            commentId: args.commentId as string,
            deleteChildren: args.deleteChildren,
          },
          context,
        ),
    }),

    subscribeToNewsletter: t.boolean({
      args: {
        email: t.arg.string({ required: true }),
      },
      resolve: (root, args) =>
        subscribeToNewsletter(root, { email: args.email }),
    }),

    addMetadata: t.field({
      type: MetadataRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        metadata: t.arg({ type: MetadataInput, required: true }),
      },
      resolve: (root, args) =>
        addMetadata(root, {
          datasetId: args.datasetId as string,
          metadata: args.metadata,
        }),
    }),

    prepareUpload: t.field({
      type: UploadMetadataRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        uploadId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        prepareUpload(
          root,
          {
            datasetId: args.datasetId as string,
            uploadId: args.uploadId as string,
          },
          context,
        ),
    }),

    finishUpload: t.boolean({
      args: {
        uploadId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        finishUpload(root, { uploadId: args.uploadId as string }, context),
    }),

    cacheClear: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        cacheClear(root, { datasetId: args.datasetId as string }, context),
    }),

    fsckDataset: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        fsckDataset(root, { datasetId: args.datasetId as string }, context),
    }),

    revalidate: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        ref: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        revalidate(
          root,
          { datasetId: args.datasetId as string, ref: args.ref },
          context,
        ),
    }),

    prepareRepoAccess: t.field({
      type: RepoMetadataRef,
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        prepareRepoAccess(
          root,
          { datasetId: args.datasetId as string },
          context,
        ),
    }),

    reexportRemotes: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        reexportRemotes(
          root,
          { datasetId: args.datasetId as string },
          context,
        ),
    }),

    resetDraft: t.boolean({
      args: {
        datasetId: t.arg.id({ required: true }),
        ref: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        resetDraft(
          root,
          { datasetId: args.datasetId as string, ref: args.ref },
          context,
        ),
    }),

    deprecateSnapshot: t.field({
      type: SnapshotRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        tag: t.arg.string({ required: true }),
        reason: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        deprecateSnapshot(
          root,
          {
            datasetId: args.datasetId as string,
            tag: args.tag,
            reason: args.reason,
          },
          context,
        ),
    }),

    undoDeprecateSnapshot: t.field({
      type: SnapshotRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        tag: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        undoDeprecateSnapshot(
          root,
          { datasetId: args.datasetId as string, tag: args.tag },
          context,
        ),
    }),

    createReviewer: t.field({
      type: DatasetReviewerRef,
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        createReviewer(
          root,
          { datasetId: args.datasetId as string },
          context,
        ),
    }),

    deleteReviewer: t.field({
      type: DatasetReviewerRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        id: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        deleteReviewer(
          root,
          { datasetId: args.datasetId as string, id: args.id as string },
          context,
        ),
    }),

    createRelation: t.field({
      type: DatasetRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        doi: t.arg.string({ required: true }),
        relation: t.arg({ type: RelatedObjectRelation, required: true }),
        kind: t.arg({ type: RelatedObjectKind, required: true }),
        description: t.arg.string(),
      },
      resolve: (root, args, context) =>
        createRelation(root, args as Record<string, unknown>, context),
    }),

    deleteRelation: t.field({
      type: DatasetRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        doi: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        deleteRelation(
          root,
          { datasetId: args.datasetId as string, doi: args.doi },
          context,
        ),
    }),

    importRemoteDataset: t.id({
      args: {
        datasetId: t.arg.id({ required: true }),
        url: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        importRemoteDataset(
          root,
          { datasetId: args.datasetId as string, url: args.url },
          context,
        ),
    }),

    finishImportRemoteDataset: t.boolean({
      args: {
        id: t.arg.id({ required: true }),
        success: t.arg.boolean({ required: true }),
        message: t.arg.string(),
      },
      resolve: (root, args, context) =>
        finishImportRemoteDataset(
          root,
          {
            id: args.id as string,
            success: args.success,
            message: args.message,
          },
          context,
        ),
    }),

    saveAdminNote: t.field({
      type: DatasetEventRef,
      args: {
        id: t.arg.id(),
        datasetId: t.arg.id({ required: true }),
        note: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        saveAdminNote(
          root,
          {
            id: args.id as string | undefined,
            datasetId: args.datasetId as string,
            note: args.note,
          },
          context,
        ),
    }),

    createGitEvent: t.field({
      type: DatasetEventRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        commit: t.arg.string({ required: true }),
        reference: t.arg.string({ required: true }),
      },
      resolve: (root, args, context) =>
        createGitEvent(
          root,
          {
            datasetId: args.datasetId as string,
            commit: args.commit,
            reference: args.reference,
          },
          context,
        ),
    }),

    createContributorRequestEvent: t.field({
      type: DatasetEventRef,
      args: {
        datasetId: t.arg.id({ required: true }),
      },
      resolve: (root, args, context) =>
        createContributorRequestEvent(
          root,
          { datasetId: args.datasetId as string },
          context,
        ),
    }),

    processContributorRequest: t.field({
      type: DatasetEventRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        targetUserId: t.arg.id({ required: true }),
        requestId: t.arg.id({ required: true }),
        resolutionStatus: t.arg({ type: ResponseStatusType, required: true }),
        reason: t.arg.string(),
      },
      resolve: (root, args, context) =>
        processContributorRequest(
          root,
          {
            datasetId: args.datasetId as string,
            targetUserId: args.targetUserId as string,
            requestId: args.requestId as string,
            resolutionStatus: args.resolutionStatus as "ACCEPTED" | "DENIED",
            reason: args.reason,
          },
          context,
        ),
    }),

    updateFileCheck: t.field({
      type: FileCheckRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        hexsha: t.arg.string({ required: true }),
        refs: t.arg.stringList({ required: true }),
        annexFsck: t.arg({ type: [AnnexFsckInput], required: true }),
        remote: t.arg.string(),
      },
      resolve: (root, args, context) =>
        updateFileCheck(root, args as Record<string, unknown>, context),
    }),

    updateEventStatus: t.field({
      type: UserNotificationStatusRef,
      args: {
        eventId: t.arg.id({ required: true }),
        status: t.arg({ type: NotificationStatusType, required: true }),
      },
      resolve: (root, args, context) =>
        updateEventStatus(
          root,
          { eventId: args.eventId as string, status: args.status },
          context,
        ),
    }),

    updateContributors: t.field({
      type: UpdateContributorsPayloadRef,
      nullable: false,
      args: {
        datasetId: t.arg.string({ required: true }),
        newContributors: t.arg({ type: [ContributorInput], required: true }),
      },
      resolve: (root, args, context) =>
        updateContributors(root, args as Record<string, unknown>, context),
    }),

    createContributorCitationEvent: t.field({
      type: DatasetEventRef,
      args: {
        datasetId: t.arg.id({ required: true }),
        targetUserId: t.arg.id({ required: true }),
        contributorData: t.arg({ type: ContributorInput, required: true }),
      },
      resolve: (root, args, context) =>
        createContributorCitationEvent(
          root,
          {
            datasetId: args.datasetId as string,
            targetUserId: args.targetUserId as string,
            contributorData: args.contributorData as Record<string, unknown>,
          },
          context,
        ),
    }),

    processContributorCitation: t.field({
      type: DatasetEventRef,
      args: {
        eventId: t.arg.id({ required: true }),
        status: t.arg({ type: ResponseStatusType, required: true }),
      },
      resolve: (root, args, context) =>
        processContributorCitation(
          root,
          {
            eventId: args.eventId as string,
            status: args.status as "ACCEPTED" | "DENIED",
          },
          context,
        ),
    }),

    updateWorkerTask: t.field({
      type: WorkerTaskRef,
      args: {
        id: t.arg.id({ required: true }),
        args: t.arg({ type: "JSON" }),
        kwargs: t.arg({ type: "JSON" }),
        taskName: t.arg.string(),
        worker: t.arg.string(),
        queuedAt: t.arg({ type: "DateTime" }),
        startedAt: t.arg({ type: "DateTime" }),
        finishedAt: t.arg({ type: "DateTime" }),
        error: t.arg.string(),
        executionTime: t.arg.int(),
      },
      resolve: (root, mutationArgs, context) =>
        updateWorkerTask(
          root,
          mutationArgs as Record<string, unknown>,
          context,
        ),
    }),
  }),
})
