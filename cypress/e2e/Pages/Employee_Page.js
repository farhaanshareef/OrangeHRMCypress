export class EmployeePage {

    input_username= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    input_password= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button= '.oxd-button'
    logo_image= '.oxd-brand-banner > img'
    pim_button= ":nth-child(2) > .oxd-main-menu-item"
    add_employee_button= ".orangehrm-header-container > .oxd-button"
    image_input= ".employee-image"
    input_firstname= ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    input_middlename= ":nth-child(2) > :nth-child(2) > .oxd-input"
    input_lastname= ":nth-child(3) > :nth-child(2) > .oxd-input"
    input_employeeID= ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    save_button= ".oxd-button--secondary"
    input_license_number= ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    close_button= ".--close"
    nationality_Dropdown= ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    select_value_nationality_drpdwn= ".oxd-select-dropdown > :nth-child(2)"
    maritaldropdown= ":nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    click_dob= ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    gender= ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input"
    savebutton= ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    attachmentbutton= ".orangehrm-action-header > .oxd-button"
    uploadattachment= 'input[type="file"]'
    save_button_= ".orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary"

    setViewPort()
    {
        cy.viewport(1440, 768);
    }
    
    navigate()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    enterUsername(username)
    {
        cy.get(this.input_username).type(username)
    }
    enterPassword(password)
    {
        cy.get(this.input_password).type(password)
    }
    clickLoginbutton()
    {
        cy.get(this.login_button).click()
    }
    verifyLogin()
    {
        cy.get(this.logo_image).should('exist');
    }
    clickPIMButton()
    {
        cy.get(this.pim_button).click()
    }
    clickAddButton()
    {
        cy.get(this.add_employee_button).click()
    }
    uploadImage()
    {
        const p = '/Users/mac/Downloads/Cypress/Project1/cypress/fixtures/test.png'

        // Get the file input element
        cy.get(this.image_input).then(input => {
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
    }
    enterFirstname(firstname)
    {
        cy.get(this.input_firstname).type(firstname)


    }
    entermiddlename(middlename)
    {
        cy.get(this.input_middlename).type(middlename)

    }
    enterlastname(lastname)
    {
        cy.get(this.input_lastname).type(lastname)
    }
    enterEmployeeID(ID)
    {
        cy.get(this.input_employeeID).type(ID)
    }
    clickSavebutton()
    {
        cy.get(this.save_button).click()
    }
    enterLicenseNumber(licenseno)
    {
        cy.get(this.input_license_number).type(licenseno)
    }
    enterLicenseExpirydate(expirydate)
    {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('1996-02-07')
    }
    clickClosebutton()
    {
        cy.get(this.close_button).click()
    }
    clickNationalitydropdown()
    {
        cy.get(this.nationality_Dropdown).click()
    }
    selectElementDrpdown()
    {
        cy.get(this.select_value_nationality_drpdwn).click()
    }
    clickMaritalDropdown()
    {
      cy.get(this.maritaldropdown)
      .eq(0) // Index 0 corresponds to the first element
      .click();
    }
    enterDOB(dob)
    {
        cy.get(this.click_dob).type(dob)
    }
    selectGender()
    {
        cy.get(this.gender).then(($span) => {
            $span[0].click(); // Click using JavaScript
          });
    }
    clickSaveButton_()
    {
        cy.get(this.savebutton).click()
    }
    clickAttachment()
    {
        cy.get(this.attachmentbutton).click()
    }
    uploadFile()
    {
        cy.get(this.uploadattachment).attachFile('test.png');
    }
    clickSave_Button_()
    {
        cy.get(this.save_button_).click()
    }
}