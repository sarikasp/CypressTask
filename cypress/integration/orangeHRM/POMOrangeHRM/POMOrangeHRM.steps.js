import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../Selector/selector"
import GenericUtility from '../../GenericUtility/utility'


let selector = new CSSSelector()
let utility = new GenericUtility()

  Given( "Visit Orange HRM Site", function() {
    // cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    // cy.visit(selector.orangeUrl)
    utility.visitUrl(selector.orangeUrl) 
  });

  And("Fill the username with valid credentials", function() {
    // cy.get('[id="txtUsername"]').type('Admin')
    // cy.get(selector.orangeUsername).type('Admin')
    utility.typeText(selector.orangeUsername, 'Admin')
    
  });

  And("Fill the password with valid credentials", function() {
    // cy.get('[id="txtPassword"]').type('admin123')
    // cy.get(selector.orangePassword).type('admin123')
    utility.typeText(selector.orangePassword, 'admin123')
    
  });

  When("Click on login button", function() {
    // cy.get( '[id="btnLogin"]').click()
    // cy.get(selector.loginBtn).click()
    utility.clickBtn(selector.loginBtn)
  });

  Then("Validate the Dashboard", function() {
    // cy.get('[id="menu_dashboard_index"]>b').should('have.text', 'Dashboard')
    // cy.get(selector.orangeDashboard).should('have.text', 'Dashboard')
    utility.textValidate(selector.orangeDashboard, 'Dashboard')
  });


  And("Fill the username with invalid credentials", function() {
    // cy.get('[id="txtUsername"]').type('Admin123')
    // cy.get(selector.orangeUsername).type('Admin123')
    utility.typeText(selector.orangeUsername, 'Admin123') 
  });

  And("Fill the password with invalid credentials", function() {
    // cy.get('[id="txtPassword"]').type('admin')
    // cy.get(selector.orangePassword).type('admin')
    utility.typeText(selector.orangePassword, 'Admin')  
  });

  Then("Validate the Error message", function() {
    // cy.get('[id="spanMessage"]').should('have.text', 'Invalid credentials')
    // cy.get(selector.orangeErrorMsg).should('have.text', 'Invalid credentials')
    utility.textValidate(selector.orangeErrorMsg, 'Invalid credentials')
    
  });



