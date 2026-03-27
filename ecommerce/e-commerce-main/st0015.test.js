const { Builder } = require("selenium-webdriver");
const assert = require("assert");

test("should show password mismatch error", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:5173/signup");
  try {
    await driver.findElement({ id: "firstName" }).sendKeys("John");
    await driver.findElement({ id: "lastName" }).sendKeys("Balitaan");
    await driver.findElement({ id: "username" }).sendKeys("Yuan");
    await driver.findElement({ id: "email" }).sendKeys("yuan@gmail.com");
    await driver.findElement({ id: "password" }).sendKeys("Password123"); 
    await driver.findElement({ id: "confirmPassword" }).sendKeys("DifferentPassword123");

    await driver.findElement({ id: "signUpButton" }).click();

    await driver.wait(async () => {
      try {
        let errorElement = await driver.findElement({ id: "confirmPasswordError" });
        let actualText = await errorElement.getText();
        return actualText.includes("Passwords do not match");
      } catch (e) {
        return false;
      }
    }, 5000);

    let errorElement = await driver.findElement({ id: "confirmPasswordError" });
    let actualText = await errorElement.getText();
    let expectedText = "Passwords do not match.";

    assert.strictEqual(actualText, expectedText);

    console.log("Test passed: Password mismatch error displayed.");
  } finally {
    await driver.quit();
  }
});