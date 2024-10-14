<template>
  <div>
    <NextIconSection />
    <InfoBaner
      title="Nice to meet you"
      content-text="Upload a profile picture
  and complete your
  presentation "
    />
    <CheckboxWithText />
  </div>
</template>

<script setup>
import NextIconSection from "~/components/molecules/NextIconSection.vue";
import InfoBaner from "../molecules/InfoBaner.vue";
import CheckboxWithText from "../molecules/CheckboxWithText.vue";
</script>
