import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "packages/openneuro-server/src/graphql/schema.graphql",
  documents: [
    "packages/openneuro-app/src/**/*.{ts,tsx,js,jsx}",
    // Exclude legacy datalad directory (duplicates operations in dataset/)
    "!packages/openneuro-app/src/scripts/datalad/**",
    // Exclude files with duplicate operation names (to be resolved during migration)
    "!packages/openneuro-app/src/scripts/dataset/files/file-tree-unloaded-directory.jsx",
    "!packages/openneuro-app/src/scripts/dataset/download/download-script.tsx",
    "!packages/openneuro-app/src/scripts/uploader/uploader.jsx",
    "!packages/openneuro-app/src/scripts/search/use-search-results.tsx",
    "!packages/openneuro-app/src/scripts/queries/dataset.ts",
    "!packages/openneuro-app/src/scripts/queries/datasetEvents.ts",
    // References fragment from excluded dataset.ts
    "!packages/openneuro-app/src/scripts/dataset/snapshot-container.tsx",
  ],
  generates: {
    "packages/openneuro-app/src/gql/": {
      preset: "client",
    },
  },
  ignoreNoDocuments: true,
}

export default config
