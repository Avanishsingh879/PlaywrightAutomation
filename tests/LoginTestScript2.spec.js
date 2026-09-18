import{test,expact} from "@playwright/test"

test('Verify Frame',async({browser})=>{

    const context=await browser.newContext({
     
        viewport:{width:1980,height:1020}

    })

    const page=await context.newPage();

    await page.goto("https://www.w3schools.com/js/");
    await page.screenshot({path: '/Screenshots/testdata.png'});
    console.log("Take Screenshot");
    await page.waitForTimeout(1000);

    const ScrolldownBtn=await page.locator("//a[text()='Try it Yourself »']");
    await ScrolldownBtn.scrollIntoViewIfNeeded();
    await ScrolldownBtn.click();
    await page.waitForTimeout(2000);
    
   const[newPage]=await Promise.all([context.waitForEvent("page"),page.locator("//a[text()='Try it Yourself »']").click()])

   const frame = newPage.frameLocator('iframe[name="iframeResult"]');
   await frame.locator("//h1[text()='My First JavaScript']//following-sibling::button").click();

})






