/**
 * Shared ObjectRef instances for all types that use the objectRef + implement() pattern.
 *
 * All schema files that either implement or reference these types must import from here
 * so that Pothos sees the same ref object instance and can resolve the type configuration.
 */
import { builder } from "../builder"

export const UserRef = builder.objectRef<Record<string, unknown>>("User")
export const DatasetRef = builder.objectRef<Record<string, unknown>>("Dataset")
export const DatasetEdgeRef = builder.objectRef<Record<string, unknown>>(
  "DatasetEdge",
)
export const DatasetConnectionRef = builder.objectRef<Record<string, unknown>>(
  "DatasetConnection",
)
export const DraftRef = builder.objectRef<Record<string, unknown>>("Draft")
export const SnapshotRef = builder.objectRef<Record<string, unknown>>(
  "Snapshot",
)
export const CommentRef = builder.objectRef<Record<string, unknown>>("Comment")
export const DatasetEventRef = builder.objectRef<Record<string, unknown>>(
  "DatasetEvent",
)
export const DatasetEventDescriptionRef = builder.objectRef<
  Record<string, unknown>
>("DatasetEventDescription")
export const PermissionRef = builder.objectRef<Record<string, unknown>>(
  "Permission",
)
