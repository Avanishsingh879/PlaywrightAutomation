import{test,expect} from "@playwright/test"

test('Verify Login Test',async({browser})=>{

    const context=await browser.newContext({

        viewport:{width:1980,height:1020}
    })

    const page=await context.newPage();
    await page.goto("http://localhost:8888/");
    console.log("Launch Browser");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");
})

test('Verify Title',async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("title Verifyed");



})

test('Verify Hover',async({page})=>{

    await page.goto("http://localhost:8888/");
    console.log("Launch Browser");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");
    await page.waitForTimeout(1000);
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    console.log("Title Verifyed");
    await page.locator("//a[text()='Marketing']").hover();
    page.waitForTimeout(1000);
})

test('Verify AllCheckboxes',async({page})=>{

    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    await page.waitForTimeout(1000);
    console.log("Login Sucessfully");
    await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    await page.locator("//a[text()='Sales']").hover();
    await page.waitForTimeout(1000);
    const acc=await page.locator("//div[@id='Sales_sub']//a[text()='Accounts']");
    await acc.click();
    await page.screenshot({path:'./Screenshots/tt.png'});
    console.log("Takes Screenshot");
    await page.waitForTimeout(1000);

    const Allchk=await page.locator("//input[@name='selected_id']");

    for(let i=0;i< await Allchk.count();i++){

        await Allchk.nth(i).click();
        await page.waitForTimeout(1000);
    }

    await page.waitForTimeout(1000);


})

    test('Verify Multiple window',async({page})=>{

        await page.goto("http://localhost:8888/");
        await page.locator("//input[@name='user_name']").fill("admin");
        await page.locator("//input[@name='user_password']").fill("admin");
        await page.locator("//input[@name='Login']").click();
        await page.waitForTimeout(1000);
        console.log("Login Sucssfully");
        await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
        await page.locator("//a[text()='Support']").hover();
        await page.waitForTimeout(1000);
        await page.locator("//div[@id='Sales_sub']//a[text()='Contacts']").click();
        await page.waitForTimeout(1000);
        await page.locator("//input[@id='72']").click();
        const[newPage]=await Promise.all([page.waitForEvent('popup'),page.locator("//input[@value='Send Mail']").first().click()])
        await newPage.waitForTimeout(1000);
        await newPage.screenshot({path:'./Screenshots/chk.png'});
        await newPage.locator("//input[@name='subject']").fill("Test");
        console.log("Test entered");

    })

    test('Verify AllLinks',async({page})=>{

        await page.goto("http://localhost:8888/");
        await page.locator("//input[@name='user_name']").fill("admin");
        await page.locator("//input[@name='user_password']").fill("admin");
        await page.locator("//input[@name='Login']").click();
        await page.waitForTimeout(1000);
        await page.locator("//a[text()='Inventory']").click();
        await page.waitForTimeout(1000);
        const AllLinks=page.locator("//td[@class='searchAlph']");

        for(let i=0;i<await AllLinks.count();i++){

            await AllLinks.nth(i).click();
            await page.waitForTimeout(1000);
        }
    })


    test('Verify Listbox',async({page})=>{

        await page.goto("http://localhost:8888/");
        await page.locator("//input[@name='user_name']").fill(1000);
        await page.locator("//input[@name='user_password']").fill(1000);
        await page.locator("//input[@name='Login']").click();
        await page.waitForTimeout(1000);
        console.log("Login Sucessfully");
        await page.locator("//a[text()='Sales']").click();
        await page.waitForTimeout(1000);
        const lists=await page.locator("//select[@id='bas_searchfield']").first();
        await lists.selectOption("Lead No");
        console.log("List Verifyed");

    })


    

















