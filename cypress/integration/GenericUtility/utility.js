
export default class GenericUtility{

    typeText(element, value){
        cy.get(element).type(value)
    }

    visitUrl(url){
        cy.visit(url)
    }

    clickBtn(element){
        cy.get(element).click()
    }

    textValidate(element, value){
        cy.get(element).should('have.text', value)
    }

}