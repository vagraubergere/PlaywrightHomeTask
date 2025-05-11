#### Task 1

**Preconditions:** *(relevant for all tests)*
- Open website (https://auth-home-task.vercel.app/) and click "Go to registration" button

*Tests are written in "step - expected result" format*

**Test 1** - Positive scenario - All valid
1. Enter valid username - Valid username is entered (e.g. User1)
2. Enter valid email - Valid email is entered (e.g. user@user.com)
3. Enter valid password - Valid password is entered (e.g. Password1)
4. Enter same value as in "Password" field - Matching password is entered (e.g. Password1)
5. Press "Submit" button - User is redirected to the homepage; Success message "You have registered successfully!" displayed

**Test 2** - *Positive scenario - Short username
1. Enter shortest valid username (3 characters) - Valid username is entered (e.g. 123)
2. Enter valid email - Valid email is entered (e.g. user@user.com)
3. Enter valid password - Valid password is entered (e.g. Password1)
4. Enter same value as in "Password" field - Matching password is entered (e.g. Password1)
5. Press "Register" button - User is redirected to the homepage; Success message "You have registered successfully!" displayed

**Test 3** - Negative scenario - Empty form
1. Leave all the fields empty
2. Press "Register" button - User is NOT redirected to the homepage; *Success message "You have registered successfully!" IS NOT displayed*; All fields highlighted and error messages are shown for each field 

**Test 4** - Negative scenario - Invalid username
1. Enter INVALID username - Invalid username is entered (e.g <3 or >20 character, only special symbols)
2. Enter valid email - Valid email is entered (e.g. user@user.com)
3. Enter valid password - Valid password is entered (e.g. Password1)
4. Enter same value as in "Password" field - Matching password is entered (e.g. Password1)
5. Press "Register" button - User is NOT redirected to the homepage; *Success message "You have registered successfully!" IS NOT displayed*; Username field is highlighted and error message is displayed
________________

#### Task 2

**Bug 1** - No error messages for other fields when incorrectly filling email field

**Description:** No error message is shown for the each failed field when Email is filled incorrectly (e.g missing @smtn.com)

**Precondition:**
- User is one the registration website
- Registration form is opened

**Steps to reproduce:**
1. Enter "1" in every filed
2. Click "Register"

**Expected Result:** Clear error messages are displayed for each failed field
**Actual Result:** Tooltip for Email field is shown 
*Evidence*

**Version:** Google Chrome Version 135.0.7049.116
_____________________

**Bug 2** - Incorrect name for 'Submit' button

**Description:** 'Submit' button is named 'Register' in the form

**Precondition:**
- User is one the registration website
- Registration form is opened

**Steps to reproduce:**
1. Navigate to "Submit" button
 
**Expected Result:** Button name is "Submit"
**Actual Result:** Button name is "Register"
*Evidence*

**Version:** Google Chrome Version 135.0.7049.116
_____________

#### Task 4

- Restrict Username field to a specific amount of characters (not more than 20)
- Add tooltip/tips above or near each field with instructions
- Add real-time validation
- Highlight fields with errors (e.g. red frame, rec exclamation mark)
- Disable "Submit" button until all field pass validation
- Show/Hide password toggle
- Real-time validation/visual feedback for password field or password strength meter
- CapsLock alert
***- Register with SSO

#### Task 5

- Consider adding special characters to enhance password strength
***- Register with SSO
*****- Accessibility keyboard navigation
- Add id to elements 

#### Task 6
- Accessibility
- Load?

