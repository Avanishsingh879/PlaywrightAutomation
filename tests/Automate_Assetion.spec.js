//Expect --Assetion
//Method// 
//use Playwright's built-in expect() assertions
//Common Playwright assertions
//toBeVisible   -// Element is visible
//toHaveText --Element contains text
//toContainText==Element contains partial text
//toHaveValue--Input has a value
//toBeChecked==Checkbox is checked
////toBeEnabled--Button is enabled
//toHaveAttribute==Element has an attribute
//toHaveURL--URL assertion
//Playwright's expect assertions automatically wait/retry for the expected condition, which is especially useful for dynamic web pages.


//await expect(page.locator('#login')).toBeVisible();

// Element contains text
//await expect(page.locator('.message')).toHaveText('Login successful');

// Element contains partial text
//await expect(page.locator('.message')).toContainText('successful');

// Input has a value
//await expect(page.locator('#username')).toHaveValue('admin');

// Checkbox is checked
//await expect(page.locator('#remember')).toBeChecked();

// Button is enabled
//await expect(page.locator('#submit')).toBeEnabled();

// Element has an attribute
//await expect(page.locator('input')).toHaveAttribute('type', 'text');

// URL assertion
//await expect(page).toHaveURL(/dashboard/);






