<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-6 rounded-lg popup-content bg-black"
    >
      <!-- Logo or Header Section -->
      <NextIconSection />

      <!-- Information Banner -->
      <InfoBaner
        title="Welcome to Aladia"
        content-text="Create or access your Account from here"
      />

      <!-- Instructional Text -->
      <Text content-text="Enter your password" class="text-white text-center" />

      <!-- Password Input and Forgot Password Option -->
      <div>
        <InputBox
          v-model="password"
          placeholder="Password"
          type="password"
          icon-class="fa-key text-base text-black/70"
        />
        <Anchor
          text="Forgot Password?"
          class="text-white/50 cursor-pointer text-sm"
          @click="navigateToForgotPassword"
        />
      </div>

      <!-- Login Button -->
      <ActionButton text="Enter" @click="handleLogin" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "~/store/store"; // Import store

import NextIconSection from "~/components/molecules/NextIconSection.vue";
import InputBox from "~/components/molecules/InputBox.vue";
import Text from "~/components/atoms/Text.vue";
import ActionButton from "~/components/molecules/ActionButton.vue";
import InfoBaner from "~/components/molecules/InfoBaner.vue";
import Anchor from "~/components/atoms/Anchor.vue";

// Reactive variable for the password input
const password = ref("");

// Handle login click
const handleLogin = () => {
  if (!password.value) {
    alert("Please enter your password");
    return;
  }
  // Call the login method from the store
  const loginSuccess = store.login(password.value);

  if (!loginSuccess) {
    alert("Invalid email or password");
  }
};

// Handle navigation to forgot password page
const navigateToForgotPassword = () => {
  // Set the recovery page state in the store and proceed to the recovery page
  store.isRecoveryPage = true;
};
</script>
