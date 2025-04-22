import Utils from '../utils'

/**
 * @author Zahin Ahad
*/

export default class Login extends Utils{

    /**
     * Visits login page
     * @returns {void}
     */
    visitLoginPage() {
        this.visitPage(`${Cypress.env('baseUrl')}`)
    }

    /**
     * Types email
     * @returns {void}
     */
    typeEmail() {
        this.typeText(`#inputLogin`, `${Cypress.env('adminUser')}`)
    }

    /**
     * Types password
     * @returns {void}
     */
    typePass() {
        this.typePass(`#inputPassword`, `${Cypress.env('adminPass')}`)
    }

    /**
     * Clicks on Login button
     * @returns {void}
     */
    clickLoginBtn() {
        this.clickButtonByText('Login')
    }

    /**
     * Verifies partial URL
     * @returns {void}
     */
    verifyUrl() {
        this.verifyFullUrlWithBaseUrl('/cases')
    }

    /**
     * Verifies visibility of the logo
     * @returns {void}
     */
    verifyLogoVisibility() {
        this.elementIsVisible('.navbar-header .logo', 'Logo')
    }
}    
