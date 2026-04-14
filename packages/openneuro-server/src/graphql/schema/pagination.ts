import { builder } from "../builder"

export const PageInfo = builder.simpleObject("PageInfo", {
  fields: (t) => ({
    hasNextPage: t.boolean({ nullable: false }),
    hasPreviousPage: t.boolean({ nullable: false }),
    startCursor: t.string(),
    endCursor: t.string(),
    count: t.int(),
  }),
})
