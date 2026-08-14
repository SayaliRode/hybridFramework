import {test} from "@playwright/test"
import { general } from "../lib/general";

test("TC02_AddNewEmployee" , async({page})=>
{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.waitTime();
    await gen.addNewEmp();
    await gen.logout();
})