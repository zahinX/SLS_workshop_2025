import Utils from '../support/utils'
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('Actions & Assertions', () => {

    context('Assignment - 8.1', () => {
    
        before(() => {
            utls.clearAllStorage()
            cy.visitPage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            utls.waitForSeconds(20)
        })

        it('OrangeHRM Login: Assertion from fixtures', () => {
            cy.fixture('A8_1').then((data)=>{
                data.forEach(cred => {
                    cy.get('[placeholder="Username"]').type(cred.name)
                    cy.get('[placeholder="Password"]').type(cred.pass)
                    cy.get('[type="submit"]').click()

                    if(cred.name === 'Admin' && cred.pass === 'admin123') {
                        cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name').eq(7).should('have.text', cred.valid)
                    } else {
                        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', cred.invalid)
                    }
                })
            })
        })
    })

    context('Assignment - 8.2', () => {
    
        before(() => {
            utls.clearAllStorage()
            cy.visitPage('https://the-internet.herokuapp.com/upload')
        })

        it('Upload file & verify uploaded file name', () => {
            cy.get('#file-upload').attachFile('QuoteByDenzel.webp')
            cy.get('#file-submit').click()
            cy.get('#uploaded-files').should('contain', 'QuoteByDenzel.webp')
        })
    })

    context('Assignment - 8.3', () => {
    
        before(() => {
            utls.clearAllStorage()
            cy.visitPage('https://testautomationpractice.blogspot.com/')
        })

        it('Actions & Assertions with fixtures from last assignment', () => {            
            cy.fixture('A8_3').then((data) => {
                cy.typeText('#name', data.name)
                cy.typeText('#email', data.email)
                cy.typeText('#phone', data.phone)
                cy.typeText('textarea', data.addr)
                cy.checkTheBox(`#${data.gender}`)
                cy.verifyCheckBox(`#${data.gender}`)
                cy.checkTheBox(`#${data.day}`)
                cy.verifyCheckBox(`#${data.day}`)
                cy.selectDropdownByValue('#country', data.country)
                cy.clickButtonByLocator('[onclick="toggleButton(this)"]')
                cy.elementContainsText('[onclick="toggleButton(this)"]', data.stopText)
                cy.clickButtonByLocator('[onclick="toggleButton(this)"]')
                cy.elementContainsText('[onclick="toggleButton(this)"]', data.startText)
            })
        })
    })
})