import Login from '../support/POM/login'
import Logo from '../support/POM/logo'
import Utils from '../support/utils'
const login = new Login()
const logo = new Logo()
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('ipex Case Center - Dev', () => {
    
    before(() => {
        login.clearAllStorage()
        login.visitLoginPage()
    })
    
    beforeEach(() => {})

    context('Login and logo verification', () => {

        it('Verify login page URL', () => {
            login.verifyPartialLoginUrl() // uses include
            login.verifyLoginPageHeader() // uses contains
            login.verifyLoginPageTitle() // verifies title
        })

        it('Verify login', () => {
            login.typeEmail()
            // login.typePass()
            utls.typePass(`#inputPassword`, `${Cypress.env('adminPass')}`)
            login.clickLoginBtn()
            login.verifyUrl() // uses equal
        })
    })

    // context('Test Block 2', () => {

    //     it('Test Case 3', () => {})

    //     it('Test Case 4', () => {})
    // })
    
    after(() => {})
    
    afterEach(() => {})
})