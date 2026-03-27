const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

jest.setTimeout(60000);

test("should show all product details", async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:5173/product-details/69c648ca897c8444adc0a745");

    await driver.sleep(2000);

    const productNameElement = await driver.findElement({ id: "product-name" });
    const actualName = await productNameElement.getText();
    const expectedName = "Bluetooth Speaker";
    assert.strictEqual(actualName, expectedName, `Product name should be "${expectedName}" but got "${actualName}"`);
    console.log(`✓ Product Name: ${actualName}`);

    const productDescElement = await driver.findElement({ id: "product-description" });
    const actualDescription = await productDescElement.getText();
    const expectedDescription = "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures and home use.";
    assert.strictEqual(actualDescription, expectedDescription, `Product description should match expected text`);
    console.log(`✓ Product Description: ${actualDescription.substring(0, 50)}...`);

    const productPriceElement = await driver.findElement({ id: "product-price" });
    const actualPrice = await productPriceElement.getText();
    const expectedPrice = "$79.99";
    assert.strictEqual(actualPrice, expectedPrice, `Product price should be "${expectedPrice}" but got "${actualPrice}"`);
    console.log(`✓ Product Price: ${actualPrice}`);

    const productStockElement = await driver.findElement({ id: "product-stock" });
    const actualStock = await productStockElement.getText();
    const expectedStock = "In Stock (40 units)";
    assert.strictEqual(actualStock, expectedStock, `Product stock should be "${expectedStock}" but got "${actualStock}"`);
    console.log(`✓ Product Stock: ${actualStock}`);

    console.log("\n✅ All product details assertions passed!");
  } catch (error) {
    console.error("Test failed:", error);
    throw error;
  } finally {
    await driver.quit();
  }
});