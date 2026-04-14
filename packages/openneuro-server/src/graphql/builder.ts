// packages/openneuro-server/src/graphql/builder.ts
import SchemaBuilder from "@pothos/core"
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects"
import DirectivesPlugin from "@pothos/plugin-directives"

export interface UserInfo {
  id: string
  userId: string
  admin: boolean
  username?: string
  provider?: string
  providerId?: string
  blocked?: boolean
  orcidConsent?: boolean | null
  reviewer?: boolean
  exp?: string
  scopes?: string[]
  indexer?: boolean
}

export interface GraphQLContext {
  user: string
  isSuperUser: boolean
  userInfo: UserInfo
}

export const builder = new SchemaBuilder<{
  Context: GraphQLContext
  Scalars: {
    Date: { Input: string; Output: string }
    DateTime: { Input: string; Output: string }
    Time: { Input: string; Output: string }
    BigInt: { Input: string; Output: string }
    JSON: { Input: unknown; Output: unknown }
  }
  DefaultFieldNullability: true
  Directives: {
    cacheControl: {
      locations: "OBJECT" | "FIELD_DEFINITION"
      args: {
        maxAge?: number
        scope?: "PUBLIC" | "PRIVATE"
      }
    }
  }
}>({
  plugins: [SimpleObjectsPlugin, DirectivesPlugin],
  // TypeScript strict mode is not enabled in this project; Pothos requires
  // this acknowledgment to suppress the compile-time warning.
  notStrict:
    "Pothos may not work correctly when strict mode is not enabled in tsconfig.json",
  directives: {
    useGraphQLToolsUnorderedDirectives: true,
  },
})
