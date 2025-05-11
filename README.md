#### Task 1

**Preconditions:** *(relevant for all tests)*
- Open website (https://auth-home-task.vercel.app/) and click "Go to registration" button

*Tests are written in "step - expected result" format*

**Test 1** - Positive scenario - All valid
1. Enter valid username - Valid username is entered (e.g. User1)
2. Enter valid email - Valid email is entered (e.g. user@user.com)
3. Enter valid password - Valid password is entered (e.g. Password1)
4. Enter same value as in "Password" field - Matching password is entered (e.g. Password1)
5. Press "Submit" button - Form is submitted; User is redirected to the homepage; Success message "You have registered successfully!" displayed

**Test 2** - *Positive scenario - Short username
1. Enter shortest valid username (3 characters) - Valid username is entered (e.g. 123)
2. Enter valid email - Valid email is entered (e.g. user@user.com)
3. Enter valid password - Valid password is entered (e.g. Password1)
4. Enter same value as in "Password" field - Matching password is entered (e.g. Password1)
5. Press "Submit" button - Form is submitted; User is redirected to the homepage; Success message "You have registered successfully!" displayed

**Test 3** - Negative scenario - Empty form
1. Leave all the fields empty
2. Press "Submit" button - User is NOT redirected to the homepage; All fields highlighted and error messages are shown for each field 

**Test 4** - Negative scenario - Invalid username
1. Enter INVALID username - Invalid username is entered (e.g <3 or >20 character, only special symbols)
2. Enter valid email - Valid email is entered (e.g. user@user.com)
3. Enter valid password - Valid password is entered (e.g. Password1)
4. Enter same value as in "Password" field - Matching password is entered (e.g. Password1)
5. Press "Submit" button - User is NOT redirected to the homepage; Username field is highlighted and error message is displayed
________________

#### Task 2

**Bug 1** - No error messages for other fields when incorrectly filling email field

**Description:** No error message is shown for the each failed field when Email is filled incorrectly (e.g missing @smtn.com)

**Precondition:**
- User is on the registration website
- Registration form is opened

**Steps to reproduce:**
1. Enter "1" in every filed
2. Click "Submit" button

**Expected Result:** Clear error messages are displayed for each failed field
**Actual Result:** 
- Validation for Email field doesn't fit the format ofother fields (tooltip instead of error message)
- When Email validation is triggered other failed fields are not highlighted 
*Evidence (e.g screenshots/video)*

**Version:** Google Chrome Version 135.0.7049.116
_____________________

**Bug 2** - Incorrect name for 'Submit' button

**Description:** 'Submit' button is named 'Register' in the form

**Precondition:**
- User is on the registration website
- Registration form is opened

**Steps to reproduce:**
1. Navigate to "Submit" button
 
**Expected Result:** Button name is "Submit"
**Actual Result:** Button name is "Register"
*Evidence (e.g screenshots/video)*

**Version:** Google Chrome Version 135.0.7049.116
_____________

**Bug 3** - Error messages still displayed on retry

**Description:** Error messages from previous attempt are still displayed when user retries to fill the form

**Precondition:**
- User is on the registration website
- Registration form is opened
- Fields have error messages from previous failed attempt
  
**Steps to reproduce:**
1. Start typing in the field with error
 
**Expected Result:** Error message is cleared when user starts typing
**Actual Result:** Error message is still displayed until user clicks "Submit"
*Evidence (e.g screenshots/video)*

**Version:** Google Chrome Version 135.0.7049.116
_____________

#### Task 4

- Restrict Username field to a specific amount of characters (not more than 20)
- Add tooltip/suggestions around or inside each field with instructions
- Add real-time validation (entered value is being validated as user types and error messaga is displayed right away)
- Highlight fields with errors (e.g. red frame)
- Disable "Submit" button until all field pass validation
- Show/Hide password toggle
- Real-time validation/visual feedback for password field or password strength meter
- CapsLock alert

#### Task 5

- Consider adding special characters to enhance password strength
- Register with SSO
- Either Submit button should be renamed to "Register" in the requirments or vice versa
- Add id to elements - suggestion to ease test automation (clear, short locators)
- Combine fields and validation requirments so all related information is in one place and is easier to read, e.g.:
  **Registration Form Requirments:**

- **Username:**
  - Required field
  - Must be between 3 and 20 characters.
  - Only alphanumeric characters allowed.
  - No spaces or special characters.

- **Email:**
  - Required field
  - Must follow standard email format (e.g., example@domain.com)

- **Password:**
  - Required field
  - Minimum 8 characters.
  - At least one uppercase letter (A–Z).
  - At least one lowercase letter (a–z).
  - At least one numeric digit (0–9).
  - (Optional): Recommend adding a special character rule for enhanced security.

- **Confirm Password:**
  - Required field
  - Must match the Password field exactly.
 
- **Submit Button:**
  - Specified name
  - Submit the form


#### Task 6
- Are registered users added to database
- Unique username and email validation (username/email already registered)
- Registration API
- Are passwords stored in encrypted format
- Can you login with users you have registered
- Accessibility voice over
- Load tests
