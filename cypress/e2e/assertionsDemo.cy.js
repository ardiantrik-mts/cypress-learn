import HomePage from "../pages/HomePage";

describe('Assertion Test', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })

    it('Assertion Title', () => {
        let homePage = new HomePage()

        homePage.titleText().should('have.text','Kitchen Sink')
    })
  })