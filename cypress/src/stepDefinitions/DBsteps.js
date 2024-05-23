import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { dataBase } from "../../pageObjects/dataBase";

const DataBase = new dataBase;

Given("Verify firstname",()=>{
 DataBase.verifyFirstname()
})

Then("Verify lastname",()=>{
    DataBase.verifyLastname()
   })
Then("verify the addresss and city name",()=>{
    DataBase.VerifyAddressCity()
})