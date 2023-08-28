/// < reference type="cypress" />

describe('Add Admin', () => {
    it('Add Admin', () => {
    
      //visit the application
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      //enter the username
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

      //enter the password
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

      //clicking om login button
      cy.get('.oxd-button').click()

      //logo image
      cy.get('.oxd-brand-banner > img').should('exist');

      //click on admin menu tab
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()

      //click on add button 
      cy.get('.orangehrm-header-container > .oxd-button').click()

      //click on user role dropdown
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()

      //click on admin 
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()

      //enter employee name
      cy.get('.oxd-autocomplete-text-input > input').type('Fiona  Grace')

      cy.wait(3000)

      //selecting name from dropdown list
      cy.get('.oxd-autocomplete-option:first').click();

      //click on status
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()

      //click on enabled
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()

      //enter username
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Farhan1')

      //enter password
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Farhan@1234')

      //confirm password
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Farhan@1234')

      //click on save button
      cy.get('.oxd-button--secondary').click()
    })
})