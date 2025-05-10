import {expect, test} from '@playwright/test'

const locators = require('./locators');

var username = "User1"
var email = "user@user.com"
var password = "Password1"
var homePage = "Welcome to the Home Page!"
var successTxt = "You have registered successfully!"

test('Login with valid inputs', async ({ page }) => {

  await page.goto('https://auth-home-task.vercel.app/')

  //Go to registration form
  await page.click(locators.registrationFormBtn)

  //Enter valid username
  await page.fill(locators.usernameField, username)

  //Enter valid email
  await page.fill(locators.emailField, email)

  //Enter valid password
  await page.fill(locators.passwordField, password)

  //Enter matching password
  await page.fill(locators.confirmPasswordField, password)

  //Submit the form
  await page.click(locators.submitBtn)

  //Verify Home page
  await expect(page.locator(locators.homePageTitle)).toHaveText(homePage)
 
  //Verify success message
  await expect(page.locator(locators.registrationSuccessMsg)).toHaveText(successTxt)

  //Add lcoators / variables at the top (or separate file)
  //Play games with me bitch

  //Close browser after test
  await page.close();
})
