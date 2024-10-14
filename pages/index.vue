<template>
  <div class="h-full">
    <div data-layout="default">
      <LandingTemplate />
      <EmailFormTemplate v-if="store.isPopUpVisible" />
      <SignUpForm v-if="store.userEmail && !store.isEmailRegistered" />
      <OtpPage v-if="store.userEmail && store.isOTPage" />
      <SignUpSuccessTemplate
        v-if="store.isSuccessPage && store.isOtpVerified"
      />
      <LogInPasswordTemplate
        v-if="
          !store.isOTPage &&
          store.isEmailRegistered &&
          !store.isUserLoggedIn &&
          !store.isRecoveryPage
        "
      />
      <PasswordRecovery v-if="store.isRecoveryPage && store.provider == 'email'"  />
      <PasswordResetTemplate v-if="store.isPasswordResetPage && store.provider == 'email'" />
      <PasswordSuccessTemplate v-if="store.isPasswordSuccessPage && store.provider == 'email'" />

      <GPasswordRecoveryTemplate v-if="store.isRecoveryPage && store.provider == 'google'"  />
      <GPasswordResetTemplate v-if="store.isPasswordResetPage && store.provider == 'google'"  />
      <GPasswordSuccess v-if="store.isPasswordSuccessPage && store.provider == 'google'"  />

      <FPasswordRecoveryTemplate v-if="store.isRecoveryPage && store.provider == 'facebook'" />
      <FPasswordResetTemplate  v-if="store.isPasswordResetPage && store.provider == 'facebook'" />
      <FPasswordSuccessTemplate  v-if="store.isPasswordSuccessPage && store.provider == 'facebook'" />

      <APasswordRecoveryTemplate  v-if="store.isRecoveryPage && store.provider == 'apple'"  />
      <APasswordResetTemplate  v-if="store.isPasswordResetPage && store.provider == 'apple'" />
      <APasswordSuccessTemplate  v-if="store.isPasswordSuccessPage && store.provider == 'apple'" />
    </div>
  </div>
</template>

<script setup>
import { store } from "~/store/store";
import LandingTemplate from "~/components/templates/LandingTemplate.vue";
import EmailFormTemplate from "~/components/templates/EmailFormTemplate.vue";

import SignUpForm from "~/components/templates/SignUpForm.vue";
import OtpPage from "~/components/templates/OtpPage.vue";
import GPasswordRecoveryTemplate from "~/components/templates/GPasswordRecoveryTemplate.vue";
import SignUpSuccessTemplate from "~/components/templates/SignUpSuccessTemplate.vue";
import LogInPasswordTemplate from "~/components/templates/LogInPasswordTemplate.vue";

import GPasswordResetTemplate from "~/components/templates/GPasswordResetTemplate.vue";

import GPasswordSuccess from "~/components/templates/GPasswordSuccess.vue";
import PasswordRecovery from "~/components/templates/PasswordRecovery.vue";

import PasswordResetTemplate from "~/components/templates/PasswordResetTemplate.vue";
import PasswordSuccessTemplate from "~/components/templates/PasswordSuccessTemplate.vue";
import FPasswordRecoveryTemplate from "~/components/templates/FPasswordRecoveryTemplate.vue";
import FPasswordResetTemplate from "~/components/templates/FPasswordResetTemplate.vue";
import FPasswordSuccessTemplate from "~/components/templates/FPasswordSuccessTemplate.vue";

import APasswordRecoveryTemplate from "~/components/templates/APasswordRecoveryTemplate.vue";
import APasswordResetTemplate from "~/components/templates/APasswordResetTemplate.vue";
import APasswordSuccessTemplate from "~/components/templates/APasswordSuccessTemplate.vue";
</script>

<style scoped>
.popup-content {
  width: auto;
  height: auto;
  padding: 20px;
}
</style>
