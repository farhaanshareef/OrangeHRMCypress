/// < reference type="cypress" />
import 'cypress-file-upload'; // Import the plugin


describe('Add New Employee', () => {
    it('Add Employee', () => {

      cy.viewport(1440, 768);
    
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

      //click on PIM menu tab
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      
      //click on add button 
      cy.get('.orangehrm-header-container > .oxd-button').click()

      const p = '/Users/mac/Downloads/Cypress/Project1/cypress/fixtures/test.png'

      // Get the file input element
    cy.get('.employee-image').then(input => {
      // Load the image file as base64 data
      cy.fixture('test.png', 'base64').then(fileContent => {
        // Set the value of the file input element
        const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/png');
        const testFile = new File([blob], 'test.png', { type: 'image/png' });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        input[0].files = dataTransfer.files;

        // Trigger a change event on the file input
        cy.wrap(input).trigger('change', { force: true });
      });
    });

      cy.wait(1000)

      //enter firstname
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Testing1')

      //enter middle name
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('User')

      //enter last name
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('123')

      //enter employee ID
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('152')
      
      //click on save button
      cy.get('.oxd-button--secondary').click()

      cy.wait(7000)

      //driver license number
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456')

      //license expriy date
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('1996-02-07')

      cy.get('.--close').click()

      cy.wait(1000)

      //click on nationality dropdown
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()

      cy.wait(1000)

      cy.get('.oxd-select-dropdown > :nth-child(2)').click()

      //click on marital status
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
      .eq(0) // Index 0 corresponds to the first element
      .click();
    
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()

      //enter dob
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('1996-02-07')

      cy.get('.--close').click()

      //select gender
      // Find the Male radio button within the specific hierarchy and click it
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').then(($span) => {
        $span[0].click(); // Click using JavaScript
      });
            
      //click on save button
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.wait(5000)

      //click on attachement add button
      cy.get('.orangehrm-action-header > .oxd-button').click()

      cy.wait(1000)

      // Assuming your file is located at 'path/to/your/file.txt'
      cy.get('.oxd-file-input').attachFile('test.png');

      //click on the save button
      cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click()


    })
})