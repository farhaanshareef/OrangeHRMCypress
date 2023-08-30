export class Login {

    username_locator= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_locator= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button= '.oxd-button'
    logo_image= '.oxd-brand-banner > img'
    
    setViewPort()
    {
        cy.viewport(1440, 768);
    }
    navigate()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Add assertions to check URL and title
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    }
    enterUsername(username)
    {
        //cy.get(this.input_username).type(username)

        // check if text enter correctly
        const expectedUsername = username;
        cy.get(this.username_locator)
        .type(username)
        .should('have.value', expectedUsername);
    }
    enterPassword(password)
    {
        cy.get(this.password_locator).type(password)
    }
    clickLoginbutton()
    {
        cy.get(this.login_button).should('exist').click();
    }
    checkErrorMessage()
    {
        // Check if the element is visible and contains the expected text
        cy.get('.oxd-alert-content > .oxd-text')
        .should('be.visible')
        .should(($element) => {
            const text = $element.text();
            if (text.includes('Invalid Credentials')) {
                throw new Error('Test failed: Element is visible and contains "Invalid Credentials"');
  }
});
    }
    verifyLogin()
    {
        cy.get(this.logo_image).should('exist');
    }
}