import sharedFunctions from "../support/shared_functions";

export class signUp {

    invalidEmail(){
        //this.NewUserCreation()
        cy.customPath(sharedFunctions.getIdValue('signName')).should('be.visible').type(Cypress.env('existUserAndEmail').invalidUserName)
        cy.customPath(sharedFunctions.getIdValue('signEmail')).should('be.visible').type(Cypress.env('existUserAndEmail').invalidEmail)
        cy.customPath(sharedFunctions.getIdValue('signBtn')).click({force:true})
        return cy.customPath(sharedFunctions.getXpathValue('errorMsg')).should('have.text','Email Address already exist!')
      }

    NewUserCreation(){
        cy.customPath(sharedFunctions.getIdValue('signName')).should('be.visible').type(Cypress.env('signUpUser1').name)
        cy.customPath(sharedFunctions.getIdValue('signEmail')).should('be.visible').type(Cypress.env('signUpUser1').email)
        cy.customPath(sharedFunctions.getIdValue('signBtn')).click({force:true})
      }
    
      NewUserAccountInformation(){
        cy.contains('Enter Account Information').should('be.visible')
        cy.customPath(sharedFunctions.getIdValue('gender')).click({force:true})
        cy.customPath(sharedFunctions.getIdValue('password')).type(Cypress.env('signUpUser1').password)
        cy.customPath(sharedFunctions.getIdValue('day')).type(Cypress.env('signUpUser1').Day)
        cy.customPath(sharedFunctions.getIdValue('month')).type(Cypress.env('signUpUser1').Month)
        cy.customPath(sharedFunctions.getIdValue('year')).type(Cypress.env('signUpUser1').Years)
        cy.customPath(sharedFunctions.getXpathValue('newsLetterLabel')).click({force:true})
        cy.customPath(sharedFunctions.getIdValue('firstName')).type(Cypress.env('signUpUser1').firstName)
        cy.customPath(sharedFunctions.getIdValue('lastName')).type(Cypress.env('signUpUser1').lastName)
        cy.customPath(sharedFunctions.getIdValue('company')).type(Cypress.env('signUpUser1').company)
        cy.customPath(sharedFunctions.getIdValue('country')).type(Cypress.env('signUpUser1').country)
        cy.customPath(sharedFunctions.getIdValue('address')).type(Cypress.env('signUpUser1').address)
        cy.customPath(sharedFunctions.getIdValue('address2')).type(Cypress.env('signUpUser1').address2)
        cy.customPath(sharedFunctions.getIdValue('state')).type(Cypress.env('signUpUser1').state)
        cy.customPath(sharedFunctions.getIdValue('city')).type(Cypress.env('signUpUser1').city)
        cy.customPath(sharedFunctions.getIdValue('zipcode')).type(Cypress.env('signUpUser1').zipcode)
        cy.customPath(sharedFunctions.getIdValue('mobileNumber')).type(Cypress.env('signUpUser1').mobileNumber)
       // cy.custompath(sharedFunctions.getIdValue('createAccountBtn')).click({force:true})
    
      }

      exixtEmailInput(){
        this.NewUserCreation()
        cy.ifXPathExist(sharedFunctions.getIdValue('errorMsg')).then((exist)=>{
          if(!exist){
            cy.url('inculde','https://automationexercise.com/signup')
            this.NewUserAccountInformation()
          }
        })
      }
}

export default signUp;