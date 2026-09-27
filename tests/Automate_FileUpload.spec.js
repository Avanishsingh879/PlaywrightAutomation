//Fileupload
//setInputFiles

import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload a file', async ({ browser }) => {

          const context=await browser.newContext({

            viewport:{width:1980,height:1020}
          })

        const page=await context.newPage();
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.waitForTimeout(1000);
        const filePath = path.join(__dirname, '../Screenshots/sample.txt');
        const scroll=await page.locator("//input[@id='multipleFilesInput']");
        await scroll.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
        await page.locator('#singleFileInput').setInputFiles(filePath);
        await page.waitForTimeout(2000);

});