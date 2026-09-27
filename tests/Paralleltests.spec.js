import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test('test 1', async ({ page }) => {
  await page.goto('https://example.com');
  // ...
});

test('test 2', async ({ page }) => {
  await page.goto('https://example.com');
  // ...
});

test('test 3', async ({ page }) => {
  await page.goto('https://example.com');
  // ...
});

