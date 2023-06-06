const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1449,
  viewportHeight: 446,
  chromeWebSecurity: false,
  experimentalDisableAutomaticallyFailOnReservedError: true,
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  }
})
