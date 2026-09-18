import{test,expact} from "@playwright/test"

test('verify Login Test',async({browser})=>{


    const context=await browser.newContext({

              viewport:{width:1980,height:1020}
    })

    const page=await context.newPage();
    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    await page.locator("//input[@name='Login']").click();
    console.log("Login Sucessfully");
    

      
})