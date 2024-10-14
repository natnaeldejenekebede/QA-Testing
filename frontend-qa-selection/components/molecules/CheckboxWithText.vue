<template>
  <div>
    <div class="mb-4 flex items-center gap-2">
      <Input
        @update:checked="isChecked = $event"
        type="checkbox"
        customClass="border-white/50 hover:border-white"
      >
        <Icon :visible="isChecked" iconClass="text-sm" />
      </Input>
      <div class="text-xs text-white/70">
        <Text text="I accept" customClass="inline-block" />
        <span class="underline text-white cursor-pointer">
          Terms & Conditions
        </span>
        and
        <span class="underline text-white cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </div>
    <Text
      text="Enter your details"
      custom-class="mb-6 text-center text-white"
    />
  </div>
</template>

<script setup>
const isChecked = ref(false);
import Text from "../atoms/Text.vue";
</script>
