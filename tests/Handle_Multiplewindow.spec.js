import{test,expect}from '@playwright/test'
import { log } from 'console';
import { promises } from 'dns';

test('verifyTest', async ({ browser }) => {
//Set viewport zise.
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

   const page=await context.newPage();
   await page.goto('https://demoqa.com/browser-windows');
   await page.waitForTimeout(1000); 
   const[newPage]=await Promise.all([context.waitForEvent("page"),page.locator("//button[@id='windowButton']").click()])
   const text=await newPage.locator("//h1[text()='This is a sample page']").textContent();
   console.log(text);
   await newPage.waitForTimeout(1000);

    //Browser//BrowserContext/Page/Pages
    //Promise--
});
