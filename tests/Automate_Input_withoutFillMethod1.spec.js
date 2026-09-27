import{test,expect} from "@playwright/test"

test('Verify Password field',async({browser})=>{

        const context=await browser.newContext({

            viewport:{width:1980,height:1020}
        })

        const page=await context.newPage();
        await page.goto("http://localhost:8888/");
        console.log("Browser Launch");
        await page.locator("//input[@name='user_name']").fill("admin");
        await page.locator("//input[@name='user_password']").pressSequentially('admin',{delay:200})
        await page.waitForTimeout(2000);
})      

