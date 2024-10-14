<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-6 rounded-lg popup-content bg-black"
    >
      <NextIconSection />
      <Text text="Test Name" class="text-white text-center p-3 m-5" />
      <Text
        text="Thanks for joining Aladia"
        class="text-white text-center m-5 p-3"
      />
      <Image src="image.png" class="m-6 p-5" />
      <ActionButton
        @pointerup="handleActionButton"
        text="Enter Marketplace"
        class="text-white p-3 m-3"
      />
    </div>
  </div>
</template>

<script setup>
import { store } from "~/store/store";
import Text from "~/components/atoms/Text.vue";
import ActionButton from "~/components/molecules/ActionButton.vue";
import Image from "~/components/atoms/Image.vue";
import NextIconSection from "~/components/molecules/NextIconSection.vue";

const handleActionButton = async () => {
  store.isSuccessPage = false;
};
</script>
