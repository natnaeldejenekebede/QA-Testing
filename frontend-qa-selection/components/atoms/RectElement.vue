<template>
  <div :class="customClass"></div>
</template>

<script setup>
const props = defineProps({
  customClass: { type: String, default: "h-80 flex-1 rounded bg-black" },
});
</script>
