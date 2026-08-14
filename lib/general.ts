// To write all the methods/functions related to whole application

import { global } from "./global";

export class general extends global{
    //wait method
    public async waitTime(){
    await this.page.waitForTimeout(5000);
    }

    //Go to app url
    public async openApplication(){
        await this.page.goto(this.url);
        console.log("Application opened")
    }

    //Login to Application
    public async login(){
        await this.page.locator(this.txtUsername).fill(this.username);
        await this.page.locator(this.txtPassword).fill(this.password);
        await this.page.locator(this.loginButton).click();
        console.log("Logged into Application");
    }

    //Logout from App
    public async logout(){
        await this.page.getByText(this.logoutLink).click()
        console.log("Logged out");
    }

    public async addNewEmp(){
        const frame = this.page.frameLocator(this.frameEmpInfo);
        await frame.locator(this.button_addEmp).click();
        await frame.locator(this.text_empLastName).fill(this.empLastname);
        await frame.locator(this.text_empFirstName).fill(this.empFirstname);
        await frame.locator(this.button_saveEmpInfo).click();
        console.log("New Employee added");
    }
    
    public async deleteEmpinfo(){
        const frame = this.page.frameLocator(this.frameEmpInfo);
        await frame.locator(this.drop_empInfo).selectOption({index : 2});
        console.log("Firstname option selected from dropdown");
        await frame.locator(this.textEmpInfoSearchFor).fill(this.empInfoSearchFor);
        await frame.locator(this.button_searchEmpInfo).click();
        await frame.locator(this.checkbox_empInfo).check();
        await frame.locator(this.button_empInfoDelete).click();
        console.log("Employee details deleted successfully");
    }
}



