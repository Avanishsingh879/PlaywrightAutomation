//Automate Drag and Drop 
const { test, expect } = require("@playwright/test");

test("Drag and Drop", async ({ page }) => {
  // Navigate to the target webpage with drag-and-drop functionality
  await page.goto("https://testautomationpractice.blogspot.com/");
  
  // Locate the draggable element
  const draggable = await page.locator("#draggable");
  
  // Locate the droppable area
  const droppable = await page.locator("#droppable");
  
  // Perform the drag-and-drop action
  await draggable.dragTo(droppable);
  
  // Wait for a moment to observe the result
  await page.waitForTimeout(5000);
});