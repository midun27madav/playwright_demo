 import {test, expect} from "@playwright/test"

import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"


test('test', async ({page})=>{
    //Login
    const login=new LoginPage(page)
    await login.openLoginPage()
    await login.login('pavanol','test@123')
    await page.waitForTimeout(4000)

    //HomePage
    const home = new HomePage(page)
    await home.addProductToCart("Iphone 6 32gb")
    await home.gotoCart()

    //CartPage

})