Feature: User Authentication
    User should be able to register an account

    User Story:
        * as a user i want to be able to create an account
        * after creeating an account i should be able to be verified and activate my account
        * if i did not recive a verification code, i should be able to resend an OTP
        * if i have made a mistake in my email i should be able to chnage it
    Acceptance criteria:
        * User should be registerged in the system
    Scenario: Create Account
        Given Jane visist the platform and wants to create an account
        Then she enters her credentials "<name>" "<email>" "<phone>" "<password>"
        When Jane click the submit button 
        Then she should be registered 
        And recieve an OTP in her email for account verification
    Scenario: Verify Account
        Given Jane recieved the OTP and enters it in the input as "<OTP>"
        Then Her account should be activated 
        And redirected to her dashboard 
    Scenario: Logout
        Given jane is logged in and wants to Logout
        When she clicks the logout button 
        Then she should be logged out of the system
    Scenario: Login 
        Given Jane enters her account credentials , '<email>' and "<password>" ,in the login page 
        When She clicks the login button
        Then She should be taken to her account
    Scenario: Forgot password
        Given Jane forgot her password and clicks on forgot pasword link
        Then she should be presented with a page to enter email as "<email>"
        When she clicks reset password button 
        Then she recieves a password reset link or OTP 
        And she enters  the OTP as "<OTP>" and the new password as "<password>"  and repeat password as "<repeatPassword>"
        When Jane clicks the change password button 
        Then Her password gets updated and she is taken to the dashboard
        