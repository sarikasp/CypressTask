Feature: Ecommerce Site: OrangeHRM

    Scenario: Login Orange HRM Site
        Given Visit Orange HRM Site
        And Fill the username
        And Fill the password
        When Click on login button
        Then Validate the Error message

    Scenario: Traverse Method
        Given Visit Web Driver University Site
        Then Validate Children Method
        
              