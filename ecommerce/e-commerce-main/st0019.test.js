const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

jest.setTimeout(60000);

test("should display category filter message when a category is selected", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:5173/products");
    
    await driver.findElement({ id: "categoryDropdown" }).click();   
    await driver.findElement({ id: "category-clothing" }).click();

    const messageDiv = await driver.findElement(By.id("category-filter-message"));
    const actualText = await messageDiv.getText();
    const expectedText = 'Filtering by "Clothing"';

    console.log(`Final assertion: expected "${expectedText}", got "${actualText}"`);
    assert.strictEqual(actualText, expectedText);
    
  } catch (error) {
    console.error("Test failed:", error);
    throw error;
  } finally {
    await driver.quit();
  }
});