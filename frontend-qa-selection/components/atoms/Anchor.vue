<template>
  <a :href="url" :class="customClass">{{ text }}</a>
</template>

<script setup>
const props = defineProps({
  url: { type: String, required: true },
  text: { type: String, required: true },
  customClass: {
    type: String,
    default:
      "inline-block cursor-pointer rounded-md bg-black px-4 py-3 text-white",
  },
});
</script>
