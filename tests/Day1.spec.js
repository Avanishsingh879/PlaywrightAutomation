import{test,expect} from "@playwright/test"

test('Verify Login Page',async({browser})=>{

        const context=await browser.newContext({

            viewport:{width:1980,height:1020}
        })

        const page=await context.newPage();
        await page.goto("http://localhost:8888/");
        page.screenshot({path:''})



})

