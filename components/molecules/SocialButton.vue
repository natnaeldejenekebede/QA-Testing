<template>
  <div
    :id ="id" class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95"
  >
    <img :src="iconSrc" :alt="altText" class="h-6" />
    <Text :text="buttonText" customClass="w-40 text-white text-nowrap" />
  </div>
</template>

<script setup>

import Text from "../atoms/Text.vue";

const props = defineProps({
  id:{
    type: String
  },
  iconSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
