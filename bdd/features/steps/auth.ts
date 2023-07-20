import { Given, Then, When} from "@cucumber/cucumber"
  
  Given('Jane visist the platform and wants to create an account', function () {
    // const context = browser.contexts
    // Write code here that turns the phrase above into concrete actions
    return  'pending'
  });


  Then('she enters her credentials {string} {string} {string} {string}', function (string, string2, string3, string4) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('Jane click the submit button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('she should be registered', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('recieve an OTP in her email for account verification', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Given('Jane recieved the OTP and enters it in the input as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('Her account should be activated', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('redirected to her dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Given('jane is logged in and wants to Logout', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('she clicks the logout button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('she should be logged out of the system', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Given('Jane enters her account credentials , {string} and {string} ,in the login page', function (email:string, password:string) {
    // Write code here that turns the phrase above into concrete actions
    return console.log(email,password)
  });


  When('She clicks the login button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('She should be taken to her account', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  Given('Jane forgot her password and clicks on forgot pasword link', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('she should be presented with a page to enter email as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('she clicks reset password button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('she recieves a password reset link or OTP', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('she enters  the OTP as {string} and the new password as {string}  and repeat password as {string}', function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('Jane clicks the change password button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('Her password gets updated and she is taken to the dashboard', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });