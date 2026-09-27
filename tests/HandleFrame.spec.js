////https://www.w3schools.com/js/

/////Hamdled Frame/////

import{test,expect} from "@playwright/test"

test("Verify Frame",async({browser})=>{

         const context=await browser.newContext({

          viewport:{width:1980,height:1020}
         })

         const page=await context.newPage();
         await page.goto("https://www.w3schools.com/js/");
         console.log("Launch Browser");
         await page.waitForTimeout(1000);
         ///////ScrollDown/////////////////////
         const tryButton=await page.locator("//a[text()='Try it Yourself »']");
         const scrolldown=tryButton.scrollIntoViewIfNeeded();
         ///////////Handle Multiple window////////////////////
        const[newPage]=await Promise.all([context.waitForEvent('page'),page.locator("//a[text()='Try it Yourself »']").click()])
        await newPage.waitForTimeout(1000);
        const frame=newPage.frameLocator('iframe[name="iframeResult"]');
        await frame.locator("//h1[text()='My First JavaScript']//following-sibling::button").click();
        await frame.waitForTimeout(1000);
        
})

