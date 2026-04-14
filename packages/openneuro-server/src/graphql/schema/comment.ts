import { builder } from "../builder"
import { user as resolveUser } from "../resolvers/user.js"
import CommentModel from "../../models/comment"
import { CommentRef, UserRef } from "./refs"

export { CommentRef }

CommentRef.implement({
  fields: (t) => ({
    id: t.id({
      nullable: false,
      resolve: (obj) => (obj._id ?? obj.id) as string,
    }),
    text: t.string({
      nullable: false,
      resolve: (obj) => obj.text as string,
    }),
    user: t.field({
      type: UserRef,
      resolve: (obj) =>
        resolveUser(obj, { id: (obj.user as Record<string, unknown>)?._id }),
    }),
    createDate: t.field({
      type: "DateTime",
      nullable: false,
      resolve: (obj) => obj.createDate as string,
    }),
    parent: t.field({
      type: CommentRef,
      resolve: (obj) =>
        obj.parentId
          ? CommentModel.findOne({ _id: obj.parentId }).exec()
          : null,
    }),
    replies: t.field({
      type: [CommentRef],
      resolve: (obj) =>
        CommentModel.find({ parentId: obj._id ?? obj.id }).exec(),
    }),
  }),
})
