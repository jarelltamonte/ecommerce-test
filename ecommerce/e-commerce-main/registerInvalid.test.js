const { Builder } = require("selenium-webdriver");
const assert = require("assert");

test("should navigate to the login page", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:5174/signup");
  try {
    // Add some debugging - check if elements exist
    console.log("Looking for firstName field...");
    let firstNameField = await driver.findElement({ id: "firstName" });
    console.log("Found firstName field");

    await firstNameField.sendKeys("John");
    await driver.findElement({ id: "lastName" }).sendKeys("Balitaan");
    await driver.findElement({ id: "username" }).sendKeys("Yuan");
    await driver.findElement({ id: "email" }).sendKeys("yuan@gmail.com");
    await driver.findElement({ id: "password" }).sendKeys("11111");
    await driver.findElement({ id: "confirmPassword" }).sendKeys("");

    console.log("All fields filled, looking for submit button...");
    let submitButton = await driver.findElement({ id: "signUpButton" });
    console.log("Found submit button, clicking...");

    // Click the submit button, not the message element
    await submitButton.click();
    console.log("Clicked submit button");

    // Wait for the error message to appear
    console.log("Waiting for error message...");
    await driver.wait(async () => {
      try {
        let errorElement = await driver.findElement({ id: "registerMessage" });
        let actualText = await errorElement.getText();
        console.log("Found message element with text:", actualText);
        return actualText.includes("Please review the form errors");
      } catch (e) {
        console.log("Message element not found yet:", e.message);
        return false;
      }
    }, 10000); // Increased timeout

    console.log("Error message found, checking content...");
    let errorElement = await driver.findElement({ id: "registerMessage" });
    let actualText = await errorElement.getText();
    let expectedText = "🚫 Please review the form errors.";

    console.log("Actual text:", actualText);
    console.log("Expected text:", expectedText);

    assert.strictEqual(actualText, expectedText);
  } finally {
    await driver.quit();
  }
}, 15000); // Increased test timeout