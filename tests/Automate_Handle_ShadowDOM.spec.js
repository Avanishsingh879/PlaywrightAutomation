//ShadowDOM 
//https://testautomationpractice.blogspot.com/

import { test } from '@playwright/test';

test('enter text in shadow DOM field', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const shadowHost = page.locator('#shadow_host');

  await shadowHost
    .locator('input[type="text"]')
    .fill('Test');

    await page.waitForTimeout(6000);

});