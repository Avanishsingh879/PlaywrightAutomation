//keyboard & Mouse   keyboard.press() method.
//Locator API  → interact with specific DOM elements
//Keyboard     → keyboard events
//Mouse        → coordinate-based mouse events//await page.mouse.click(300, 200);




import {test,expect} from "@playwright/test"

test('Handle Keyboard and Mouse',async({browser})=>{

    const context=await browser.newContext({
     
             viewport:{width:1980,height:1020}

    })

    const page= await context.newPage();
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    const pwd=page.locator("//input[@name='user_password']");
    await pwd.click();
    await page.keyboard.type('admin');
    await page.waitForTimeout(3000);


})

test('Handle Keyboard and Mouse1',async({browser})=>{

    const context=await browser.newContext({
     
             viewport:{width:1980,height:1020}

    })

    const page= await context.newPage();
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    const pwd=page.locator("//input[@name='user_password']");
    await pwd.click();
    await page.keyboard.type('admin');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);


})


test('Handle Keyboard and Mouse2',async({browser})=>{

    const context=await browser.newContext({
     
             viewport:{width:1980,height:1020}

    })

    const page= await context.newPage();
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    const pwd=page.locator("//input[@name='user_password']");
    await pwd.click();
    await page.keyboard.type('admin');
    const signIN=page.locator("//input[@name='Login']");
    await signIN.click();
    await page.waitForTimeout(3000);


})





