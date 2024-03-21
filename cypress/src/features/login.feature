Feature: Login
  Scenario: Login user with correct email and password
    Given I navigate to automation exercise website
    When I enter login email credentials 'tessafvast@one.com'
    And I enter login password credentials 'test1234'
    And I should be logged in
    Then Verify the email and password are invalid

  Scenario: now verify proper warning message display
    Given I navigate to automation exercise website
    When I enter already exist name and email
