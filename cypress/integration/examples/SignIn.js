import {
  gotItButton,
  signinButton,
  signinOptionButton
} from '../../fixtures/main.json'
import {
  emailPhoneInput,
  passwordInput,
  signInButton,
  errorUsernameLabel
} from '../../fixtures/signIn.json'

describe('When the user is trying to signin to the casino app', () => {
  beforeEach(() => {
    cy.visit('https://demo.casino/', { failOnStatusCode: false })
    cy.get(gotItButton).click()
    cy.get(signinButton).click()
    cy.get(signinOptionButton).click()
  })

  it('and the username does not exist Then an error message should appear ', () => {
    cy.get(emailPhoneInput).type('userdoesnotexist@gmail.com')
    cy.get(passwordInput).type('thisismypassword')
    cy.get(signInButton).click()
    cy.get(errorUsernameLabel).should('be.visible')
    cy.get(errorUsernameLabel).should(
      'contain',
      'Incorrect login, email, phone number or password.'
    )
  })
})
