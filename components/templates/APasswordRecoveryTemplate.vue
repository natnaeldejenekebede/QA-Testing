<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black"
    >
      <div class="p-4 m-4">
        <NextIconSection text="Password recovery" />
        <InfoBaner
          img-src="https://upload.wikimedia.org/wikipedia/commons/archive/3/31/20201228132320%21Apple_logo_white.svg"
          title="Add New Password"
          content-text="Your account uses
  Apple sign-in add a new 
  password"
          class="border border-blue-700 p-5 m-5"
        />
        <Text text="Enter Recovery Email" class="text-white text-center" />
        <Text
          text="A recovery mail will be sent to this address. 
           "
          class="text-white"
        />
        <TransitionState class="m-15" />

        <ActionButton
          @pointerup="navigateToResetPassword"
          text="Reset Password"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import InfoBaner from "~/components/molecules/InfoBaner.vue";
import Text from "~/components/atoms/Text.vue";
import TransitionState from "~/components/organisms/TransitionState.vue";
import ActionButton from "~/components/molecules/ActionButton.vue";
import NextIconSection from "~/components/molecules/NextIconSection.vue";
import { store } from "~/store/store";

const navigateToResetPassword = async () => {
  store.isUserLoggedIn = true;
  store.isRecoveryPage = false;
  store.isPasswordResetPage = true;
};
</script>
