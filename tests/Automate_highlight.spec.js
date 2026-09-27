import{test,expect} from "@playwright/test"

     test('Verify Highlight',async({browser})=>{
    
     const context=await browser.newContext({

        viewport:{width:1980,height:1020}
     })

     const page= await context.newPage();
     await page.goto("http://localhost:8888/");
     console.log("Launch Browser");
     await page.waitForTimeout(1000);
     await page.locator("//input[@name='user_name']").fill("admin");
     await page.locator("//input[@name='user_password']").fill("admin");
     await page.locator("//input[@name='Login']").highlight();
     await page.waitForTimeout(3000);
      
})