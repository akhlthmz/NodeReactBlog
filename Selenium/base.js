const { By, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();

class BasePage {
  constructor() {
    global.driver = driver;
  }
  async navigateToTestRoom() {
    await driver.get("http://localhost:3000/");
  }
}

module.exports = BasePage;
