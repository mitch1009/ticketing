Feature: User Authentication
    User should be able to register an account

    User Story:
        * as a user i want to be able to create an account
        * after creating an account i should be able to be verified and activate my account
        * if i did not receive a verification code, i should be able to resend an OTP
        * if i have made a mistake in my email i should be able to change it
    Acceptance criteria:
        * User should be registered in the system
    Scenario: Create Account
        Given Jane visits the platform and wants to create an account but she does not like typing alot
        Then We should allow her to use social login 
        And John does no mind typing, as such he would love to use email and password process
        Then he enters her credentials "<name>" "<email>" "<phone>" "<password>"
        When Jane click the submit button 
        Then she should be registered 
        And receive an OTP in her email for account verification
    Scenario: Verify Account
        Given Jane received the OTP and enters it in the input as "<OTP>"
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
        Given Jane forgot her password and clicks on forgot password link
        Then she should be presented with a page to enter email as "<email>"
        When she clicks reset password button 
        Then she receives a password reset link or OTP 
        And she enters  the OTP as "<OTP>" and the new password as "<password>"  and repeat password as "<repeatPassword>"
        When Jane clicks the change password button 
        Then Her password gets updated and she is taken to the dashboard
        