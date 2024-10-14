<template>
  <section class="join-us-section" v-on:click="togglePopup">
    <ButtonWithIcon
      iconClass="fa-solid fa-user-plus"
      iconColor="white"
      buttonText="Join Us"
      textClass="text-white"
    />
  </section>
</template>

<script setup>
defineProps({
  togglePopup: Function, 
});
</script>
