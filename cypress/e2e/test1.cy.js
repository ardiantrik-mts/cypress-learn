/// <reference types="cypress"/>

it('Google Search', function(){
    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation step by step{enter}')

})