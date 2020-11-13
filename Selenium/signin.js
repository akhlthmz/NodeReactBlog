const { By } = require("selenium-webdriver");
const BasePage = require("./base");

class SignInPage extends BasePage {
  async signIn() {
    await driver.findElement(By.id("usernameLogin")).sendKeys("thomas");
    await driver.findElement(By.id("passwordLogin")).sendKeys("123456");
    await driver.findElement(By.id("btnLogin")).click();
    await driver.sleep(3000);
    await driver.quit();
  }
}

module.exports = new SignInPage();
