// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('customPath',(selector)=>{
    if(selector.startsWith('//')){
      return cy.xpath(selector)
    }else{
        return cy.get(selector)
    }  
})

Cypress.Commands.add("ifXPathExist", (xpath) => {
  return cy.xpath('count(' + xpath + ')')
})


Cypress.Commands.add('customPath',(selector)=>{
  if(selector.startsWith('//')){
    return cy.xpath(selector)
  }else{
      return cy.get(selector)
  }  
})

Cypress.Commands.add('getResponse',()=>{
cy.request('GET','https://automationexercise.com/api/productsList').as('apiresponse')
cy.get('@apiresponse').then((response)=>{
  return response
})
})

Cypress.Commands.add('postResponse',()=>{
cy.request('POST','https://automationexercise.com/api/productsList').as('apiPostResponse')
cy.get('@apiPostResponse').then((response)=>{
  return response
})
})
