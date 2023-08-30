/// < reference type="cypress" />
import 'cypress-file-upload'; // Import the plugin

import { Login } from "../Pages/LoginPage";
import { EmployeePage } from '../Pages/Employee_Page';

const login_page= new Login();
const employee_ = new EmployeePage();

describe('Add New Employee', () => {
    it('Add Employee', () => {

      login_page.setViewPort()

      login_page.navigate()

      login_page.enterUsername("Admin")

      login_page.enterPassword("admin123")

      login_page.clickLoginbutton()

      login_page.verifyLogin()

      employee_.clickPIMButton()

      employee_.clickAddButton()

      employee_.uploadImage()

      cy.wait(1000)

      employee_.enterFirstname("Farhan")

      employee_.entermiddlename("Malik")

      employee_.enterlastname("Tester")

      employee_.enterEmployeeID("035")
      
      employee_.clickSavebutton()

      cy.wait(7000)

      employee_.enterLicenseNumber("123456")

      employee_.enterLicenseExpirydate("1996-02-07")

      employee_.clickClosebutton()
      
      cy.wait(1000)

        //click on nationality dropdown

      employee_.clickNationalitydropdown()

      cy.wait(1000)

      employee_.selectElementDrpdown()

      employee_.clickMaritalDropdown()

      employee_.selectElementDrpdown()

      employee_.enterDOB("1996-02-07")

      employee_.clickClosebutton()

      //select gender
      employee_.selectGender()
            
      //click on save button

      employee_.clickSaveButton_()

      cy.wait(5000)

      //click on attachement add button
      //employee_.clickAttachment()

      //cy.wait(2000)

      // upload attachement
      //employee_.uploadFile()

      //click on the save button
      // employee_.clickSave_Button_()

    })
})