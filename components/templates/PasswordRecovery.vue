<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black"
    >
      <NextIconSection text="Password recovery" />
      <InfoBaner
        img-src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
        title="Add new password"
        content-text=" Retrieve your password 
account through your  
registration mail "
      />
      <Text text="Enter Recovery Email" class="text-white text-center" />
      <Text
        text="A recovery mail will be sent to this address. 
         "
        class="text-white break-words"
      />
      <TransitionState class="m-15" />

      <InputBox
        placeholder="Recovery E-mail"
        type="email"
        icon-class="fa-envelope text-base text-black/70"
      />

      <ActionButton
        @pointerup="navigateToResetPassword"
        text="Reset Password"
      />
    </div>
  </div>
</template>

<script setup lang="js">
import { store } from '~/store/store';
import TransitionState from '~/components/organisms/TransitionState.vue';
import ActionButton from '~/components/molecules/ActionButton.vue';
import NextIconSection from '~/components/molecules/NextIconSection.vue';
import InfoBaner from '~/components/molecules/InfoBaner.vue';
import Text from '~/components/atoms/Text.vue';
import InputBox from '~/components/molecules/InputBox.vue';

const navigateToResetPassword = async () => {
  store.isUserLoggedIn = true;
  store.isRecoveryPage = false;
  store.isPasswordResetPage = true;
}
</script>
