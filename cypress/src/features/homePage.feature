Feature: HomePage
  Scenario: Grab home page values
    Given I navigate to automation exercise website home
    When grab all elements
    And Grab all feature items
    And Grab the home page headers

  Scenario: Back & forward test
    And verify user should be able to Back & forward
    And Implicit Assertions verify URL
