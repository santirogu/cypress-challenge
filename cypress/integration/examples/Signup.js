import { gotItButton, signupButton } from '../../fixtures/main.json'
import {
  emailInput,
  termsCheckbox,
  currencySelect,
  currencyListSelect,
  passwordInput,
  reenterPasswordInput,
  createAccountButton,
  congratulationsLabel
} from '../../fixtures/signUp.json'

describe('When the user is trying to signup to the casino app', () => {
  beforeEach(() => {
    cy.visit('https://demo.casino/', { failOnStatusCode: false })
    cy.get(gotItButton).click()
    cy.get(signupButton).click()
  })

  it('Then the user can register correctly', () => {
    const randomNumber = Math.floor(Math.random() * 10000)
    cy.get(emailInput).type(`challenge-${randomNumber}@yopmail.com`)
    cy.get(termsCheckbox).click()
    cy.get(currencySelect).click()
    cy.get(currencyListSelect)
      .contains('EUR')
      .click()
    cy.get(passwordInput).type('Casino2023*')
    cy.get(reenterPasswordInput).type('Casino2023*')
    cy.get(createAccountButton).click()
    cy.get(congratulationsLabel).should('contain', 'Congratulations!')
  })
})
