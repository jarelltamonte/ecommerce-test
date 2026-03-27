const { Builder } = require("selenium-webdriver");
const assert = require("assert");

test("should show successful login and welcome message", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:5173/login");
  try {
    await driver.findElement({ id: "email" }).sendKeys("jarelltamonte@gmail.com");
    await driver.findElement({ id: "password" }).sendKeys("Jarell12");

    await driver.findElement({ id: "loginButtonclick" }).click();

    await driver.wait(async () => {
      let currentUrl = await driver.getCurrentUrl();
      return currentUrl === "http://localhost:5173/";
    }, 15000);

    await driver.wait(async () => {
      try {
        let welcomeElement = await driver.findElement({ id: "welcome-user" });
        let actualText = await welcomeElement.getText();
        return actualText === "Welcome, Jarell";
      } catch (e) {
        return false;
      }
    }, 10000);

    let welcomeElement = await driver.findElement({ id: "welcome-user" });
    let actualText = await welcomeElement.getText();
    let expectedText = "Welcome, Jarell";

    assert.strictEqual(actualText, expectedText);
    console.log("Test passed: Welcome message 'Welcome, Jarell' displayed on home page.");
  } finally {
    await driver.quit();
  }
});