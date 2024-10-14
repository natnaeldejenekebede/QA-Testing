<template>
  <div :class="customClass"></div>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default:
      "bg-gradient-to-l from-white/0 to-white absolute bottom-0 left-0 right-0 h-[1px] w-full",
  },
});
</script>
