<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black"
    >
      <div class="p-10">
        <NextIconSection text="Password recovery" />
        <SocialLoginHeader />

        <SocialLoginBody class="p-5 text-center" />
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
import SocialLoginHeader from '~/components/organisms/SocialLoginHeader.vue';
import SocialLoginBody from '~/components/organisms/SocialLoginBody.vue';
import TransitionState from '~/components/organisms/TransitionState.vue';
import ActionButton from '~/components/molecules/ActionButton.vue';
import NextIconSection from '~/components/molecules/NextIconSection.vue';
import { store } from '~/store/store';

const navigateToResetPassword = async () => {
  store.isUserLoggedIn = true;
  store.isRecoveryPage = false;
  store.isPasswordResetPage = true;
}
</script>
