import sharedFunctions from "../support/shared_functions.js"

export class login {

  visitLoginPage() {
    return cy.visit('/login')
  }
  enterLoginEmail(Email) {
    return cy.customPath(sharedFunctions.getIdValue('loginEmail')).type(Email)

  }
  enterLoginPassword(Password) {
    return cy.customPath(sharedFunctions.getIdValue('loginPassword')).should('be.visible').type(Password)

  }
  ClickLoginBtn() {
    return cy.customPath(sharedFunctions.getIdValue('loginBtn')).should('be.visible').click()
  }
  removeLoagin() {
    const Email = Cypress.env("signUpUser1").email;
    this.enterLoginEmail(Email)
  }

  LoginEmailPasswordError() {
    return cy.customPath(sharedFunctions.getXpathValue('LoginEmailPasswordError')).should('be.visible').should('have.text','Your email or password is incorrect!')
  }
  
}
export default login;