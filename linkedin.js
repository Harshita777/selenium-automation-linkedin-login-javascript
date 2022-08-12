const { By, Key, Builder } = require("selenium-webdriver");
require('chromedriver')

async function example() {
  var lknUsername = "*****@gmail.com";
  var lknPassword = "*****";
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.linkedin.com/login");
  driver.sleep(4000);

  await driver.findElement(By.id("username")).sendKeys(lknUsername);
  driver.sleep(2500);

  await driver.findElement(By.id("password")).sendKeys(lknPassword, Key.RETURN);
  driver.sleep(6000);
  
  console.log("logging in");
  await driver.quit()
}

example();
