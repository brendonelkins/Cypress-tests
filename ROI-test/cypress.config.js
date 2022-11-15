const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "ebni1o",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})