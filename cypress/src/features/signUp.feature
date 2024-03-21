Feature: SignUp
Scenario: Create new user
    Given I navigate to automation exercise website
    When I enter user name and email details in signup new user page
    And I enter the account informations

  Scenario: Create new user
    Given I navigate to automation exercise website
    When I verify the email exist warning message
