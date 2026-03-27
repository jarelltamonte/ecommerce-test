const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

jest.setTimeout(60000);

test("should display sort message when ascending is selected", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:5173/products");
    
    await driver.findElement({ id: "sort" }).click();
    await driver.findElement(By.id("price_asce")).click();

    const messageDiv = await driver.findElement(By.id("sort-message"));
    const actualText = await messageDiv.getText();
    const expectedText = "Ascending price view is showing";

    console.log(`Final assertion: expected "${expectedText}", got "${actualText}"`);
    assert.strictEqual(actualText, expectedText);
    
  } catch (error) {
    console.error("Test failed:", error);
    throw error;
  } finally {
    await driver.quit();
  }
});