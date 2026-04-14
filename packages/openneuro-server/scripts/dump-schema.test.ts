// @vitest-environment node
import { vi } from "vitest"

vi.mock("ioredis", () => {
  const RedisMock = vi.fn()
  RedisMock.prototype.on = vi.fn()
  RedisMock.prototype.connect = vi.fn()
  return { default: RedisMock }
})
vi.mock("../src/elasticsearch/elastic-client", () => ({
  elasticClient: {},
}))
vi.mock("../src/config", () => ({
  default: {
    auth: { jwt: { secret: "test-secret-123456789012345678901" } },
    redis: { port: 6379, host: "localhost" },
    datalad: { uri: "datalad", workers: 4 },
    mongo: { url: "mongodb://" },
    notifications: { email: { from: "notifications@example.com" } },
    elasticsearch: {},
    doi: { username: "" },
  },
}))

import { writeFileSync } from "fs"
// Import from the CJS bundle to match the graphql instance Pothos uses internally
import { lexicographicSortSchema, printSchema } from "graphql/index.js"
import schema from "../src/graphql/schema"

it("dumps schema to SDL", () => {
  const sdl = printSchema(lexicographicSortSchema(schema))
  writeFileSync(
    new URL("../schema.graphql", import.meta.url),
    sdl + "\n",
  )
})
