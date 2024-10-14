<template>
  <div>
    <!-- OTP Input Fields -->
    <OtpField v-model="enteredOtp" />

    <!-- Helper Text -->
    <Text text="You didn't receive any email?" />

    <!-- Submit Button -->
    <ActionButton text="Enter" @pointerup="handleOtpSubmit" />
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";
import { store } from "~/store/store";
import OtpField from '../molecules/OtpField.vue';
import Text from '../atoms/Text.vue';
import ActionButton from '../molecules/ActionButton.vue';

// Local state to store entered OTP
const enteredOtp = ref("");

// Function to handle OTP submission
const handleOtpSubmit = () => {
  if (enteredOtp.value.length === 6) {
    // Verify the entered OTP with the store's static OTP
    store.verifyOtp(enteredOtp.value);

  } else {
    alert("Please enter the full 6-digit OTP.");
  }
};
</script>
