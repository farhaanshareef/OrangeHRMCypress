export class AdminPage {

    input_username= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    input_password= ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button= '.oxd-button'
    logo_image= '.oxd-brand-banner > img'
    pim_button= ":nth-child(2) > .oxd-main-menu-item"
    admin_menu_tab= ":nth-child(1) > .oxd-main-menu-item"
    add_button= ".orangehrm-header-container > .oxd-button"
    userroledrpdown= ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    select_role= ".oxd-select-dropdown > :nth-child(2)"
    input_employee_name= ".oxd-autocomplete-text-input > input"
    select_employee= ".oxd-autocomplete-option:first"
    status_dropdown= ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    enabled_text= ".oxd-select-dropdown > :nth-child(2)"
    input_admin_username= ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    input_admin_password= ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    input_confirm_password= ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    save_button= ".oxd-button--secondary"

    clickadminTab()
    {
        cy.get(this.admin_menu_tab).should('exist').click()
    }
    clickAddButton()
    {
        cy.get(this.add_button).should('exist').click()
    }
    clickUserroleDropdown()
    {
        cy.get(this.userroledrpdown).should('exist').click()
    }
    clickAdmin()
    {
        cy.get(this.select_role).should('exist').click()

    }
    enter_employeeName(employeeName)
    {
        //cy.get(this.input_employee_name).type(employeeName)

        const expectedname = employeeName;
        cy.get(this.input_employee_name)
        .type(employeeName)
        .should('have.value', expectedname);
    }
    select_employeeName()
    {
        cy.get(this.select_employee).should('exist').click();

    }
    click_statusDropdown()
    {
        cy.get(this.status_dropdown).should('exist').click()
    }
    click_enabled()
    {
        cy.get(this.enabled_text).should('exist').click()

    }
    enter_admin_username(username)
    {
        //cy.get(this.input_admin_username).type(username)

        const expectedname = username;
        cy.get(this.input_admin_username)
        .type(username)
        .should('have.value', expectedname);
    }
    enter_admin_password(password)
    {
        cy.get(this.input_admin_password).type(password)
    }
    enter_confirm_password(confirmpassword)
    {
        cy.get(this.input_confirm_password).type(confirmpassword)
    }
    click_save_button()
    {
        cy.get(this.save_button).should('exist').click()
    }
}