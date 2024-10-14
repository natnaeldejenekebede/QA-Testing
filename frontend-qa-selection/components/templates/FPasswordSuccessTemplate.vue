<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black"
    >
      <InfoBaner
        class="border border-blue-red-700"
        img-src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
        title="Add New Password"
        content-text="Your account uses
  FaceBook Sign-in.
  Add a new password. "
      />
      <Text
        text="Password Successfully Added!"
        class="text-white text-center p-8"
      />

      <ActionButton
        @pointerup="proceedToHome"
        text="Proceed to Aladia"
        class="p-8"
      />
    </div>
  </div>
</template>

<script setup>
import InfoBaner from "~/components/molecules/InfoBaner.vue";
import Text from "~/components/atoms/Text.vue";
import ActionButton from "~/components/molecules/ActionButton.vue";
import { store } from "~/store/store";

const proceedToHome = async () => {
  store.isPasswordSuccessPage = false;
};
</script>
