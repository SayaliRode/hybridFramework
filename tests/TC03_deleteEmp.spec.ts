import {test} from "@playwright/test"
import { general } from "../lib/general";


test("TC03_deleteEmployeeInfo" , async({page})=>{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.deleteEmpinfo();
    await gen.logout();
})
    

/*
   test("TC03_deleteEmployeeInfo", async ({ page }) => {
    const gen = new general(page);

    await gen.openApplication();

    console.log("After open:", page.isClosed(), page.url());

    await gen.login();

    console.log("After login:", page.isClosed(), page.url());

    await gen.deleteEmpinfo();

    await gen.logout();

});   */