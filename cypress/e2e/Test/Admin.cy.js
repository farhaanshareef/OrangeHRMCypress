/// < reference type="cypress" />

import { AdminPage } from "../Pages/Admin_Page";
import { Login } from "../Pages/LoginPage";

const login_Page = new Login();

const admin_page = new AdminPage();

describe('Add Admin', () => {
    it('Add Admin', () => {
    
      login_Page.navigate()

      login_Page.enterUsername("Admin")

      login_Page.enterPassword("admin123")

      login_Page.clickLoginbutton()
      
      login_Page.verifyLogin()

      //click on admin menu tab
      admin_page.clickadminTab()

      //click on add button 
      admin_page.clickAddButton()

      //click on user role dropdown
      admin_page.clickUserroleDropdown()

      //click on admin 
      admin_page.clickAdmin()

      //enter employee name
      admin_page.enter_employeeName("Fiona  Grace")

      cy.wait(3000)

      //selecting name from dropdown list
      admin_page.select_employeeName()

      //click on status
      admin_page.click_statusDropdown()

      //click on enabled
      admin_page.click_enabled()

      //enter username
      admin_page.enter_admin_username("Farhan2")
      //enter password
      admin_page.enter_admin_password("Farhan@1234")

      //confirm password
      admin_page.enter_confirm_password("Farhan@1234")

      //click on save button
      admin_page.click_save_button()
    })
})