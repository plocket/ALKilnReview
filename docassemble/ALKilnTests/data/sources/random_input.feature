@random_input
Feature: Random input

# In tag names, 'ri' is for 'random input'

@fast @ri1 @random
Scenario: I fill in random input till the end
  Given I start the interview at "test_random_input"
  And I set the variable "what_to_test" to "common"
  And I answer randomly for at most 20 pages
  Then the question id should be "end"

@fast @ri2 @random
Scenario: I fill in random input for 1 page
  And I set the variable "what_to_test" to "common"
  Given I start the interview at "test_random_input"
  And I answer randomly for at most 1 page

# Should create two unique folders for random step screenshots which
# must be checked manually
@fast @ri3 @random
Scenario: I answer randomly till the end twice
  Given I start the interview at "test_random_input"
  And I set the variable "what_to_test" to "common"
  And I answer randomly for at most 50 pages
  Given I start the interview at "test_random_input"
  And I set the variable "what_to_test" to "common"
  And I answer randomly for at most 50 pages

@fast @ri4 @random @error
Scenario: Fail with error page from random input
  Given the final Scenario status should be "failed"
  Given I start the interview at "test_missing_var_error_screen"
  And the max seconds for each step in this scenario is 10
  And I answer randomly for at most 3 pages

@ri5 @random
Scenario: Stop when there's only a back button
  Given I start the interview at "test_random_input.yml"
  And I set the variable "what_to_test" to "only_back"
  And I tap to continue
  And I answer randomly for at most 3 pages
  Then the question id should be "only back button"
