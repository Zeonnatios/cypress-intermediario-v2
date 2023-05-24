const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      snapshotOnly: true,
      hideCredentials: true,
      requestMode: true,
    }
  },
  fixturesFolder: false,
  video: false,
});