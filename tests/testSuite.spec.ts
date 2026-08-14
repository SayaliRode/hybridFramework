import {test} from "@playwright/test"
import { general } from "../lib/general";

test.describe("TC_TestSuit for specific num of TCs" , ()=>{

test('TC_LoginLogout', async({page})=>{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.logout();
});

test("TC02_AddNewEmployee" , async({page})=>
{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.waitTime();
    await gen.addNewEmp();
    await gen.logout();
});

});