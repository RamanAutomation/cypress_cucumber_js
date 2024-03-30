import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Apitest } from "../../pageObjects/apiTest";

const ApiTest= new Apitest

Given("verify the response code is {int}",(statusCode)=>{
    ApiTest.verifystatuscode(statusCode)
})
Then("verify the response status message is {string}",(statusMessage)=>{
  ApiTest.verifystatusMessage(statusMessage)
})
Then("verify POST response Error message and code",()=>{
    ApiTest.verifyPostResError()
})
Then(" Get all brand list and store",()=>{
  ApiTest.getAllbrandlist()
})