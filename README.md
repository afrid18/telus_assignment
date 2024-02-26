# Telus Assignment

### Test Cases
- [x] Visit telus.com
- [x] Search for "Internet"
- [x] Select third search result (with partial text matching)
- [x] Match title of the search page to search terms
- [x] Ensure minimum of six results are displayed


### How to run the test

1. Clone the repository
2. Open the terminal and navigate to the project directory
3. Run the following command to install the required packages
```
npm install
```
4. Run the following command to run the test
```
npm run cypress:run
```
This will run tests in the terminal. If you want to run the tests in the browser, run the following command
```
npm run cypress:open
```

### Test Results
```
  Running:  telusSearch.cy.js                                                               (1 of 1)


  Test search functionality
    ✓ passes (18285ms)


  1 passing (22s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     21 seconds                                                                       │
  │ Spec Ran:     telusSearch.cy.js                                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  telusSearch.cy.js                        00:21        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:21        1        1        -        -        -

```
