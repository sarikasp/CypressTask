import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('Visit Orange HRM Site', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
})

And('Fill the username', ()=>{
    cy.get('[id="txtUsername"]').type('Admin')
})

And('Fill the password', ()=>{
cy.get('[id="txtPassword"]').type('admin123')
})

When('Click on login button', ()=>{
    cy.get('[id="btnLogin"]').click()
})

Then('Validate the Error message', ()=>{
    cy.get('[id="spanMessage"]').should('have.text', 'Invalid credentials')
})

Given('Visit Web Driver University Site', ()=>{
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('[id="data-table"]').invoke('removeAttr', 'target').click({force: true})
})


Then('Validate Children Method', ()=>{
    cy.get('[class="traversal-drinks-list"]').children('[id="coffee"]').should('have.text', 'Coffee')
})