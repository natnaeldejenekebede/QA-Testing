import { reactive } from "vue";

export const store = reactive({
  userEmail: "",
  userName: "",
  userSurname: "",
  confirmPassword: "",
  otpCode: "123456", // Static OTP for all users
  enteredOtp: "",
  isUserLoggedIn: false,
  isPopUpVisible: false,
  isEmailRegistered: false,
  isOTPage: false,
  isOtpVerified: false,
  isSuccessPage: false,
  provider: "", // Track the provider of the login (Google, Facebook, Apple)
  isRecoveryPage: false, // Flag for showing recovery page
  isPasswordResetPage: false, // Flag for showing reset password page
  isPasswordSuccessPage: false, // Flag for showing success page after reset
  registeredEmails: [
    { email: "test@example.com", password: "test@123", provider: "email" },
    { email: "user@example.com", password: "user@123", provider: "email" },
  ],

  // Methods to update state

  togglePopUp() {
    store.isPopUpVisible = !store.isPopUpVisible;
  },

  setEmail(email) {
    this.userEmail = email;
    store.isPopUpVisible = false;
    const user = this.registeredEmails.find((user) => user.email === email);

    this.provider = user.provider;
    this.checkEmailRegistered();
  },

  checkEmailRegistered() {
    this.isEmailRegistered = this.registeredEmails.some(
      (user) => user.email === this.userEmail
    );
  },

  // Set up signup details and validate passwords
  setSignUpDetails({ name, surname, email, password, confirmPassword }) {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false; // Exit if passwords do not match
    }

    const user = {
      email: email,
      password: password,
      provider: "email", // For normal signups, provider is blank
    };

    this.registeredEmails.push(user); // Add new user to registered emails
    this.userName = name;
    this.userSurname = surname;
    this.password = password;
    this.isEmailRegistered = true;
    this.isOTPage = true; // Proceed to OTP page

    return true; // Successful registration
  },

  // Verify OTP against static code
  verifyOtp(enteredOtp) {
    if (enteredOtp === this.otpCode) {
      this.isOtpVerified = true;
      this.isUserLoggedIn = true;
      this.isOTPage = false;
      this.isSuccessPage = true;
    } else {
      alert("Invalid OTP");
    }
  },

  // Login function
  login(password) {
    const user = this.registeredEmails.find(
      (user) => user.email === this.userEmail && user.password === password
    );

    if (user) {
      this.isUserLoggedIn = true;
      this.userEmail = user.email;
      this.provider = user.provider || ""; // Set the provider if it exists
    } else {
      alert("Invalid email or password");
    }
  },

  // Social login logic
  socialLogin(provider) {
    let user = {};

    // Determine the email based on the provider
    switch (provider) {
      case "google":
        user = { email: "test@google.com", password: "", provider: "google" };
        break;
      case "facebook":
        user = {
          email: "test@facebook.org",
          password: "",
          provider: "facebook",
        };
        break;
      case "apple":
        user = { email: "test@apple.org", password: "", provider: "apple" };
        break;
      default:
        alert("Unknown provider!");
        return;
    }

    // Log in the user by adding the user details to the store
    this.userEmail = user.email;
    this.provider = user.provider;
    this.isUserLoggedIn = true;
    this.isPopUpVisible = false;
    this.isEmailRegistered = true;

    // Check if the user is already registered, if not, add the user
    const isUserExists = this.registeredEmails.some(
      (registeredUser) => registeredUser.email === user.email
    );

    if (!isUserExists) {
      this.registeredEmails.push(user); // Register the user for the first time
    }
  },

  initiatePasswordRecovery(email) {
    this.setEmail(email);
    if (this.isEmailRegistered) {
      this.isRecoveryPage = true; // Proceed to recovery page
    } else {
      alert("Email not registered!");
    }
  },

  resetPassword(newPassword, confirmPassword) {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }

    const user = this.registeredEmails.find(
      (user) => user.email === this.userEmail
    );
    if (user) {
      user.password = newPassword;
      this.isPasswordResetPage = false;
      this.isPasswordSuccessPage = true; // Show success page
    } else {
      alert("User not found!");
    }
  },

  // Reset store after signup/login flow
  resetStore() {
    this.userEmail = "";
    this.userName = "";
    this.userSurname = "";
    this.password = "";
    this.confirmPassword = "";
    this.provider = "";
    this.isOtpVerified = false;
    this.isUserLoggedIn = false;
    this.isEmailRegistered = false;
    this.isOTPage = false;
    this.isSuccessPage = false;
  },
});
