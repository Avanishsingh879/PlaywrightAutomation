// @ts-check
import { test, expect, chromium } from '@playwright/test';


test('have title', async ({ page }) => {
    
  await page.goto('http://localhost:8888/');
  //await expect(page).toHaveTitle(/Playwright/);
  await page.waitForLoadState();
  await page.locator("//input[@name='user_name']").fill('admin');


});

test('verify title', async ({ page }) => {
test.step("launch browser",async()=>{

  //const context=await browser.newContext();
 // const page=await context.newPage();
 
    
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
})
  
});

test('verify titlee', async ({  }) => {
  const browser=await chromium.launch();
  const context=await browser.newContext();
  const page=await context.newPage();
    
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

