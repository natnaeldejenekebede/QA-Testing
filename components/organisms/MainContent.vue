<template>
  <div
    id="page"
    class="relative min-h-screen pt-14 transition-all duration-200"
  >
    <div class="relative h-[36rem] overflow-hidden">
      <div class="z-1 relative flex items-center px-10 pt-40 text-white">
        <div class="mr-10 flex-1">
          <Header text="E-learning Revolution 2" />
          <Text
            text="We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers"
            customClass="mb-5 text-xl"
          />
          <Anchor url="/courses" text="Go to Marketplace" />
        </div>
        <RectElement />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../atoms/Header.vue";
import Text from "../atoms/Text.vue";
import Anchor from "../atoms/Anchor.vue";
import RectElement from "../atoms/RectElement.vue";
</script>
