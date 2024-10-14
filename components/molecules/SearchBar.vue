<template>
  <div
    class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm text-[#707070]"
  >
    <div
      class="group-hover:scale-110 shrink-0 cursor-pointer text-lg transition-all"
    >
      <Icon iconClass="fa-magnifying-glass text-xs" />
    </div>


    <InputField
      maxlength="100"
      autocomplete="new-password"
      placeholder="Search courses..."
      customClass="h-full w-0 flex-1 bg-transparent text-13 outline-none"
    />

  
    <div
      class="relative z-20 shrink-0 cursor-pointer text-sm text-[#707070] hover:text-[#ffffff]"
    >
      <Icon iconClass="fa-circle-xmark" customClass="hidden" />
    </div>

    
    <DecorativeLine />
  </div>
</template>

<script setup>
import DecorativeLine from "../atoms/DecorativeLine.vue";
import Icon from "~/components/atoms/Icon.vue";
import InputField from "~/components/atoms/InputField.vue";
</script>
