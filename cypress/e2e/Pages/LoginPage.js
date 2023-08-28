export class Login {

    username_locator= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_locator= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button= '.oxd-button'
    logo_image= '.oxd-brand-banner > img'
    
    navigate()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    enterUsername(username)
    {
        cy.get(this.username_locator).type(username)
    }
    enterPassword(password)
    {
        cy.get(this.password_locator).type(password)
    }
    clickLoginbutton()
    {
        cy.get(this.login_button).click()
    }
    verifyLogin()
    {
        cy.get(this.logo_image).should('exist');
    }
}