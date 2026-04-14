import { builder } from "../builder"
import { PermissionRef, UserRef } from "./refs"

export { PermissionRef }

PermissionRef.implement({
  fields: (t) => ({
    datasetId: t.id({
      nullable: false,
      resolve: (obj) => obj.datasetId as string,
    }),
    userId: t.string({
      nullable: false,
      resolve: (obj) => obj.userId as string,
    }),
    level: t.string({
      nullable: false,
      resolve: (obj) => obj.level as string,
    }),
    user: t.field({
      type: UserRef,
      resolve: (obj) => obj.user as Record<string, unknown>,
    }),
  }),
})

export const DatasetPermissions = builder.simpleObject("DatasetPermissions", {
  fields: (t) => ({
    id: t.id({ nullable: false }),
    userPermissions: t.field({ type: [PermissionRef] }),
  }),
})
