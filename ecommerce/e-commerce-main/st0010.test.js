const { Builder } = require("selenium-webdriver");
const assert = require("assert");

test("should show unsuccessful login and error message", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:5173/login");
  try {
    await driver.findElement({ id: "email" }).sendKeys("random@gmail.com");
    await driver.findElement({ id: "password" }).sendKeys("Jarell12");

    await driver.findElement({ id: "loginButtonclick" }).click();

    await driver.wait(async () => {
      try {
        let welcomeElement = await driver.findElement({ id: "error-login" });
        let actualText = await welcomeElement.getText();
        return actualText === "⚠️ Could not connect to the server. Check network.";
      } catch (e) {
        return false;
      }
    }, 10000);

    let welcomeElement = await driver.findElement({ id: "error-login" });
    let actualText = await welcomeElement.getText();
    let expectedText = "⚠️ Could not connect to the server. Check network.";

    assert.strictEqual(actualText, expectedText);
    console.log("Test passed: Error message '⚠️ Could not connect to the server. Check network.' displayed on login page.");
  } finally {
    await driver.quit();
  }
});