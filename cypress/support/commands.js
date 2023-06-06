//To avoid the exceptions caused by the application and to continue with automation
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
