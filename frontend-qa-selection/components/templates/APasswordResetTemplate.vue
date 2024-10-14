<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black"
    >
      <NextIconSection />
      <InfoBaner
        img-src="https://upload.wikimedia.org/wikipedia/commons/archive/3/31/20201228132320%21Apple_logo_white.svg"
        title="Add new password"
        content-text="Your account uses
    Apple sign-in add a new 
    password"
        class="border border-white p-5 m-5"
      />
      <InputBox
        v-model="password"
        placeholder="Password"
        type="password"
        icon-class="fa-key text-base text-black/70"
      />
      <InputBox
        v-model="confirmPassword"
        placeholder="Confirm password"
        type="password"
        icon-class="fa-key text-base text-black/70"
      />
      <ActionButton text="Cerate New Password" @pointerup="resetPassword" class="p-5 m-5" />
    </div>
  </div>
</template>

<script setup>
import NextIconSection from "~/components/molecules/NextIconSection.vue";
import InfoBaner from "~/components/molecules/InfoBaner.vue";
import InputBox from "~/components/molecules/InputBox.vue";
import ActionButton from "~/components/molecules/ActionButton.vue";
import { store } from "~/store/store";
import { ref } from "vue";

const password = ref("");
const confirmPassword = ref("");

const resetPassword = async () => {
  store.resetPassword(password.value, confirmPassword.value);
};
</script>
