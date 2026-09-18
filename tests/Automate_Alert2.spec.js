import{test,expect} from "@playwright/test"

test('verify Alerts',async({browser})=>{

          
       const context=await browser.newContext({

        viewport:{width:1980,height:1020}

        })

        const page=await context.newPage();
        await page.goto("https://demoqa.com/browser-windows");
        console.log("Browser launch")
        await page.waitForTimeout(2000);
        await page.locator("//span[text()='Alerts']").click();
        await page.waitForTimeout(5000);
        await page.locator("//button[@id='alertButton']").click();
        await page.waitForTimeout(2000);
        console.log("Alert open");

        await page.on('Dialog',async dialog =>{

         console.log("Dailog message",dialog.message());
         await dialog.dismiss();
         

        })


})