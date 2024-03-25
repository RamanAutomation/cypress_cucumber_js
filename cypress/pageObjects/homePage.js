import sharedFunctions from "../support/shared_functions";

export class Homepage {
    visitHomePage() {
        return cy.visit('/')
    }
    grabAllElements() {
        let AllValues = [];
        return cy.customPath(sharedFunctions.getXpathValue('pageSlider')).each((elements) => {
            cy.wrap(elements).invoke('text').then((text) => {
                AllValues.push(text.trim());
                cy.then(() => {
                    console.log('All values', AllValues)
                    //this.visitHomePage().should('have.text'.AllValues)
                })

            })
        })
    }
    grabAllFeaturesItems() {
        let AllfeatureItems = [];
        return cy.customPath(sharedFunctions.getXpathValue('featureItems')).each((elements) => {
            cy.wrap(elements).invoke('text').then((text) => {
                AllfeatureItems.push(text.trim())
                cy.then(() => {
                    console.log('All features iems', AllfeatureItems)
                })
            })
        })
    }
    grabHomepageHeaders(){
        const HeaderNames =[];
        cy.customPath(sharedFunctions.getXpathValue('pageHomeHeader')).should('exist').then(()=>{
            for(let i=0;i<8;i++){
                cy.customPath(sharedFunctions.getXpathValue('pageHomeHeader')).eq(i).invoke('text').then((Headers)=>{
                    HeaderNames.push(Headers)
                })
            }
        })
        
    }
    goBackFunction() {
        cy.visit('/')
        cy.title().should('eq', 'Automation Exercise')
        cy.customPath(sharedFunctions.getXpathValue('headerProduct')).click()
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.go('back')
        cy.title().should('eq', 'Automation Exercise')
        cy.go('forward')
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.go(-1)
        cy.title().should('eq', 'Automation Exercise')
        cy.go(1)
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.reload()
    }


  ImplicitAssertions() {
        cy.visit('/')
        // cy.url().should('include', 'automationexercise.com')
        // cy.url().should('eq','https://automationexercise.com/')
        // cy.url().should('contains','automatione')

        cy.url().should('include', 'automationexercise.com')
            .and('eq', 'https://automationexercise.com/')
            .and('contains', 'automatione')
            .and('not.contain','test')
    }

}