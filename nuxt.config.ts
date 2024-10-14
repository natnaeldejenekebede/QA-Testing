// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/storybook"],

  css: [
    "@fortawesome/fontawesome-free/css/all.css", // Include Font Awesome CSS
    "@/assets/css/tailwind.css", // Your Tailwind CSS file
  ],
});
