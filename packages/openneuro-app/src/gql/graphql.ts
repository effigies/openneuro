/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export type Analytic = {
  __typename?: 'Analytic';
  datasetId: Scalars['ID']['output'];
  downloads?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export enum AnalyticTypes {
  Downloads = 'downloads',
  Views = 'views'
}

export type AnnexFsck = {
  __typename?: 'AnnexFsck';
  command?: Maybe<Scalars['String']['output']>;
  errorMessages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  file?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AnnexFsckInput = {
  command?: InputMaybe<Scalars['String']['input']>;
  dead?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  file?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key?: InputMaybe<Scalars['String']['input']>;
  missing?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  note?: InputMaybe<Scalars['String']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
  untrusted?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Author = {
  __typename?: 'Author';
  ORCID?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Comment = {
  __typename?: 'Comment';
  createDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  parent?: Maybe<Comment>;
  replies?: Maybe<Array<Maybe<Comment>>>;
  text: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type Contributor = {
  __typename?: 'Contributor';
  contributorType: Scalars['String']['output'];
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  orcid?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
};

export type ContributorInput = {
  contributorType?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orcid?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type Dataset = {
  __typename?: 'Dataset';
  analytics?: Maybe<Analytic>;
  brainInitiative?: Maybe<Scalars['Boolean']['output']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  created: Scalars['DateTime']['output'];
  derivatives?: Maybe<Array<Maybe<DatasetDerivatives>>>;
  draft?: Maybe<Draft>;
  events?: Maybe<Array<Maybe<DatasetEvent>>>;
  followers?: Maybe<Array<Maybe<Follower>>>;
  following?: Maybe<Scalars['Boolean']['output']>;
  history?: Maybe<Array<Maybe<DatasetCommit>>>;
  id: Scalars['ID']['output'];
  latestSnapshot: Snapshot;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']['output']>;
  onBrainlife?: Maybe<Scalars['Boolean']['output']>;
  permissions?: Maybe<DatasetPermissions>;
  public?: Maybe<Scalars['Boolean']['output']>;
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  reviewers?: Maybe<Array<Maybe<DatasetReviewer>>>;
  snapshots?: Maybe<Array<Maybe<Snapshot>>>;
  starred?: Maybe<Scalars['Boolean']['output']>;
  stars?: Maybe<Array<Maybe<Star>>>;
  uploader?: Maybe<User>;
  worker?: Maybe<Scalars['String']['output']>;
};

export type DatasetCommit = {
  __typename?: 'DatasetCommit';
  authorEmail?: Maybe<Scalars['String']['output']>;
  authorName?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  deletions?: Maybe<Scalars['Int']['output']>;
  files?: Maybe<Array<Maybe<DiffFiles>>>;
  filesChanged?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  insertions?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  references?: Maybe<Scalars['String']['output']>;
};

export type DatasetConnection = {
  __typename?: 'DatasetConnection';
  edges?: Maybe<Array<Maybe<DatasetEdge>>>;
  pageInfo: PageInfo;
};

export type DatasetDerivatives = {
  __typename?: 'DatasetDerivatives';
  dataladUrl?: Maybe<Scalars['String']['output']>;
  local?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  s3Url?: Maybe<Scalars['String']['output']>;
};

export type DatasetEdge = {
  __typename?: 'DatasetEdge';
  cursor: Scalars['String']['output'];
  id: Scalars['String']['output'];
  node: Dataset;
};

export type DatasetEvent = {
  __typename?: 'DatasetEvent';
  datasetId?: Maybe<Scalars['ID']['output']>;
  event?: Maybe<DatasetEventDescription>;
  hasBeenRespondedTo?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  notificationStatus?: Maybe<UserNotificationStatus>;
  responseStatus?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  timestamp: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type DatasetEventDescription = {
  __typename?: 'DatasetEventDescription';
  contributorData?: Maybe<Contributor>;
  datasetId?: Maybe<Scalars['ID']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  resolutionStatus?: Maybe<Scalars['String']['output']>;
  target?: Maybe<User>;
  targetUserId?: Maybe<Scalars['ID']['output']>;
  type: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

export type DatasetFile = {
  __typename?: 'DatasetFile';
  annexed?: Maybe<Scalars['Boolean']['output']>;
  directory?: Maybe<Scalars['Boolean']['output']>;
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['BigInt']['output']>;
  urls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DatasetFilter = {
  /** Return all datasets, ignores any other constraints but not sorts */
  all?: InputMaybe<Scalars['Boolean']['input']>;
  /** Return only datasets with an invalid Draft */
  invalid?: InputMaybe<Scalars['Boolean']['input']>;
  /** Limit to datasets available publicly */
  public?: InputMaybe<Scalars['Boolean']['input']>;
  /** Return only datasets that are shared with the user */
  shared?: InputMaybe<Scalars['Boolean']['input']>;
  /** Return only datasets starred by the query user */
  starred?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DatasetId = {
  __typename?: 'DatasetId';
  datasetId?: Maybe<Scalars['ID']['output']>;
};

export type DatasetPermissions = {
  __typename?: 'DatasetPermissions';
  id: Scalars['ID']['output'];
  userPermissions?: Maybe<Array<Maybe<Permission>>>;
};

export type DatasetReviewer = {
  __typename?: 'DatasetReviewer';
  datasetId: Scalars['ID']['output'];
  expiration?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type DatasetSort = {
  created?: InputMaybe<SortOrdering>;
  downloads?: InputMaybe<SortOrdering>;
  name?: InputMaybe<SortOrdering>;
  publishDate?: InputMaybe<SortOrdering>;
  stars?: InputMaybe<SortOrdering>;
  subscriptions?: InputMaybe<SortOrdering>;
  uploader?: InputMaybe<SortOrdering>;
  views?: InputMaybe<SortOrdering>;
};

export type DatasetValidation = {
  __typename?: 'DatasetValidation';
  codeMessages?: Maybe<Array<Maybe<ValidatorCodeMessage>>>;
  datasetId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  issues?: Maybe<Array<Maybe<ValidatorIssue>>>;
  warnings?: Maybe<Scalars['Int']['output']>;
};

export type DeleteFile = {
  filename?: InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
};

export type DeprecatedSnapshot = {
  __typename?: 'DeprecatedSnapshot';
  id: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type Description = {
  __typename?: 'Description';
  Acknowledgements?: Maybe<Scalars['String']['output']>;
  Authors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BIDSVersion: Scalars['String']['output'];
  DatasetDOI?: Maybe<Scalars['String']['output']>;
  DatasetType?: Maybe<Scalars['String']['output']>;
  EthicsApprovals?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Funding?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  HowToAcknowledge?: Maybe<Scalars['String']['output']>;
  License?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  ReferencesAndLinks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeniorAuthor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type DiffFiles = {
  __typename?: 'DiffFiles';
  binary?: Maybe<Scalars['Boolean']['output']>;
  mode?: Maybe<Scalars['Int']['output']>;
  new?: Maybe<Scalars['String']['output']>;
  old?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Draft = {
  __typename?: 'Draft';
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  dataset?: Maybe<Dataset>;
  description?: Maybe<Description>;
  fileCheck?: Maybe<FileCheck>;
  files?: Maybe<Array<Maybe<DatasetFile>>>;
  head?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  issues?: Maybe<Array<Maybe<ValidationIssue>>>;
  issuesStatus?: Maybe<ValidationIssueStatus>;
  modified?: Maybe<Scalars['DateTime']['output']>;
  readme?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['BigInt']['output']>;
  summary?: Maybe<Summary>;
  uploads?: Maybe<Array<Maybe<UploadMetadata>>>;
  validation?: Maybe<DatasetValidation>;
};


export type DraftFilesArgs = {
  tree?: InputMaybe<Scalars['String']['input']>;
};

export type FileCheck = {
  __typename?: 'FileCheck';
  annexFsck?: Maybe<Array<AnnexFsck>>;
  datasetId: Scalars['String']['output'];
  hexsha: Scalars['String']['output'];
  refs: Array<Scalars['String']['output']>;
  remote?: Maybe<Scalars['String']['output']>;
};

export type FilesUpdate = {
  __typename?: 'FilesUpdate';
  action?: Maybe<Scalars['String']['output']>;
  datasetId?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Array<Maybe<DatasetFile>>>;
};

export type FlaggedFile = {
  __typename?: 'FlaggedFile';
  annexKey?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  datasetId?: Maybe<Scalars['String']['output']>;
  filepath?: Maybe<Scalars['String']['output']>;
  flagged?: Maybe<Scalars['Boolean']['output']>;
  flagger?: Maybe<User>;
  removed?: Maybe<Scalars['Boolean']['output']>;
  remover?: Maybe<User>;
  snapshot?: Maybe<Scalars['String']['output']>;
};

export type FollowDatasetResponse = {
  __typename?: 'FollowDatasetResponse';
  following?: Maybe<Scalars['Boolean']['output']>;
  newFollower?: Maybe<Follower>;
};

export type Follower = {
  __typename?: 'Follower';
  datasetId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  adminUsers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  affirmedConsent?: Maybe<Scalars['Boolean']['output']>;
  affirmedDefaced?: Maybe<Scalars['Boolean']['output']>;
  ages?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  associatedPaperDOI?: Maybe<Scalars['String']['output']>;
  dataProcessed?: Maybe<Scalars['Boolean']['output']>;
  datasetId: Scalars['ID']['output'];
  datasetName?: Maybe<Scalars['String']['output']>;
  datasetUrl?: Maybe<Scalars['String']['output']>;
  dxStatus?: Maybe<Scalars['String']['output']>;
  firstSnapshotCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  grantFunderName?: Maybe<Scalars['String']['output']>;
  grantIdentifier?: Maybe<Scalars['String']['output']>;
  latestSnapshotCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  modalities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  openneuroPaperDOI?: Maybe<Scalars['String']['output']>;
  seniorAuthor?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Scalars['String']['output']>;
  studyDesign?: Maybe<Scalars['String']['output']>;
  studyDomain?: Maybe<Scalars['String']['output']>;
  studyLongitudinal?: Maybe<Scalars['String']['output']>;
  tasksCompleted?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  trialCount?: Maybe<Scalars['Int']['output']>;
};

export type MetadataInput = {
  adminUsers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  affirmedConsent?: InputMaybe<Scalars['Boolean']['input']>;
  affirmedDefaced?: InputMaybe<Scalars['Boolean']['input']>;
  ages?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  associatedPaperDOI?: InputMaybe<Scalars['String']['input']>;
  dataProcessed?: InputMaybe<Scalars['Boolean']['input']>;
  datasetId: Scalars['ID']['input'];
  datasetName?: InputMaybe<Scalars['String']['input']>;
  datasetUrl?: InputMaybe<Scalars['String']['input']>;
  dxStatus?: InputMaybe<Scalars['String']['input']>;
  firstSnapshotCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  grantFunderName?: InputMaybe<Scalars['String']['input']>;
  grantIdentifier?: InputMaybe<Scalars['String']['input']>;
  latestSnapshotCreatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  modalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openneuroPaperDOI?: InputMaybe<Scalars['String']['input']>;
  seniorAuthor?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
  studyDesign?: InputMaybe<Scalars['String']['input']>;
  studyDomain?: InputMaybe<Scalars['String']['input']>;
  studyLongitudinal?: InputMaybe<Scalars['String']['input']>;
  tasksCompleted?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  trialCount?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<Scalars['ID']['output']>;
  addMetadata?: Maybe<Metadata>;
  cacheClear?: Maybe<Scalars['Boolean']['output']>;
  createContributorCitationEvent?: Maybe<DatasetEvent>;
  createContributorRequestEvent?: Maybe<DatasetEvent>;
  createDataset?: Maybe<Dataset>;
  createGitEvent?: Maybe<DatasetEvent>;
  createRelation?: Maybe<Dataset>;
  createReviewer?: Maybe<DatasetReviewer>;
  createSnapshot?: Maybe<Snapshot>;
  deleteComment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  deleteDataset?: Maybe<Scalars['Boolean']['output']>;
  deleteFiles?: Maybe<Scalars['Boolean']['output']>;
  deleteRelation?: Maybe<Dataset>;
  deleteReviewer?: Maybe<DatasetReviewer>;
  deleteSnapshot: Scalars['Boolean']['output'];
  deprecateSnapshot?: Maybe<Snapshot>;
  editComment?: Maybe<Scalars['Boolean']['output']>;
  finishImportRemoteDataset?: Maybe<Scalars['Boolean']['output']>;
  finishUpload?: Maybe<Scalars['Boolean']['output']>;
  flagAnnexObject?: Maybe<Scalars['Boolean']['output']>;
  followDataset?: Maybe<FollowDatasetResponse>;
  fsckDataset?: Maybe<Scalars['Boolean']['output']>;
  importRemoteDataset?: Maybe<Scalars['ID']['output']>;
  prepareRepoAccess?: Maybe<RepoMetadata>;
  prepareUpload?: Maybe<UploadMetadata>;
  processContributorCitation?: Maybe<DatasetEvent>;
  processContributorRequest?: Maybe<DatasetEvent>;
  publishDataset?: Maybe<Scalars['Boolean']['output']>;
  reexportRemotes?: Maybe<Scalars['Boolean']['output']>;
  removeAnnexObject?: Maybe<Scalars['Boolean']['output']>;
  removePermissions?: Maybe<Scalars['Boolean']['output']>;
  removeUser?: Maybe<Scalars['Boolean']['output']>;
  resetDraft?: Maybe<Scalars['Boolean']['output']>;
  revalidate?: Maybe<Scalars['Boolean']['output']>;
  saveAdminNote?: Maybe<DatasetEvent>;
  setAdmin?: Maybe<User>;
  setBlocked?: Maybe<User>;
  starDataset?: Maybe<StarDatasetResponse>;
  subscribeToNewsletter?: Maybe<Scalars['Boolean']['output']>;
  trackAnalytics?: Maybe<Scalars['Boolean']['output']>;
  undoDeprecateSnapshot?: Maybe<Snapshot>;
  updateContributors: UpdateContributorsPayload;
  updateDescription?: Maybe<Description>;
  updateDescriptionList?: Maybe<Description>;
  updateEventStatus?: Maybe<UserNotificationStatus>;
  updateFileCheck?: Maybe<FileCheck>;
  updateOrcidPermissions?: Maybe<DatasetPermissions>;
  updatePermissions?: Maybe<DatasetPermissions>;
  updatePublic: Scalars['Boolean']['output'];
  updateReadme?: Maybe<Scalars['Boolean']['output']>;
  updateSummary?: Maybe<Summary>;
  updateUser?: Maybe<User>;
  updateValidation?: Maybe<Scalars['Boolean']['output']>;
  updateWorkerTask?: Maybe<WorkerTask>;
};


export type MutationAddCommentArgs = {
  comment: Scalars['String']['input'];
  datasetId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAddMetadataArgs = {
  datasetId: Scalars['ID']['input'];
  metadata: MetadataInput;
};


export type MutationCacheClearArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationCreateContributorCitationEventArgs = {
  contributorData: ContributorInput;
  datasetId: Scalars['ID']['input'];
  targetUserId: Scalars['ID']['input'];
};


export type MutationCreateContributorRequestEventArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationCreateDatasetArgs = {
  affirmedConsent?: InputMaybe<Scalars['Boolean']['input']>;
  affirmedDefaced?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateGitEventArgs = {
  commit: Scalars['String']['input'];
  datasetId: Scalars['ID']['input'];
  reference: Scalars['String']['input'];
};


export type MutationCreateRelationArgs = {
  datasetId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  doi: Scalars['String']['input'];
  kind: RelatedObjectKind;
  relation: RelatedObjectRelation;
};


export type MutationCreateReviewerArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationCreateSnapshotArgs = {
  changes?: InputMaybe<Array<Scalars['String']['input']>>;
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['ID']['input'];
  deleteChildren?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteDatasetArgs = {
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteFilesArgs = {
  datasetId: Scalars['ID']['input'];
  files?: InputMaybe<Array<InputMaybe<DeleteFile>>>;
};


export type MutationDeleteRelationArgs = {
  datasetId: Scalars['ID']['input'];
  doi: Scalars['String']['input'];
};


export type MutationDeleteReviewerArgs = {
  datasetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteSnapshotArgs = {
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
};


export type MutationDeprecateSnapshotArgs = {
  datasetId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};


export type MutationEditCommentArgs = {
  comment: Scalars['String']['input'];
  commentId: Scalars['ID']['input'];
};


export type MutationFinishImportRemoteDatasetArgs = {
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  success: Scalars['Boolean']['input'];
};


export type MutationFinishUploadArgs = {
  uploadId: Scalars['ID']['input'];
};


export type MutationFlagAnnexObjectArgs = {
  annexKey: Scalars['String']['input'];
  datasetId: Scalars['ID']['input'];
  filepath: Scalars['String']['input'];
  snapshot: Scalars['String']['input'];
};


export type MutationFollowDatasetArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationFsckDatasetArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationImportRemoteDatasetArgs = {
  datasetId: Scalars['ID']['input'];
  url: Scalars['String']['input'];
};


export type MutationPrepareRepoAccessArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationPrepareUploadArgs = {
  datasetId: Scalars['ID']['input'];
  uploadId: Scalars['ID']['input'];
};


export type MutationProcessContributorCitationArgs = {
  eventId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};


export type MutationProcessContributorRequestArgs = {
  datasetId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['ID']['input'];
  resolutionStatus: Scalars['String']['input'];
  targetUserId: Scalars['ID']['input'];
};


export type MutationPublishDatasetArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationReexportRemotesArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationRemoveAnnexObjectArgs = {
  annexKey: Scalars['String']['input'];
  datasetId: Scalars['ID']['input'];
  filename?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  snapshot: Scalars['String']['input'];
};


export type MutationRemovePermissionsArgs = {
  datasetId: Scalars['ID']['input'];
  userId: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetDraftArgs = {
  datasetId: Scalars['ID']['input'];
  ref: Scalars['String']['input'];
};


export type MutationRevalidateArgs = {
  datasetId: Scalars['ID']['input'];
  ref: Scalars['String']['input'];
};


export type MutationSaveAdminNoteArgs = {
  datasetId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  note: Scalars['String']['input'];
};


export type MutationSetAdminArgs = {
  admin: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationSetBlockedArgs = {
  blocked: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationStarDatasetArgs = {
  datasetId: Scalars['ID']['input'];
};


export type MutationSubscribeToNewsletterArgs = {
  email: Scalars['String']['input'];
};


export type MutationTrackAnalyticsArgs = {
  datasetId: Scalars['ID']['input'];
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AnalyticTypes>;
};


export type MutationUndoDeprecateSnapshotArgs = {
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
};


export type MutationUpdateContributorsArgs = {
  datasetId: Scalars['String']['input'];
  newContributors: Array<ContributorInput>;
};


export type MutationUpdateDescriptionArgs = {
  datasetId: Scalars['ID']['input'];
  field: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type MutationUpdateDescriptionListArgs = {
  datasetId: Scalars['ID']['input'];
  field: Scalars['String']['input'];
  value?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUpdateEventStatusArgs = {
  eventId: Scalars['ID']['input'];
  status: NotificationStatusType;
};


export type MutationUpdateFileCheckArgs = {
  annexFsck: Array<AnnexFsckInput>;
  datasetId: Scalars['ID']['input'];
  hexsha: Scalars['String']['input'];
  refs: Array<Scalars['String']['input']>;
  remote?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateOrcidPermissionsArgs = {
  datasetId: Scalars['ID']['input'];
  level: Scalars['String']['input'];
  userOrcid: Scalars['String']['input'];
};


export type MutationUpdatePermissionsArgs = {
  datasetId: Scalars['ID']['input'];
  level: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationUpdatePublicArgs = {
  datasetId: Scalars['ID']['input'];
  publicFlag: Scalars['Boolean']['input'];
};


export type MutationUpdateReadmeArgs = {
  datasetId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};


export type MutationUpdateSummaryArgs = {
  summary: SummaryInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  orcidConsent?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateValidationArgs = {
  validation: ValidatorInput;
};


export type MutationUpdateWorkerTaskArgs = {
  args?: InputMaybe<Scalars['JSON']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  finishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  kwargs?: InputMaybe<Scalars['JSON']['input']>;
  queuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  taskName?: InputMaybe<Scalars['String']['input']>;
  worker?: InputMaybe<Scalars['String']['input']>;
};

export enum NotificationStatusType {
  Archived = 'ARCHIVED',
  Saved = 'SAVED',
  Unread = 'UNREAD'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  count?: Maybe<Scalars['Int']['output']>;
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Permission = {
  __typename?: 'Permission';
  datasetId: Scalars['ID']['output'];
  level: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  advancedSearch?: Maybe<DatasetConnection>;
  dataset?: Maybe<Dataset>;
  datasets?: Maybe<DatasetConnection>;
  flaggedFiles?: Maybe<Array<Maybe<FlaggedFile>>>;
  orcidConsent?: Maybe<Scalars['Boolean']['output']>;
  participantCount?: Maybe<Scalars['Int']['output']>;
  publicMetadata?: Maybe<Array<Maybe<Metadata>>>;
  search?: Maybe<DatasetConnection>;
  snapshot?: Maybe<Snapshot>;
  user?: Maybe<User>;
  users: UserList;
};


export type QueryAdvancedSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allDatasets?: InputMaybe<Scalars['Boolean']['input']>;
  datasetStatus?: InputMaybe<Scalars['String']['input']>;
  datasetType?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['JSON']['input'];
  sortBy?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryDatasetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDatasetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterBy?: InputMaybe<DatasetFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  modality?: InputMaybe<Scalars['String']['input']>;
  myDatasets?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<DatasetSort>;
};


export type QueryFlaggedFilesArgs = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  flagged?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryParticipantCountArgs = {
  modality?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  q: Scalars['String']['input'];
};


export type QuerySnapshotArgs = {
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserSortInput>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedObject = {
  __typename?: 'RelatedObject';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  kind: RelatedObjectKind;
  relation: RelatedObjectRelation;
};

export enum RelatedObjectKind {
  Article = 'Article',
  Dataset = 'Dataset'
}

export enum RelatedObjectRelation {
  Derivative = 'derivative',
  SameAs = 'sameAs',
  Source = 'source'
}

export type RepoMetadata = {
  __typename?: 'RepoMetadata';
  endpoint?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export enum ResponseStatusType {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export enum Severity {
  Error = 'error',
  Warning = 'warning'
}

export type Snapshot = {
  __typename?: 'Snapshot';
  analytics?: Maybe<Analytic>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  created?: Maybe<Scalars['DateTime']['output']>;
  dataset: Dataset;
  deprecated?: Maybe<DeprecatedSnapshot>;
  description?: Maybe<Description>;
  downloadFiles?: Maybe<Array<Maybe<DatasetFile>>>;
  files?: Maybe<Array<Maybe<DatasetFile>>>;
  hexsha?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  issues?: Maybe<Array<Maybe<ValidationIssue>>>;
  issuesStatus?: Maybe<ValidationIssueStatus>;
  onBrainlife?: Maybe<Scalars['Boolean']['output']>;
  readme?: Maybe<Scalars['String']['output']>;
  related?: Maybe<Array<Maybe<RelatedObject>>>;
  size?: Maybe<Scalars['BigInt']['output']>;
  summary?: Maybe<Summary>;
  tag: Scalars['String']['output'];
  validation?: Maybe<DatasetValidation>;
};


export type SnapshotFilesArgs = {
  tree?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrdering {
  Ascending = 'ascending',
  Descending = 'descending'
}

export type Star = {
  __typename?: 'Star';
  datasetId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type StarDatasetResponse = {
  __typename?: 'StarDatasetResponse';
  newStar?: Maybe<Star>;
  starred?: Maybe<Scalars['Boolean']['output']>;
};

export type SubjectMetadata = {
  __typename?: 'SubjectMetadata';
  age?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  participantId: Scalars['String']['output'];
  sex?: Maybe<Scalars['String']['output']>;
};

export type SubjectMetadataInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['String']['input'];
  sex?: InputMaybe<Scalars['String']['input']>;
};

export type Summary = {
  __typename?: 'Summary';
  dataProcessed?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  modalities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pet?: Maybe<SummaryPetFields>;
  primaryModality?: Maybe<Scalars['String']['output']>;
  schemaVersion?: Maybe<Scalars['String']['output']>;
  secondaryModalities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sessions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  size: Scalars['BigInt']['output'];
  subjectMetadata?: Maybe<Array<Maybe<SubjectMetadata>>>;
  subjects?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tasks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  totalFiles: Scalars['Int']['output'];
  validatorMetadata?: Maybe<ValidatorMetadata>;
};

export type SummaryInput = {
  dataProcessed?: InputMaybe<Scalars['Boolean']['input']>;
  dataTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  datasetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  modalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pet?: InputMaybe<SummaryPetInput>;
  schemaVersion?: InputMaybe<Scalars['String']['input']>;
  secondaryModalities?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sessions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size: Scalars['BigInt']['input'];
  subjectMetadata?: InputMaybe<Array<InputMaybe<SubjectMetadataInput>>>;
  subjects?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tasks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  totalFiles: Scalars['Int']['input'];
  validatorMetadata?: InputMaybe<ValidatorMetadataInput>;
};

export type SummaryPetFields = {
  __typename?: 'SummaryPetFields';
  BodyPart?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ScannerManufacturer?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ScannerManufacturersModelName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  TracerName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  TracerRadionuclide?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SummaryPetInput = {
  BodyPart?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ScannerManufacturer?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ScannerManufacturersModelName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  TracerName?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  TracerRadionuclide?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateContributorsPayload = {
  __typename?: 'UpdateContributorsPayload';
  dataset?: Maybe<Dataset>;
  success: Scalars['Boolean']['output'];
};

export type UploadFile = {
  filename: Scalars['String']['input'];
  size: Scalars['BigInt']['input'];
};

export type UploadMetadata = {
  __typename?: 'UploadMetadata';
  complete: Scalars['Boolean']['output'];
  datasetId: Scalars['ID']['output'];
  endpoint?: Maybe<Scalars['Int']['output']>;
  estimatedSize?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  admin?: Maybe<Scalars['Boolean']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  created: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  githubSynced?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  institution?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['DateTime']['output']>;
  links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  location?: Maybe<Scalars['String']['output']>;
  modified?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notifications?: Maybe<Array<DatasetEvent>>;
  orcid?: Maybe<Scalars['String']['output']>;
  orcidConsent?: Maybe<Scalars['Boolean']['output']>;
  provider?: Maybe<UserProvider>;
};

export type UserList = {
  __typename?: 'UserList';
  totalCount: Scalars['Int']['output'];
  users: Array<User>;
};

export type UserNotificationStatus = {
  __typename?: 'UserNotificationStatus';
  status: NotificationStatusType;
};

export enum UserProvider {
  Google = 'google',
  Orcid = 'orcid'
}

export type UserSortInput = {
  field: Scalars['String']['input'];
  order?: InputMaybe<SortOrdering>;
};

export type ValidationIssue = {
  __typename?: 'ValidationIssue';
  additionalFileCount?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  files?: Maybe<Array<Maybe<ValidationIssueFile>>>;
  helpUrl?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  reason: Scalars['String']['output'];
  severity: Severity;
};

export type ValidationIssueFile = {
  __typename?: 'ValidationIssueFile';
  character?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  evidence?: Maybe<Scalars['String']['output']>;
  file?: Maybe<ValidationIssueFileDetail>;
  helpUrl?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  line?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  severity: Severity;
};

export type ValidationIssueFileDetail = {
  __typename?: 'ValidationIssueFileDetail';
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  relativePath?: Maybe<Scalars['String']['output']>;
};

export type ValidationIssueStatus = {
  __typename?: 'ValidationIssueStatus';
  errors?: Maybe<Scalars['Int']['output']>;
  warnings?: Maybe<Scalars['Int']['output']>;
};

export type ValidatorCodeMessage = {
  __typename?: 'ValidatorCodeMessage';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ValidatorCodeMessageInput = {
  code: Scalars['String']['input'];
  message: Scalars['String']['input'];
};

export type ValidatorInput = {
  codeMessages: Array<InputMaybe<ValidatorCodeMessageInput>>;
  datasetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  issues: Array<InputMaybe<ValidatorIssueInput>>;
  validatorMetadata: ValidatorMetadataInput;
};

export type ValidatorIssue = {
  __typename?: 'ValidatorIssue';
  affects?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  issueMessage?: Maybe<Scalars['String']['output']>;
  line?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  rule?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Severity>;
  subCode?: Maybe<Scalars['String']['output']>;
};

export type ValidatorIssueInput = {
  affects?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  issueMessage?: InputMaybe<Scalars['String']['input']>;
  line?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  rule?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<Severity>;
  subCode?: InputMaybe<Scalars['String']['input']>;
};

export type ValidatorMetadata = {
  __typename?: 'ValidatorMetadata';
  validator?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ValidatorMetadataInput = {
  validator?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type WorkerTask = {
  __typename?: 'WorkerTask';
  args?: Maybe<Scalars['JSON']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  executionTime?: Maybe<Scalars['Int']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  kwargs?: Maybe<Scalars['JSON']['output']>;
  queuedAt?: Maybe<Scalars['DateTime']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  taskName?: Maybe<Scalars['String']['output']>;
  worker?: Maybe<Scalars['String']['output']>;
};

export type UpdateContributorsMutationVariables = Exact<{
  datasetId: Scalars['String']['input'];
  newContributors: Array<ContributorInput> | ContributorInput;
}>;


export type UpdateContributorsMutation = { __typename?: 'Mutation', updateContributors: { __typename?: 'UpdateContributorsPayload', success: boolean, dataset?: { __typename?: 'Dataset', id: string, draft?: { __typename?: 'Draft', id?: string | null, modified?: any | null, contributors?: Array<{ __typename?: 'Contributor', name: string, givenName?: string | null, familyName?: string | null, orcid?: string | null, contributorType: string, order?: number | null } | null> | null, files?: Array<{ __typename?: 'DatasetFile', id: string, filename: string, key?: string | null, size?: any | null, annexed?: boolean | null, urls?: Array<string | null> | null, directory?: boolean | null } | null> | null } | null } | null } };

export type DownloadDraftQueryVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  tree?: InputMaybe<Scalars['String']['input']>;
}>;


export type DownloadDraftQuery = { __typename?: 'Query', dataset?: { __typename?: 'Dataset', id: string, draft?: { __typename?: 'Draft', id?: string | null, files?: Array<{ __typename?: 'DatasetFile', id: string, key?: string | null, directory?: boolean | null, filename: string, size?: any | null, urls?: Array<string | null> | null } | null> | null } | null } | null };

export type DownloadSnapshotQueryVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
  tree?: InputMaybe<Scalars['String']['input']>;
}>;


export type DownloadSnapshotQuery = { __typename?: 'Query', snapshot?: { __typename?: 'Snapshot', id: string, files?: Array<{ __typename?: 'DatasetFile', id: string, key?: string | null, directory?: boolean | null, filename: string, size?: any | null, urls?: Array<string | null> | null } | null> | null } | null };

export type DeleteFilesMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  files?: InputMaybe<Array<InputMaybe<DeleteFile>> | InputMaybe<DeleteFile>>;
}>;


export type DeleteFilesMutation = { __typename?: 'Mutation', deleteFiles?: boolean | null };

export type DatasetCommentsFragment = { __typename?: 'Dataset', id: string, comments?: Array<{ __typename?: 'Comment', id: string, text: string, createDate: any, user?: { __typename?: 'User', name?: string | null, orcid?: string | null } | null, parent?: { __typename?: 'Comment', id: string } | null, replies?: Array<{ __typename?: 'Comment', id: string } | null> | null } | null> | null } & { ' $fragmentName'?: 'DatasetCommentsFragment' };

export type GetHistoryQueryVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type GetHistoryQuery = { __typename?: 'Query', dataset?: { __typename?: 'Dataset', id: string, worker?: string | null, history?: Array<{ __typename?: 'DatasetCommit', id: string, authorName?: string | null, authorEmail?: string | null, date?: any | null, references?: string | null, message?: string | null } | null> | null } | null };

export type DatasetReviewersFragment = { __typename?: 'Dataset', id: string, reviewers?: Array<{ __typename?: 'DatasetReviewer', expiration?: any | null, id: string } | null> | null } & { ' $fragmentName'?: 'DatasetReviewersFragment' };

export type ReexportRemotesMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type ReexportRemotesMutation = { __typename?: 'Mutation', reexportRemotes?: boolean | null };

export type CacheClearMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type CacheClearMutation = { __typename?: 'Mutation', cacheClear?: boolean | null };

export type AddCommentMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  comment: Scalars['String']['input'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment?: string | null };

export type EditCommentMutationVariables = Exact<{
  commentId: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
}>;


export type EditCommentMutation = { __typename?: 'Mutation', editComment?: boolean | null };

export type CreateReviewerMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type CreateReviewerMutation = { __typename?: 'Mutation', createReviewer?: { __typename?: 'DatasetReviewer', id: string, datasetId: string, url: string, expiration?: any | null } | null };

export type GetDatasetRelationsQueryVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type GetDatasetRelationsQuery = { __typename?: 'Query', dataset?: { __typename?: 'Dataset', latestSnapshot: { __typename?: 'Snapshot', tag: string, related?: Array<{ __typename?: 'RelatedObject', id: string, kind: RelatedObjectKind, relation: RelatedObjectRelation, description?: string | null } | null> | null } } | null };

export type CreateDatasetRelationMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  doi: Scalars['String']['input'];
  description: Scalars['String']['input'];
  kind: RelatedObjectKind;
  relation: RelatedObjectRelation;
}>;


export type CreateDatasetRelationMutation = { __typename?: 'Mutation', createRelation?: { __typename?: 'Dataset', id: string } | null };

export type DeleteDatasetRelationMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  doi: Scalars['String']['input'];
}>;


export type DeleteDatasetRelationMutation = { __typename?: 'Mutation', deleteRelation?: { __typename?: 'Dataset', id: string } | null };

export type DeleteReviewerMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type DeleteReviewerMutation = { __typename?: 'Mutation', deleteReviewer?: { __typename?: 'DatasetReviewer', id: string, datasetId: string } | null };

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars['ID']['input'];
  deleteChildren?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment?: Array<string | null> | null };

export type DeletedFileFragment = { __typename?: 'DatasetFile', id: string, key?: string | null, filename: string, directory?: boolean | null } & { ' $fragmentName'?: 'DeletedFileFragment' };

export type DeleteDatasetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeleteDatasetMutation = { __typename?: 'Mutation', deleteDataset?: boolean | null };

export type DeprecateSnapshotMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
  reason: Scalars['String']['input'];
}>;


export type DeprecateSnapshotMutation = { __typename?: 'Mutation', deprecateSnapshot?: { __typename?: 'Snapshot', id: string, deprecated?: { __typename?: 'DeprecatedSnapshot', reason?: string | null } | null } | null };

export type UpdateDescriptionMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  field: Scalars['String']['input'];
  value: Scalars['String']['input'];
}>;


export type UpdateDescriptionMutation = { __typename?: 'Mutation', updateDescription?: { __typename?: 'Description', id: string, Name: string, BIDSVersion: string, License?: string | null, Authors?: Array<string | null> | null, Acknowledgements?: string | null, HowToAcknowledge?: string | null, Funding?: Array<string | null> | null, ReferencesAndLinks?: Array<string | null> | null, DatasetDOI?: string | null, EthicsApprovals?: Array<string | null> | null } | null };

export type UpdateDescriptionListMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  field: Scalars['String']['input'];
  value?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type UpdateDescriptionListMutation = { __typename?: 'Mutation', updateDescriptionList?: { __typename?: 'Description', id: string, Name: string, BIDSVersion: string, License?: string | null, Authors?: Array<string | null> | null, Acknowledgements?: string | null, HowToAcknowledge?: string | null, Funding?: Array<string | null> | null, ReferencesAndLinks?: Array<string | null> | null, DatasetDOI?: string | null, EthicsApprovals?: Array<string | null> | null } | null };

export type FlagAnnexObjectMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  snapshot: Scalars['String']['input'];
  filepath: Scalars['String']['input'];
  annexKey: Scalars['String']['input'];
}>;


export type FlagAnnexObjectMutation = { __typename?: 'Mutation', flagAnnexObject?: boolean | null };

export type FollowDatasetMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type FollowDatasetMutation = { __typename?: 'Mutation', followDataset?: { __typename?: 'FollowDatasetResponse', following?: boolean | null, newFollower?: { __typename?: 'Follower', userId?: string | null } | null } | null };

export type UserFollowingFragment = { __typename?: 'Dataset', id: string, following?: boolean | null } & { ' $fragmentName'?: 'UserFollowingFragment' };

export type DatasetFollowersFragment = { __typename?: 'Dataset', id: string, followers?: Array<{ __typename?: 'Follower', userId?: string | null } | null> | null } & { ' $fragmentName'?: 'DatasetFollowersFragment' };

export type FsckDatasetMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type FsckDatasetMutation = { __typename?: 'Mutation', fsckDataset?: boolean | null };

export type ImportRemoteDatasetMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  url: Scalars['String']['input'];
}>;


export type ImportRemoteDatasetMutation = { __typename?: 'Mutation', importRemoteDataset?: string | null };

export type PublishDatasetMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type PublishDatasetMutation = { __typename?: 'Mutation', publishDataset?: boolean | null };

export type DatasetPublishedFragment = { __typename?: 'Dataset', id: string, public?: boolean | null } & { ' $fragmentName'?: 'DatasetPublishedFragment' };

export type UpdateReadmeMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
}>;


export type UpdateReadmeMutation = { __typename?: 'Mutation', updateReadme?: boolean | null };

export type RemoveAnnexObjectMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  snapshot: Scalars['String']['input'];
  annexKey: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
}>;


export type RemoveAnnexObjectMutation = { __typename?: 'Mutation', removeAnnexObject?: boolean | null };

export type RemovePermissionsMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  userId: Scalars['String']['input'];
}>;


export type RemovePermissionsMutation = { __typename?: 'Mutation', removePermissions?: boolean | null };

export type RevalidateMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  ref: Scalars['String']['input'];
}>;


export type RevalidateMutation = { __typename?: 'Mutation', revalidate?: boolean | null };

export type CreateSnapshotMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
  changes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type CreateSnapshotMutation = { __typename?: 'Mutation', createSnapshot?: { __typename?: 'Snapshot', id: string, tag: string, created?: any | null, hexsha?: string | null } | null };

export type StarDatasetMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
}>;


export type StarDatasetMutation = { __typename?: 'Mutation', starDataset?: { __typename?: 'StarDatasetResponse', starred?: boolean | null, newStar?: { __typename?: 'Star', userId?: string | null } | null } | null };

export type UserStarredFragment = { __typename?: 'Dataset', id: string, starred?: boolean | null } & { ' $fragmentName'?: 'UserStarredFragment' };

export type DatasetStarsFragment = { __typename?: 'Dataset', id: string, stars?: Array<{ __typename?: 'Star', userId?: string | null } | null> | null } & { ' $fragmentName'?: 'DatasetStarsFragment' };

export type AddMetadataMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  metadata: MetadataInput;
}>;


export type AddMetadataMutation = { __typename?: 'Mutation', addMetadata?: { __typename?: 'Metadata', datasetId: string, datasetUrl?: string | null, datasetName?: string | null, firstSnapshotCreatedAt?: any | null, latestSnapshotCreatedAt?: any | null, dxStatus?: string | null, tasksCompleted?: Array<string | null> | null, grantFunderName?: string | null, grantIdentifier?: string | null, trialCount?: number | null, studyDesign?: string | null, studyDomain?: string | null, studyLongitudinal?: string | null, dataProcessed?: boolean | null, species?: string | null, associatedPaperDOI?: string | null, openneuroPaperDOI?: string | null, seniorAuthor?: string | null, adminUsers?: Array<string | null> | null, ages?: Array<number | null> | null, modalities?: Array<string | null> | null, affirmedDefaced?: boolean | null, affirmedConsent?: boolean | null } | null };

export type UndoDeprecateSnapshotMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
}>;


export type UndoDeprecateSnapshotMutation = { __typename?: 'Mutation', undoDeprecateSnapshot?: { __typename?: 'Snapshot', id: string, deprecated?: { __typename?: 'DeprecatedSnapshot', reason?: string | null } | null } | null };

export type UpdatePermissionsMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
  level: Scalars['String']['input'];
}>;


export type UpdatePermissionsMutation = { __typename?: 'Mutation', updatePermissions?: { __typename?: 'DatasetPermissions', id: string, userPermissions?: Array<{ __typename?: 'Permission', datasetId: string, userId: string, level: string, user?: { __typename?: 'User', id: string, email?: string | null, orcid?: string | null, name?: string | null } | null } | null> | null } | null };

export type UpdateOrcidPermissionsMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  userOrcid: Scalars['String']['input'];
  level: Scalars['String']['input'];
}>;


export type UpdateOrcidPermissionsMutation = { __typename?: 'Mutation', updateOrcidPermissions?: { __typename?: 'DatasetPermissions', id: string, userPermissions?: Array<{ __typename?: 'Permission', datasetId: string, userId: string, level: string, user?: { __typename?: 'User', id: string, email?: string | null, orcid?: string | null, name?: string | null } | null } | null> | null } | null };

export type FlaggedFilesQueryVariables = Exact<{
  flagged?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type FlaggedFilesQuery = { __typename?: 'Query', flaggedFiles?: Array<{ __typename?: 'FlaggedFile', datasetId?: string | null, snapshot?: string | null, filepath?: string | null, flagger?: { __typename?: 'User', name?: string | null, email?: string | null } | null } | null> | null };

export type UserFieldsFragment = { __typename?: 'User', id: string, name?: string | null, admin?: boolean | null, blocked?: boolean | null, email?: string | null, provider?: UserProvider | null, lastSeen?: any | null, created: any, avatar?: string | null, github?: string | null, institution?: string | null, location?: string | null, modified?: any | null, orcid?: string | null } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type ParticipantCountQueryVariables = Exact<{
  modality?: InputMaybe<Scalars['String']['input']>;
}>;


export type ParticipantCountQuery = { __typename?: 'Query', participantCount?: number | null };

export type PublicDatasetCountQueryVariables = Exact<{
  modality?: InputMaybe<Scalars['String']['input']>;
}>;


export type PublicDatasetCountQuery = { __typename?: 'Query', datasets?: { __typename?: 'DatasetConnection', pageInfo: { __typename?: 'PageInfo', count?: number | null } } | null };

export type AdvancedSearchQueryVariables = Exact<{
  query: Scalars['JSON']['input'];
  datasetType: Scalars['String']['input'];
}>;


export type AdvancedSearchQuery = { __typename?: 'Query', advancedSearch?: { __typename?: 'DatasetConnection', pageInfo: { __typename?: 'PageInfo', count?: number | null } } | null };

export type SubscribeToNewsletterMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SubscribeToNewsletterMutation = { __typename?: 'Mutation', subscribeToNewsletter?: boolean | null };

export type Top_Viewed_DatasetsQueryVariables = Exact<{ [key: string]: never; }>;


export type Top_Viewed_DatasetsQuery = { __typename?: 'Query', datasets?: { __typename?: 'DatasetConnection', edges?: Array<{ __typename?: 'DatasetEdge', node: { __typename?: 'Dataset', id: string, analytics?: { __typename?: 'Analytic', views?: number | null } | null, latestSnapshot: { __typename?: 'Snapshot', tag: string, summary?: { __typename?: 'Summary', primaryModality?: string | null } | null, description?: { __typename?: 'Description', Name: string } | null } } } | null> | null } | null };

export type Recently_Published_DatasetsQueryVariables = Exact<{ [key: string]: never; }>;


export type Recently_Published_DatasetsQuery = { __typename?: 'Query', datasets?: { __typename?: 'DatasetConnection', edges?: Array<{ __typename?: 'DatasetEdge', node: { __typename?: 'Dataset', id: string, publishDate?: any | null, latestSnapshot: { __typename?: 'Snapshot', tag: string, summary?: { __typename?: 'Summary', primaryModality?: string | null } | null, description?: { __typename?: 'Description', Name: string } | null } } } | null> | null } | null };

export type UserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name?: string | null, orcid?: string | null, email?: string | null, avatar?: string | null, location?: string | null, institution?: string | null, links?: Array<string | null> | null, provider?: UserProvider | null, admin?: boolean | null, created: any, lastSeen?: any | null, blocked?: boolean | null, githubSynced?: any | null, github?: string | null, orcidConsent?: boolean | null, notifications?: Array<{ __typename?: 'DatasetEvent', id: string, timestamp: any, note?: string | null, success?: boolean | null, user?: { __typename?: 'User', id: string, name?: string | null, email?: string | null, orcid?: string | null } | null, event?: { __typename?: 'DatasetEventDescription', type: string, version?: string | null, public?: boolean | null, level?: string | null, ref?: string | null, message?: string | null, requestId?: string | null, targetUserId?: string | null, reason?: string | null, datasetId?: string | null, resolutionStatus?: string | null, target?: { __typename?: 'User', id: string, name?: string | null, email?: string | null, orcid?: string | null } | null, contributorData?: { __typename?: 'Contributor', name: string, givenName?: string | null, familyName?: string | null, orcid?: string | null, contributorType: string, order?: number | null } | null } | null, notificationStatus?: { __typename?: 'UserNotificationStatus', status: NotificationStatusType } | null }> | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  institution?: InputMaybe<Scalars['String']['input']>;
  orcidConsent?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, location?: string | null, links?: Array<string | null> | null, institution?: string | null, orcidConsent?: boolean | null } | null };

export type AdvancedSearchDatasetsQueryVariables = Exact<{
  query: Scalars['JSON']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  allDatasets?: InputMaybe<Scalars['Boolean']['input']>;
  datasetStatus?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['JSON']['input']>;
  first: Scalars['Int']['input'];
}>;


export type AdvancedSearchDatasetsQuery = { __typename?: 'Query', datasets?: { __typename?: 'DatasetConnection', edges?: Array<{ __typename?: 'DatasetEdge', id: string, node: { __typename?: 'Dataset', id: string, created: any, name?: string | null, public?: boolean | null, uploader?: { __typename?: 'User', id: string, name?: string | null, orcid?: string | null } | null, permissions?: { __typename?: 'DatasetPermissions', id: string, userPermissions?: Array<{ __typename?: 'Permission', userId: string, level: string, access: string, user?: { __typename?: 'User', id: string, name?: string | null, email?: string | null, provider?: UserProvider | null } | null } | null> | null } | null, metadata?: { __typename?: 'Metadata', ages?: Array<number | null> | null } | null, latestSnapshot: { __typename?: 'Snapshot', size?: any | null, summary?: { __typename?: 'Summary', modalities?: Array<string | null> | null, secondaryModalities?: Array<string | null> | null, sessions?: Array<string | null> | null, subjects?: Array<string | null> | null, tasks?: Array<string | null> | null, size: any, totalFiles: number, dataProcessed?: boolean | null, primaryModality?: string | null, subjectMetadata?: Array<{ __typename?: 'SubjectMetadata', participantId: string, age?: number | null, sex?: string | null, group?: string | null } | null> | null, pet?: { __typename?: 'SummaryPetFields', BodyPart?: Array<string | null> | null, ScannerManufacturer?: Array<string | null> | null, ScannerManufacturersModelName?: Array<string | null> | null, TracerName?: Array<string | null> | null, TracerRadionuclide?: Array<string | null> | null } | null } | null, issues?: Array<{ __typename?: 'ValidationIssue', severity: Severity } | null> | null, validation?: { __typename?: 'DatasetValidation', errors?: number | null, warnings?: number | null } | null, description?: { __typename?: 'Description', Name: string, Authors?: Array<string | null> | null, DatasetDOI?: string | null } | null }, analytics?: { __typename?: 'Analytic', views?: number | null, downloads?: number | null } | null, stars?: Array<{ __typename?: 'Star', userId?: string | null, datasetId?: string | null } | null> | null, followers?: Array<{ __typename?: 'Follower', userId?: string | null, datasetId?: string | null } | null> | null, snapshots?: Array<{ __typename?: 'Snapshot', id: string, created?: any | null, tag: string } | null> | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean, count?: number | null } } | null };

export type GetUsersQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<UserSortInput> | UserSortInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserList', totalCount: number, users: Array<(
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
    )> } };

export type SetAdminMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  admin: Scalars['Boolean']['input'];
}>;


export type SetAdminMutation = { __typename?: 'Mutation', setAdmin?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
  ) | null };

export type SetBlockedMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  blocked: Scalars['Boolean']['input'];
}>;


export type SetBlockedMutation = { __typename?: 'Mutation', setBlocked?: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
  ) | null };

export type CreateDatasetMutationVariables = Exact<{
  affirmedDefaced?: InputMaybe<Scalars['Boolean']['input']>;
  affirmedConsent?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateDatasetMutation = { __typename?: 'Mutation', createDataset?: { __typename?: 'Dataset', id: string } | null };

export type PrepareUploadMutationVariables = Exact<{
  datasetId: Scalars['ID']['input'];
  uploadId: Scalars['ID']['input'];
}>;


export type PrepareUploadMutation = { __typename?: 'Mutation', prepareUpload?: { __typename?: 'UploadMetadata', id: string, datasetId: string, token?: string | null, endpoint?: number | null } | null };

export type FinishUploadMutationVariables = Exact<{
  uploadId: Scalars['ID']['input'];
}>;


export type FinishUploadMutation = { __typename?: 'Mutation', finishUpload?: boolean | null };

export const DatasetCommentsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetComments"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createDate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"replies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DatasetCommentsFragment, unknown>;
export const DatasetReviewersFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetReviewers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviewers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expiration"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DatasetReviewersFragment, unknown>;
export const DeletedFileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedFile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DatasetFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"directory"}}]}}]} as unknown as DocumentNode<DeletedFileFragment, unknown>;
export const UserFollowingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFollowing"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}}]} as unknown as DocumentNode<UserFollowingFragment, unknown>;
export const DatasetFollowersFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetFollowers"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<DatasetFollowersFragment, unknown>;
export const DatasetPublishedFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetPublished"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"public"}}]}}]} as unknown as DocumentNode<DatasetPublishedFragment, unknown>;
export const UserStarredFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserStarred"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"starred"}}]}}]} as unknown as DocumentNode<UserStarredFragment, unknown>;
export const DatasetStarsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatasetStars"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dataset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<DatasetStarsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeen"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const UpdateContributorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateContributors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newContributors"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContributorInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateContributors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"newContributors"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newContributors"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"dataset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contributors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"familyName"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}},{"kind":"Field","name":{"kind":"Name","value":"contributorType"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"annexed"}},{"kind":"Field","name":{"kind":"Name","value":"urls"}},{"kind":"Field","name":{"kind":"Name","value":"directory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"modified"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateContributorsMutation, UpdateContributorsMutationVariables>;
export const DownloadDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"downloadDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tree"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tree"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tree"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"directory"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"urls"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DownloadDraftQuery, DownloadDraftQueryVariables>;
export const DownloadSnapshotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"downloadSnapshot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tree"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tree"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tree"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"directory"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"urls"}}]}}]}}]}}]} as unknown as DocumentNode<DownloadSnapshotQuery, DownloadSnapshotQueryVariables>;
export const DeleteFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"files"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteFile"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"files"},"value":{"kind":"Variable","name":{"kind":"Name","value":"files"}}}]}]}}]} as unknown as DocumentNode<DeleteFilesMutation, DeleteFilesMutationVariables>;
export const GetHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"history"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"authorEmail"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"references"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"worker"}}]}}]}}]} as unknown as DocumentNode<GetHistoryQuery, GetHistoryQueryVariables>;
export const ReexportRemotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"reexportRemotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reexportRemotes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}]}]}}]} as unknown as DocumentNode<ReexportRemotesMutation, ReexportRemotesMutationVariables>;
export const CacheClearDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cacheClear"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cacheClear"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}]}]}}]} as unknown as DocumentNode<CacheClearMutation, CacheClearMutationVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"parentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}}]}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const EditCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}}]}]}}]} as unknown as DocumentNode<EditCommentMutation, EditCommentMutationVariables>;
export const CreateReviewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReviewer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReviewer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"expiration"}}]}}]}}]} as unknown as DocumentNode<CreateReviewerMutation, CreateReviewerMutationVariables>;
export const GetDatasetRelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDatasetRelations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latestSnapshot"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"related"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"relation"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDatasetRelationsQuery, GetDatasetRelationsQueryVariables>;
export const CreateDatasetRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDatasetRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doi"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kind"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelatedObjectKind"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RelatedObjectRelation"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"doi"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doi"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"kind"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kind"}}},{"kind":"Argument","name":{"kind":"Name","value":"relation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relation"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateDatasetRelationMutation, CreateDatasetRelationMutationVariables>;
export const DeleteDatasetRelationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDatasetRelation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"doi"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"doi"},"value":{"kind":"Variable","name":{"kind":"Name","value":"doi"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteDatasetRelationMutation, DeleteDatasetRelationMutationVariables>;
export const DeleteReviewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteReviewer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteReviewer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"datasetId"}}]}}]}}]} as unknown as DocumentNode<DeleteReviewerMutation, DeleteReviewerMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteChildren"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"deleteChildren"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteChildren"}}}]}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const DeleteDatasetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDataset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redirect"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}},{"kind":"Argument","name":{"kind":"Name","value":"redirect"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redirect"}}}]}]}}]} as unknown as DocumentNode<DeleteDatasetMutation, DeleteDatasetMutationVariables>;
export const DeprecateSnapshotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deprecateSnapshot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reason"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deprecateSnapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}},{"kind":"Argument","name":{"kind":"Name","value":"reason"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reason"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"deprecated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<DeprecateSnapshotMutation, DeprecateSnapshotMutationVariables>;
export const UpdateDescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"field"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"field"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"BIDSVersion"}},{"kind":"Field","name":{"kind":"Name","value":"License"}},{"kind":"Field","name":{"kind":"Name","value":"Authors"}},{"kind":"Field","name":{"kind":"Name","value":"Acknowledgements"}},{"kind":"Field","name":{"kind":"Name","value":"HowToAcknowledge"}},{"kind":"Field","name":{"kind":"Name","value":"Funding"}},{"kind":"Field","name":{"kind":"Name","value":"ReferencesAndLinks"}},{"kind":"Field","name":{"kind":"Name","value":"DatasetDOI"}},{"kind":"Field","name":{"kind":"Name","value":"EthicsApprovals"}}]}}]}}]} as unknown as DocumentNode<UpdateDescriptionMutation, UpdateDescriptionMutationVariables>;
export const UpdateDescriptionListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDescriptionList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"field"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDescriptionList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"field"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"BIDSVersion"}},{"kind":"Field","name":{"kind":"Name","value":"License"}},{"kind":"Field","name":{"kind":"Name","value":"Authors"}},{"kind":"Field","name":{"kind":"Name","value":"Acknowledgements"}},{"kind":"Field","name":{"kind":"Name","value":"HowToAcknowledge"}},{"kind":"Field","name":{"kind":"Name","value":"Funding"}},{"kind":"Field","name":{"kind":"Name","value":"ReferencesAndLinks"}},{"kind":"Field","name":{"kind":"Name","value":"DatasetDOI"}},{"kind":"Field","name":{"kind":"Name","value":"EthicsApprovals"}}]}}]}}]} as unknown as DocumentNode<UpdateDescriptionListMutation, UpdateDescriptionListMutationVariables>;
export const FlagAnnexObjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"flagAnnexObject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"snapshot"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filepath"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annexKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flagAnnexObject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"snapshot"},"value":{"kind":"Variable","name":{"kind":"Name","value":"snapshot"}}},{"kind":"Argument","name":{"kind":"Name","value":"filepath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filepath"}}},{"kind":"Argument","name":{"kind":"Name","value":"annexKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annexKey"}}}]}]}}]} as unknown as DocumentNode<FlagAnnexObjectMutation, FlagAnnexObjectMutationVariables>;
export const FollowDatasetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"followDataset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"}},{"kind":"Field","name":{"kind":"Name","value":"newFollower"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<FollowDatasetMutation, FollowDatasetMutationVariables>;
export const FsckDatasetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"fsckDataset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fsckDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}]}]}}]} as unknown as DocumentNode<FsckDatasetMutation, FsckDatasetMutationVariables>;
export const ImportRemoteDatasetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"importRemoteDataset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importRemoteDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}]}}]} as unknown as DocumentNode<ImportRemoteDatasetMutation, ImportRemoteDatasetMutationVariables>;
export const PublishDatasetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"publishDataset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}]}]}}]} as unknown as DocumentNode<PublishDatasetMutation, PublishDatasetMutationVariables>;
export const UpdateReadmeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateReadme"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateReadme"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}]}}]} as unknown as DocumentNode<UpdateReadmeMutation, UpdateReadmeMutationVariables>;
export const RemoveAnnexObjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAnnexObject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"snapshot"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annexKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAnnexObject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"snapshot"},"value":{"kind":"Variable","name":{"kind":"Name","value":"snapshot"}}},{"kind":"Argument","name":{"kind":"Name","value":"annexKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annexKey"}}},{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}}]}]}}]} as unknown as DocumentNode<RemoveAnnexObjectMutation, RemoveAnnexObjectMutationVariables>;
export const RemovePermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removePermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePermissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<RemovePermissionsMutation, RemovePermissionsMutationVariables>;
export const RevalidateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"revalidate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ref"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revalidate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ref"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ref"}}}]}]}}]} as unknown as DocumentNode<RevalidateMutation, RevalidateMutationVariables>;
export const CreateSnapshotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSnapshot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSnapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}},{"kind":"Argument","name":{"kind":"Name","value":"changes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"hexsha"}}]}}]}}]} as unknown as DocumentNode<CreateSnapshotMutation, CreateSnapshotMutationVariables>;
export const StarDatasetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"starDataset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"starDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"starred"}},{"kind":"Field","name":{"kind":"Name","value":"newStar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<StarDatasetMutation, StarDatasetMutationVariables>;
export const AddMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"metadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetUrl"}},{"kind":"Field","name":{"kind":"Name","value":"datasetName"}},{"kind":"Field","name":{"kind":"Name","value":"firstSnapshotCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"latestSnapshotCreatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dxStatus"}},{"kind":"Field","name":{"kind":"Name","value":"tasksCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"grantFunderName"}},{"kind":"Field","name":{"kind":"Name","value":"grantIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"trialCount"}},{"kind":"Field","name":{"kind":"Name","value":"studyDesign"}},{"kind":"Field","name":{"kind":"Name","value":"studyDomain"}},{"kind":"Field","name":{"kind":"Name","value":"studyLongitudinal"}},{"kind":"Field","name":{"kind":"Name","value":"dataProcessed"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"associatedPaperDOI"}},{"kind":"Field","name":{"kind":"Name","value":"openneuroPaperDOI"}},{"kind":"Field","name":{"kind":"Name","value":"seniorAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"adminUsers"}},{"kind":"Field","name":{"kind":"Name","value":"ages"}},{"kind":"Field","name":{"kind":"Name","value":"modalities"}},{"kind":"Field","name":{"kind":"Name","value":"affirmedDefaced"}},{"kind":"Field","name":{"kind":"Name","value":"affirmedConsent"}}]}}]}}]} as unknown as DocumentNode<AddMetadataMutation, AddMetadataMutationVariables>;
export const UndoDeprecateSnapshotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"undoDeprecateSnapshot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tag"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"undoDeprecateSnapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tag"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tag"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"deprecated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<UndoDeprecateSnapshotMutation, UndoDeprecateSnapshotMutationVariables>;
export const UpdatePermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"level"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePermissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"level"},"value":{"kind":"Variable","name":{"kind":"Name","value":"level"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePermissionsMutation, UpdatePermissionsMutationVariables>;
export const UpdateOrcidPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOrcidPermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userOrcid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"level"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrcidPermissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userOrcid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userOrcid"}}},{"kind":"Argument","name":{"kind":"Name","value":"level"},"value":{"kind":"Variable","name":{"kind":"Name","value":"level"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOrcidPermissionsMutation, UpdateOrcidPermissionsMutationVariables>;
export const FlaggedFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"flaggedFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flagged"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flaggedFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"flagged"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flagged"}}},{"kind":"Argument","name":{"kind":"Name","value":"deleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleted"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"snapshot"}},{"kind":"Field","name":{"kind":"Name","value":"filepath"}},{"kind":"Field","name":{"kind":"Name","value":"flagger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<FlaggedFilesQuery, FlaggedFilesQueryVariables>;
export const ParticipantCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"participantCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modality"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participantCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"modality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modality"}}}]}]}}]} as unknown as DocumentNode<ParticipantCountQuery, ParticipantCountQueryVariables>;
export const PublicDatasetCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"publicDatasetCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modality"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filterBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"public"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"Argument","name":{"kind":"Name","value":"modality"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modality"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<PublicDatasetCountQuery, PublicDatasetCountQueryVariables>;
export const AdvancedSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdvancedSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advancedSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"datasetType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<AdvancedSearchQuery, AdvancedSearchQueryVariables>;
export const SubscribeToNewsletterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"subscribeToNewsletter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeToNewsletter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>;
export const Top_Viewed_DatasetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"top_viewed_datasets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"12"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"views"},"value":{"kind":"EnumValue","value":"descending"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filterBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"public"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"analytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}}]}},{"kind":"Field","name":{"kind":"Name","value":"latestSnapshot"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryModality"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Top_Viewed_DatasetsQuery, Top_Viewed_DatasetsQueryVariables>;
export const Recently_Published_DatasetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"recently_published_datasets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"datasets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"12"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publishDate"},"value":{"kind":"EnumValue","value":"descending"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filterBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"public"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"latestSnapshot"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryModality"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Recently_Published_DatasetsQuery, Recently_Published_DatasetsQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeen"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"githubSynced"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"ref"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"requestId"}},{"kind":"Field","name":{"kind":"Name","value":"targetUserId"}},{"kind":"Field","name":{"kind":"Name","value":"reason"}},{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"resolutionStatus"}},{"kind":"Field","name":{"kind":"Name","value":"target"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contributorData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"familyName"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}},{"kind":"Field","name":{"kind":"Name","value":"contributorType"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notificationStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"orcidConsent"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"links"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"institution"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orcidConsent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"links"},"value":{"kind":"Variable","name":{"kind":"Name","value":"links"}}},{"kind":"Argument","name":{"kind":"Name","value":"institution"},"value":{"kind":"Variable","name":{"kind":"Name","value":"institution"}}},{"kind":"Argument","name":{"kind":"Name","value":"orcidConsent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orcidConsent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"orcidConsent"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const AdvancedSearchDatasetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"advancedSearchDatasets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allDatasets"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"datasets"},"name":{"kind":"Name","value":"advancedSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"allDatasets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allDatasets"}}},{"kind":"Argument","name":{"kind":"Name","value":"datasetStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uploader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"public"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","alias":{"kind":"Name","value":"access"},"name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ages"}}]}},{"kind":"Field","name":{"kind":"Name","value":"latestSnapshot"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modalities"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryModalities"}},{"kind":"Field","name":{"kind":"Name","value":"sessions"}},{"kind":"Field","name":{"kind":"Name","value":"subjects"}},{"kind":"Field","name":{"kind":"Name","value":"subjectMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participantId"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"group"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tasks"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"totalFiles"}},{"kind":"Field","name":{"kind":"Name","value":"dataProcessed"}},{"kind":"Field","name":{"kind":"Name","value":"pet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BodyPart"}},{"kind":"Field","name":{"kind":"Name","value":"ScannerManufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"ScannerManufacturersModelName"}},{"kind":"Field","name":{"kind":"Name","value":"TracerName"}},{"kind":"Field","name":{"kind":"Name","value":"TracerRadionuclide"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryModality"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"severity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"validation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"warnings"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Authors"}},{"kind":"Field","name":{"kind":"Name","value":"DatasetDOI"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"analytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"downloads"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stars"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"datasetId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snapshots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<AdvancedSearchDatasetsQuery, AdvancedSearchDatasetsQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isAdmin"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isBlocked"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"isAdmin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isAdmin"}}},{"kind":"Argument","name":{"kind":"Name","value":"isBlocked"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isBlocked"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeen"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const SetAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"admin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"admin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"admin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeen"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}}]} as unknown as DocumentNode<SetAdminMutation, SetAdminMutationVariables>;
export const SetBlockedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetBlocked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blocked"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setBlocked"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"blocked"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blocked"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"userFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"userFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"admin"}},{"kind":"Field","name":{"kind":"Name","value":"blocked"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeen"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"github"}},{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"modified"}},{"kind":"Field","name":{"kind":"Name","value":"orcid"}}]}}]} as unknown as DocumentNode<SetBlockedMutation, SetBlockedMutationVariables>;
export const CreateDatasetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDataset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"affirmedDefaced"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"affirmedConsent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDataset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"affirmedDefaced"},"value":{"kind":"Variable","name":{"kind":"Name","value":"affirmedDefaced"}}},{"kind":"Argument","name":{"kind":"Name","value":"affirmedConsent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"affirmedConsent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateDatasetMutation, CreateDatasetMutationVariables>;
export const PrepareUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"prepareUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prepareUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"datasetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"datasetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"uploadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"datasetId"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"endpoint"}}]}}]}}]} as unknown as DocumentNode<PrepareUploadMutation, PrepareUploadMutationVariables>;
export const FinishUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"finishUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uploadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uploadId"}}}]}]}}]} as unknown as DocumentNode<FinishUploadMutation, FinishUploadMutationVariables>;