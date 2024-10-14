<template>
  <div class="flex justify-center bg-[#161616] w-full h-full">
    <NuxtPage />
  </div>
</template>

<script>
import index from "./pages/index.vue";
export default {
  name: "App",
  components: { index },
};
</script>
