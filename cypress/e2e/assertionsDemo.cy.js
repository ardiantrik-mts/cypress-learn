// import HomePage from "../pages/HomePage";

describe('Assertion Test', () => {
    beforeEach(() => {
        cy.visit('https://dev-edu.hsi.id/')
    })

    it('Assertion Title', () => {
        // let homePage = new HomePage()

        cy.xpath('//body//flt-glass-pane').wait(10000).click()
    })
  })