# Puppeteer with Mocha - Page Object Model - Automation Framework

Design Page Objects and run Tests

## Run application

Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/Puppeteer-Jest-Page-Object-Automation-Framework
```

Install dependencies

```bash
Install Node modules with command : npm i
```

Run test

```bash
Test Execution 
npm run test:smoke                           #For smoke tests execution
npm run test:regression                      #For regrerssion tests execution
npm run test                                 #For all tests execution
npm run test:createAccount                   #For create account tests execution
npm run test:createTransaction               #For create transaction tests execution
npm run test:accountsList                    #For account list tests execution
npm run test:transactionsList                #For transactions list tests execution
npm run test:single                          #For individual test execution
npm run start-jenkins-server                 #For starting the Jenkins server
```

Folder Structure

├── Root...
    │
    ├── pageobjects                                     # Selectors for tests
    │   |
    │   ├── accountsListPageObjects.js                  # Account List page locators
    │   ├── createAccountPageObjects.js                 # Create Account page locators
    │   ├── createTransactionPageObjects.js             # Create Transaction page locators
    │   ├── transactionsListPageObjects.js              # Transactions List page locators
    │                                      
    │
    ├── pages                                           # Generic functionality for tests
    │   |
    │   ├── accountsListPage.js                         # Account List page testing functionality
    │   ├── createAccountPage.js                        # Create Account page testing functionality
    │   ├── createTransactionPage.js                    # Create Transactoion page testing functionality
    │   ├── transactionsListPage.js                     # Transactions List page testing functionality
    │
    │
    │
    ├── tests                                           # Test suite with 59 Test Cases
    │    │                                     
    │    ├── smokeTests                                 # Test suite with 17 Test Cases
    │    │         ├── accountsListTests
    │    │         ├── createAccountTests
    │    │         ├── createTransactionTests
    │    │         ├── transactionsListTests
    │    │ 
    │    │                                                 
    │    ├── testsRegression                            # Test suite with 42 Test Cases        
    │              ├── accountsListTests
    │              ├── createAccountTests
    │              ├── createTransactionTests
    │              ├── transactionsListTest 
    │            
    │── .babelrc                                        # JavaScript Compiler
    │
    │
    │── config.js                                       # Confiuguration JavSacript File with the baseUrl defined here
    │
    │
    ├── helper.js                                       # Common utility file re-used across the Framework
    │   
    │── Screenshots                                     # Screenshots for failed tests
    │                          
    ├── jenkins.war                                     # Jenkins war file used to start the Jenkins server
    │
    ├── package.json                                    # List of Packages
    │
    └─── mochawesome-report                             # Test Report for the executed Test Cases


Mochawesome Test Report:
        │
        ├──mochawesome-report
            ├── assets
            ├── mochawesome.html                        # Right click --> 'Reveal in Finder' for MAC (OR) 'Reveal in Explorer for Windows' to view report
            ├── mochawesome.json