import{test,except} from '@playwright/test'

test('Verify Hover',async({browser})=>{

const context=await browser.newContext({

 viewport:{ width:1980,height:1080}
});

    const page=await context.newPage();
    await page.goto('https://demoqa.com/browser-windows');
    await page.screenshot({ path:'./TestFailData/Test.png'});
    ///////////scroll////////////
    await page.locator("//button[@id='windowButton']").scrollIntoViewIfNeeded();///scrolling
    const pagePromise = context.waitForEvent('page');

    await page.locator("//button[@id='windowButton']").click();

    await page.waitForTimeout(8000);
   const newpage= await pagePromise;
   const textLocator =await newpage.locator("//h1[text()='This is a sample page']");
   
   console.log("Test:"+ textLocator);








});

