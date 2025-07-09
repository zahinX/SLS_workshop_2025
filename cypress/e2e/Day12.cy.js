import Utils from '../support/utils'
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('iFrame', () => {
    
    before(() => {
    })
    
    beforeEach(() => {
        utls.clearAllStorage()
    })

    context('iFrame & Drag&Drop', () => {

        it.skip('iFrame Test', () => {
            // cy.visit()
            utls.visitPage('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
            cy.frameLoaded('#iframeResult')
            cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick()
            cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')
        })

        it.skip('Drag & Drop', () => {
            utls.visitPage('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
            cy.get('#box6').drag('#box106', {force: true})
        })

        it.skip('JS Alert', () => {
            utls.visitPage('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('[onclick="jsAlert()"]').click()
            cy.on('window:alert', (alert_window) => {
                expect(alert_window).to.contain('I am a JS Alert')
            })
            utls.elementIsVisible('#result')
            utls.elementContainsText('#result', 'You successfully clicked an alert')
        })

        it('JS Confirm - OK', () => {
            utls.visitPage('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('[onclick="jsConfirm()"]').click()
            cy.on('window:confirm', (confirm_window) => {
                expect(confirm_window).to.contain('I am a JS Confirm')
            })
            utls.elementIsVisible('#result')
            utls.elementContainsText('#result', 'You clicked: Ok')
        })

        it('JS Confirm - Cancel', () => {
            utls.visitPage('https://the-internet.herokuapp.com/javascript_alerts')
            cy.get('[onclick="jsConfirm()"]').click()
            cy.on('window:confirm', (confirm_window) => false)
            utls.elementIsVisible('#result')
            utls.elementContainsText('#result', 'You clicked: Cancel')
        })

        it('JS Confirm - Prompt', () => {
            let txt = 'Zahin'
            utls.visitPage('https://the-internet.herokuapp.com/javascript_alerts')
            cy.window().then((win) => {
                cy.stub(win, 'prompt').returns(txt)
            })
            cy.get('[onclick="jsPrompt()"]').click()
            utls.elementIsVisible('#result')
            utls.elementContainsText('#result', `You entered: ${txt}`)
        })
    })
    
    after(() => {})
    
    afterEach(() => {})
})