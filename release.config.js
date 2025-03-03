module.exports = {
  branches: ["release"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          "zip -qq -r logseq-memos-sync-${nextRelease.version}.zip dist readme.md logo.webp LICENSE package.json",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "logseq-memos-sync-*.zip",
      },
    ],
  ],
};
