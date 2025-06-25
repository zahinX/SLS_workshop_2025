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
            utls.visitPage('https://testautomationpractice.blogspot.com/')
            utls.typeText('#name', 'Zahin')
            utls.typeText('#email', 'zahin.ahad@selisegroup.com')
            utls.typeText('#phone', '41761234567')
            utls.typeText('textarea', 'Address')
            cy.get('[for="male"]').check()
            cy.get('[for="male"]').should('be.checked')
            cy.get('#wednesday').check()
            cy.get('#wednesday').should('be.checked')
            utls.selectDropdownByValue('#country', 'Japan')
        })

        // it('Base URL visit', () => {})

        // it('Login', () => {})
    
    after(() => {})
    
    afterEach(() => {})
    })
})