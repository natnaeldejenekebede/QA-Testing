<template>
  <div class="flex flex-1 items-center justify-around gap-6">
    <Image
      custom-class="h-20 w-20 object-cover"
      src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
    />
    <SocialTransition />
    <Image src="lock.svg" custom-class="-20 object-cover" />
  </div>
</template>

<script setup lang="js">
import SocialTransition from '../molecules/SocialTransition.vue';
import Image from '../atoms/Image.vue';
</script>
