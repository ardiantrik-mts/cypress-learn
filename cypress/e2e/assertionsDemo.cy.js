// import HomePage from "../pages/HomePage";

describe('Assertion Test', () => {
    beforeEach(() => {
        cy.visit('https://dev-edu.hsi.id/')
    })

    it('Assertion Title', () => {
        // let homePage = new HomePage()

        cy.xpath('//flt-glass-pane').wait(15000).click()
    })
  })