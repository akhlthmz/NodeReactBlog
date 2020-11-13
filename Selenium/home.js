const { By } = require("selenium-webdriver");
const BasePage = require("./base");

class HomePage extends BasePage {
  async navigateToSignIn() {
    await driver.findElement(By.id("signIn")).click();
  }

  async navigateToSignUp() {
    await driver.findElement(By.id("signUp")).click();
  }
}

module.exports = new HomePage();
