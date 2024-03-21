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
}