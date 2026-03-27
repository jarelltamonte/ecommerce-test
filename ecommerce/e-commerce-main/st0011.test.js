const { Builder } = require("selenium-webdriver");
const assert = require("assert");

test("should show password error", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:5173/login");
  try {
    await driver.findElement({ id: "email" }).sendKeys("random@gmail.com");
    await driver.findElement({ id: "password" }).sendKeys("");

    await driver.findElement({ id: "loginButtonclick" }).click();

    await driver.wait(async () => {
      try {
        let welcomeElement = await driver.findElement({ id: "password-error" });
        let actualText = await welcomeElement.getText();
        return actualText === "Password is required.";
      } catch (e) {
        return false;
      }
    }, 10000);

    let welcomeElement = await driver.findElement({ id: "password-error" });
    let actualText = await welcomeElement.getText();
    let expectedText = "Password is required.";

    assert.strictEqual(actualText, expectedText);
    console.log("Test passed: Error message 'Password is required.' displayed on login page.");
  } finally {
    await driver.quit();
  }
});