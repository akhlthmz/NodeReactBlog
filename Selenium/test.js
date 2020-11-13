const { Driver } = require("selenium-webdriver/chrome");
const homePage = require("./home");
const signInPage = require("./signin");
const signUpPage = require("./signup");

homePage.navigateToTestRoom();
homePage.navigateToSignUp();
signUpPage.signUp();
