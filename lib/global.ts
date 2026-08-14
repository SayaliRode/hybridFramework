//To provide Test data/object elements related to whole application

import { Page } from '@playwright/test';

export class global {
    constructor(public page:Page){
    this.page = page
    }

    //Test data

    public url : string = "https://ctcorphyd.com/SureshIT/login.php";
    public username : string = "sureshit";
    public password : string = "sureshit";
    public empFirstname : string = "Jonova";
    public empLastname : string = "Dcruz";
    public empInfoSearchFor : string = "Jonova";


    //objects/elements

    public txtUsername = "//input[@name='txtUserName']";
    public txtPassword = "//input[@name='txtPassword']";
    public loginButton = "//input[@name='Submit']";
    public logoutLink  = "Logout";
    public frameEmpInfo = "//iframe[@id='rightMenu']";
    public button_addEmp = "//input[@value='Add']";
    public text_empFirstName = "//input[@name='txtEmpFirstName']";
    public text_empLastName = "//input[@name='txtEmpLastName']";
    public button_saveEmpInfo = "//input[@value='Save']";
    public drop_empInfo = "//select[@id='loc_code']";
    public textEmpInfoSearchFor = "//input[@id='loc_name']";
    public button_searchEmpInfo = "//input[@value='Search']";
    public checkbox_empInfo = "//input[@value='1284']";
    public button_empInfoDelete = "//input[@value='Delete']";



}