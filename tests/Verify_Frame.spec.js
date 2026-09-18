//https://www.w3schools.com/js/

import{test,expect} from "@playwright/test"

test('Verify frame',async({browser})=>{

        const context=await browser.newContext({

            viewport:{width:1980,height:1020}
        })

        const page=await context.newPage();
        await page.goto("https://www.w3schools.com/js/");
        console.log("Launch Browser");
        await page.waitForTimeout(1000);
        const btn =await page.locator("//a[text()='Try it Yourself »']");
        await btn.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
        await btn.click();
        await page.screenshot({path: './Screenshots/page.png'});
        const[newPage]=await Promise.all([context.waitForEvent('page'),page.locator("//a[text()='Try it Yourself »']").click()])
        const newframw=await newPage.frameLocator("iframe[name='iframeResult']");
        await page.waitForTimeout(1000);
        await newframw.locator("//h1[text()='My First JavaScript']//following-sibling::button").click();
        


})







