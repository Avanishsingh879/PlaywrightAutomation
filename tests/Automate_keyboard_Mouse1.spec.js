//await page.keyboard.press('Control+S'); // Like saving a file
import{test,expect} from "@playwright/test"

test('Handle Keyboard',async({browser})=>{

    const context=await browser.newContext({

        viewport:{width:1980,height:1020}
    })

    const page=await context.newPage();
    await page.goto("http://localhost:8888/");
    console.log("Launch Browser");
    await page.locator("//input[@name='user_name']").fill("admin");
    const pwd=await page.locator("//input[@name='user_password']");
    await pwd.click();
    await page.keyboard.type('admin');
    await page.waitForTimeout(1000);
    await page.locator("//input[@name='Login']").click();
    await page.waitForTimeout(1000);
})
