<template>
  <h1 :class="customClass">{{ text }}</h1>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true },
  customClass: { type: String, default: "text-6xl font-bold opacity-90" },
});
</script>
