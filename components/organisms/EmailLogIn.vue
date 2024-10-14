<template>
  <div>
    <InfoBaner
      title="Welcome to Aladial"
      content-text="Create or access your account from here"
    />
    <Text text="Enter your email" class="mb-6 text-center text-white" />

    <!-- Correct usage of v-model -->
    <InputBox
      v-model="email"
      icon-class="fa-envelope text-base text-black/70"
      placeholder="Email Address"
    />

    <!-- Ensure ActionButton is clickable with pointerup -->
    <ActionButton @pointerup="handleEnter" text="Enter" />

    <DividedWithText />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { store } from "~/store/store";

import InputBox from "~/components/molecules/InputBox.vue";
import InfoBaner from "~/components/molecules/InfoBaner.vue";
import DividedWithText from "~/components/molecules/DividedWithText.vue";
import Text from "~/components/atoms/Text.vue";
import ActionButton from "../molecules/ActionButton.vue";

const email = ref("");

const handleEnter = () => {
  console.log("Entering handleEnter with email:", email.value); // Debugging

  if (email.value.trim() !== "") {
    store.setEmail(email.value); // Store the email
  } else {
    alert("Please enter a valid email address");
  }
};
</script>
