<!-- components/organisms/TopBar.vue -->
<template>
  <div
    class="fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2"
  >
    <div class="flex items-center gap-4 md:pl-20 text-white"></div>

    <!-- Centered SearchBar -->
    <div
      class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center"
    >
      <div
        id="search"
        class="w-3/5 sm:w-1/3 pointer-events-auto relative h-full rounded-md pt-2 transition-all"
      >
        <SearchBar />
      </div>
    </div>
    <ButtonWithIcon
      v-if="!store.isUserLoggedIn"
      iconClass="fa-user-plus"
      text="Join Us"
      @pointerup="store.togglePopUp"
    />
    <ButtonWithIcon
      v-if="store.isUserLoggedIn"
      iconClass="fa-right-from-bracket"
      text="Logout"
      @pointerup="logout"
    />
  </div>
</template>

<script setup>
import { store } from "~/store/store";
import SearchBar from "../molecules/SearchBar.vue";
import ButtonWithIcon from "../molecules/ButtonWithIcon.vue";

const logout = async () => {
  store.resetStore();
};
</script>
