import Utils from '../utils'

/**
 * @author Zahin Ahad
*/

export default class Logo extends Utils{

    /**
     * Verifies visibility of the logo
     * @returns {void}
     */
    verifyLogoVisibility() {
        this.elementIsVisible('.navbar-header .logo', 'Logo')
    }
}    
