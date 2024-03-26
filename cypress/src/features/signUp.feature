Feature: SignUp

  Scenario: Create new user
    Given I navigate to automation exercise website
    When I enter user name and email details in signup new user page
    And I enter the account informations

  Scenario: Proper warning message exist or not
    Given I navigate to automation exercise website
    When I verify the email exist warning message

  Scenario: Verify input values
    Given I navigate to automation exercise website
    When I verify the input name and email id
    And I verify the input name and email id in next page
