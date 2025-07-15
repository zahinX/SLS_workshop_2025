import Utils from '../support/utils'
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('Actions & Assertions', () => {
    
    before(() => {
    })
    
    beforeEach(() => {
        utls.clearAllStorage()
    })

    context('Actions & Assertions', () => {

        it('Actions & Assertions', () => {
            cy.visitPage('https://testautomationpractice.blogspot.com/')
            cy.typeText('#name', 'Zahin')
            cy.typeText('#email', 'zahin.ahad@selisegroup.com')
            cy.typeText('#phone', '41761234567')
            cy.typeText('textarea', 'Address')
            cy.checkTheBox('#male')
            cy.verifyCheckBox('#male')
            cy.checkTheBox('#wednesday')
            cy.verifyCheckBox('#wednesday')
            cy.selectDropdownByValue('#country', 'Japan')
            cy.clickButtonByLocator('[onclick="toggleButton(this)"]')
            cy.elementContainsText('[onclick="toggleButton(this)"]', 'STOP')
            cy.clickButtonByLocator('[onclick="toggleButton(this)"]')
            cy.elementContainsText('[onclick="toggleButton(this)"]', 'START')
        })
    })
    
    after(() => {})
    
    afterEach(() => {})
})