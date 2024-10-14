<template>
  <div>
    <div class="mb-8 flex w-full flex-col gap-4">
      <SocialButton
      id="Go"
        iconSrc="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        altText="Google Icon"
        buttonText="Continue with Google"
        @click="handleSocialLogin('google')"
      />
      <SocialButton
      id="fac"
        iconSrc="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
        altText="Facebook Icon"
        buttonText="Continue with Facebook"
        @click="handleSocialLogin('facebook')"
      />
      <SocialButton
      id="app"
        iconSrc="https://upload.wikimedia.org/wikipedia/commons/archive/3/31/20201228132320%21Apple_logo_white.svg"
        altText="Apple Icon"
        buttonText="Continue with Apple"
        @click="handleSocialLogin('apple')"
      />
    </div>
    <Text
      text=" Terms &amp; Conditions "
      class="cursor-pointer text-center text-white/40"
    />
  </div>
</template>

<script setup>
import Text from "../atoms/Text.vue";
import SocialButton from "../molecules/SocialButton.vue";
import { store } from "~/store/store"; // Import the store for access

// Handle social login click event
const handleSocialLogin = (provider) => {
  store.socialLogin(provider);
};
</script>
