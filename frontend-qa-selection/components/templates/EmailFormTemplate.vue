<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50"
  >
    <div
      class="relative z-10 p-5 m-5 text-13 border rounded-lg popup-content bg-black"
    >
      <div class="m-8">
        <EmailLogIn />
        <SocialLogin />
      </div>
    </div>
  </div>
</template>

<script setup>
import EmailLogIn from "~/components/organisms/EmailLogIn.vue";
import SocialLogin from "~/components/organisms/SocialLogin.vue";
</script>
