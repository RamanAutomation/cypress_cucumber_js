
import sharedFunctions from "../support/shared_functions";

export const dataMap =new Map();   
export class Apitest{

 
verifystatuscode(statusCode){
    cy.visit('/')
    cy.getResponse().then((res)=>{
        expect(res.status).to.eq(statusCode)
    })
   }
   verifystatusMessage(statusMessage){
    cy.getResponse().then((res)=>{
        expect(res.statusText).to.eq(statusMessage)
    })
   }
   verifyPostResError(){
    cy.postResponse().then((res)=>{
      const body = res.body
      const logObject =JSON.parse(body)
      const responseCode =logObject.responseCode;
      const message =logObject.message;
      expect(responseCode).to.eq(405)
      expect(message).to.eq('This request method is not supported.')
    })
   }
   getAllbrandlist(){
    cy.getAllbrandlist().then((val)=>{
        const body=val.body
        const logObject=JSON.parse(body)
        logObject.brands.forEach((element)=>{
            const id =element.id
            const brand=element.brand
            dataMap.set(id,brand)
            cy.log('Brand name', brand)
            cy.log('Brand id', id)
        })
    })
   }
}

