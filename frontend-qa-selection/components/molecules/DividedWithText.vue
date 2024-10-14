<template>
  <div>
    <div class="mb-6 flex w-full items-center justify-between gap-1">
      <DecorativeLine
        customClass="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"
      />

      <Text text="Or" customClass="text-white" />

      <DecorativeLine
        customClass="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"
      />
    </div>
  </div>
</template>

<script setup>
import DecorativeLine from "~/components/atoms/DecorativeLine.vue";
import Text from "~/components/atoms/Text.vue";
</script>
