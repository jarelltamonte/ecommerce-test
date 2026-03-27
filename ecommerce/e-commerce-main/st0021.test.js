const { Builder } = require("selenium-webdriver");
const assert = require("assert");

test("should log out successfully", async () => {
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

    await driver.findElement({ id: "logoutButton" }).click();

    let currentUrl = await driver.getCurrentUrl();
    let expectedUrl = "http://localhost:5173/";
    assert.strictEqual(currentUrl, expectedUrl, `Expected to be logged out on home page but was on ${currentUrl}`);
    console.log("Test passed: Successfully logged out.");
  } finally {
    await driver.quit();
  }
});