const { By, until } = require("selenium-webdriver");
const BasePage = require("./base");

class SignUpPage extends BasePage {
  async signUp() {
    await driver.sleep(2000);
    await driver.findElement(By.id("usernameSignup")).sendKeys("thomas");
    await driver.findElement(By.id("passwordSignup")).sendKeys("23457809");
    await driver.findElement(By.id("btnSignup")).click();
    await driver.sleep(3000);
    await driver.quit();
  }
}

module.exports = new SignUpPage();
