const { Builder } = require("selenium-webdriver");
const assert = require("assert");

test("should show search results message", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:5173/products");
  try {
    await driver.findElement({ id: "searchInput" }).sendKeys("Speaker");

    await driver.wait(async () => {
      try {
        let welcomeElement = await driver.findElement({ id: "search-results-message" });
        let actualText = await welcomeElement.getText();
        return actualText === 'Showing results for "Speaker"';
      } catch (e) {
        return false;
      }
    }, 10000);

    let welcomeElement = await driver.findElement({ id: "search-results-message" });
    let actualText = await welcomeElement.getText();
    let expectedText = 'Showing results for "Speaker"';

    assert.strictEqual(actualText, expectedText);
    console.log("Test passed: Search results message displayed.");
  } finally {
    await driver.quit();
  }
});