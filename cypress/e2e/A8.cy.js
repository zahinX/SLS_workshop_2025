import Utils from '../support/utils'
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('Actions & Assertions', () => {

    context('Assignment - 8.1', () => {
    
        before(() => {
        })
        
        beforeEach(() => {
            utls.clearAllStorage()
        })

        it('OrangeHRM Login: Assertion from fixtures', () => {
        })
    })

    context('Assignment - 8.2', () => {
    
        before(() => {
        })
        
        beforeEach(() => {
            utls.clearAllStorage()
        })

        it('File Upload: assert uploaded file name', () => {
        })
    })

    context('Assignment - 8.3', () => {
    
        before(() => {
        })
        
        beforeEach(() => {
            utls.clearAllStorage()
        })

        it('Actions & Assertions with fixtures from last assignment', () => {
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
})