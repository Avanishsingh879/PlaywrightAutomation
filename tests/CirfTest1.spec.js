import{test,expect} from "@playwright/test"

test('Verify Login Test',async({browser})=>{

        const context=await browser.newContext({

            viewport:{width:1980,height:1020}
         })

        const page= await context.newPage();
        await page.goto("http://localhost:8888/");
        await page.locator("//input[@name='user_name']").fill("admin");
        await page.locator("//input[@name='user_password']").fill("admin");
        await page.locator("//input[@name='Login']").click();
        console.log("Login Sucessfully");
        await page.waitForTimeout(1000);

})

test('Verify Hover',async({page})=>{

      await page.goto("http://localhost:8888/");
      await page.locator("//input[@name='user_name']").fill("admin");
      await page.locator("//input[@name='user_password']").fill("admin");
      await page.locator("//input[@name='Login']").click();
      console.log("Login Sucessfully");
      page.waitForTimeout(1000);
      await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
      console.log("Title Verifyed");
      await page.locator("//a[text()='Marketing']").hover();
      await page.waitForTimeout(1000);

})

test('verify AllCheck boxes',async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    await page.locator("//a[text()='Support']").hover();
    await page.waitForTimeout(1000);
    await page.locator("//div[@id='Support_sub']//a[text()='Accounts']").click();
    await page.waitForTimeout(1000);
    const AllCheck=page.locator("//input[@name='selected_id']");

    for(let i=0;i< await AllCheck.count();i++){

        await AllCheck.nth(i).click();
        await page.waitForTimeout(1000);

    }

    await page.waitForTimeout(1000);

})

test('verify Multile window',async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    await page.locator("//a[text()='Sales']").hover();
    await page.waitForTimeout(1000);
    const Cont=await page.locator("//div[@id='Sales_sub']//a[text()='Contacts']");
    await Cont.click();
    await page.waitForTimeout(1000);
    await page.locator("//input[@id='72']").check();
    await page.waitForTimeout(1000);
    const[newPage]=await Promise.all([page.waitForEvent('popup'),page.locator("//input[@value='Send Mail']").first().click()])

    await newPage.waitForTimeout(1000);
    const sub=await newPage.locator("//input[@name='subject']");
    await sub.fill("Test");
    console.log("Test Verifyed");
})