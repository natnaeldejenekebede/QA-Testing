<template>
  <div
    class="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border flex flex-col gap-6 rounded-lg popup-content bg-black"
    >
      <NextIconSection />
      <OtpHeader />
      <OtpBody />
    </div>
  </div>
</template>

<script setup lang="js">
import OtpHeader from '~/components/organisms/OtpHeader.vue';
import OtpBody from '~/components/organisms/OtpBody.vue';
import NextIconSection from '~/components/molecules/NextIconSection.vue';
</script>
