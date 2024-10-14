<template>
  <div class="flex items-center justify-center gap-2">
    <Icon :width="iconWidth" :height="iconHeight" />
    <Text :text="text" :customClass="textClass" />
  </div>
</template>

<script setup>
import Icon from "@/components/atoms/Icon.vue";
import Text from "@/components/atoms/Text.vue";

const props = defineProps({
  iconWidth: {
    type: String,
    default: "16",
  },
  iconHeight: {
    type: String,
    default: "16",
  },
  text: {
    type: String,
    required: true,
  },
  textClass: {
    type: String,
    default: "",
  },
});
</script>
