// @vitest-environment node
import { vi } from "vitest"

vi.mock("ioredis", () => {
  const RedisMock = vi.fn()
  RedisMock.prototype.on = vi.fn()
  RedisMock.prototype.connect = vi.fn()
  return { default: RedisMock }
})
vi.mock("../../elasticsearch/elastic-client", () => ({
  elasticClient: {},
}))
vi.mock("../../config", () => ({
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

import { describe, it, expect } from "vitest"
// Import from the CJS bundle to match the graphql instance Pothos uses internally
import { printSchema } from "graphql/index.js"

describe("GraphQL schema", () => {
  it("builds without error", async () => {
    const schema = (await import("../schema")).default
    expect(schema).toBeDefined()
    const sdl = printSchema(schema)
    expect(sdl).toContain("type Query")
    expect(sdl).toContain("type Mutation")
    expect(sdl).toContain("type Dataset")
  })
})
