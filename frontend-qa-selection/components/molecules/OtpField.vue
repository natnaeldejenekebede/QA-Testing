<template>
  <div class="relative mb-4 flex h-10 w-full justify-between text-xl text-black">
    <!-- OTP inputs -->
    <InputField
      v-for="(digit, index) in otp"
      :key="index"
      :value="otp[index]"
      @input="handleInput($event, index)"
      maxlength="1"
      placeholder=""
      custom-class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90"
    />
  </div>
</template>

<script setup lang="js">
import InputField from '../atoms/InputField.vue';
import { ref } from 'vue';

// Props and Emits
const emit = defineEmits(["update:modelValue"]);
const otpLength = 6; // Number of OTP digits

// Local OTP state initialized with empty values
const otp = ref(Array(otpLength).fill(""));

// Handle input for each OTP field and emit full OTP to parent
const handleInput = (event, index) => {
  const value = event.target.value;

  // Update the specific OTP digit
  otp.value[index] = value;

  // Emit the full OTP string
  emit("update:modelValue", otp.value.join(""));
};
</script>
