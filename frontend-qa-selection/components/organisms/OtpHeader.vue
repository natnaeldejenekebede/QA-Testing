<script setup lang="js">
import Image from "../atoms/Image.vue";
import Text from "../atoms/Text.vue";
const imgSrc = "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png";
</script>

<template>
  <div class="flex flex-col items-center px-6 pt-8">
    <Image :src="imgSrc" custom-class="mb-2 h-24 w-24 rounded object-cover" />
    <Text text="Aladia company" custom-class="text-white" />
    <Text text="Thanks for joining Aladia" custom-class="text-white" />
    <Text
      text="Please enter below the 6-digit code we sent you
        through your registration e-mail:"
      custom-class="mb-20 text-center text-white/70"
    />
  </div>
</template>
