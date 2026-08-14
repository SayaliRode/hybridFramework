import {test} from '@playwright/test'
import { general } from '../lib/general';

test('TC_LoginLogout', async({page})=>{
    const gen = new general(page);
    await gen.openApplication();
    await gen.login();
    await gen.logout();


});




