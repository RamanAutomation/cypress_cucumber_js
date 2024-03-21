import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login from "../../pageObjects/login.js";
import signUp from "../../pageObjects/signUp.js"
import sharedFunction from "../../support/shared_functions.js"
import { Homepage } from "../../pageObjects/homePage.js";

const HomePage =new Homepage
const Login = new login
const SignUp = new signUp

before(() => {
  sharedFunction.loadXPathValues();
  sharedFunction.loadIdvalues();
})

Given("I navigate to automation exercise website", () => {
  Login.visitLoginPage()
  // cy.fixture("xPath.json").then((data)=>{
  //   console.log(data)
  //   cy.xpath(data.loginEmail).click()
  // })
});

When('I enter login email credentials {string}', (Email) => {
  Login.enterLoginEmail(Email)
})
Then('I enter login password credentials {string}', (Password) => {
  Login.enterLoginPassword(Password)
})
Then('I should be logged in', () => {
  Login.ClickLoginBtn()
  Login.LoginEmailPasswordError()
})
Then("Verify the email and password are invalid", () => {
  Login.LoginEmailPasswordError()
})
Then('Testing', (Email) => {
  Login.removeLoagin(Email)
})

When("I enter user name and email details in signup new user page",()=>{
  SignUp.NewUserCreation()
})
Then("I enter the account informations",()=>{
  SignUp.NewUserAccountInformation()
})
When("I enter already exist name and email",()=>{
  SignUp.invalidEmail()
})

Given("I verify the email exist warning message",()=>{
  SignUp.exixtEmailInput()
})
When("grab all elements", () => {
  HomePage.grabAllElements()
})
Given("I navigate to automation exercise website home", () => {
  HomePage.visitHomePage()
})
Given("Grab all feature items", () => {
  HomePage.grabAllFeaturesItems()

});
Then("Grab the home page headers",()=>{
  HomePage.grabHomepageHeaders()
})

