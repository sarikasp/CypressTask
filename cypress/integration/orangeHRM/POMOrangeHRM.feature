Feature: Ecommerce Site: OrangeHRM
    
     Scenario: Login with valid credentials Orange HRM Site
        Given Visit Orange HRM Site
        And Fill the username with valid credentials
        And Fill the password with valid credentials
        When Click on login button
        Then Validate the Dashboard

     Scenario: Login with invalid credentials  Orange HRM Site
        Given Visit Orange HRM Site
        And Fill the username with invalid credentials
        And Fill the password with invalid credentials
        When Click on login button
        Then Validate the Error message
