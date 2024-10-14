import APasswordRecoveryTemplate from '~/components/templates/APasswordRecoveryTemplate.vue';
import { store } from '~/store/store'; // Import the store to control state in Storybook

const meta = {
  title: 'Templates/APasswordRecoveryTemplate',
  component: APasswordRecoveryTemplate,
};

export default meta;

export const Default = {
  render: (args) => ({
    components: { APasswordRecoveryTemplate },
    setup() {
      store.isUserLoggedIn = false;
      store.isRecoveryPage = true;
      store.isPasswordResetPage = false;

      const navigateToResetPassword = () => {
        store.isUserLoggedIn = true;
        store.isRecoveryPage = false;
        store.isPasswordResetPage = true;
      };

      return { args, navigateToResetPassword };
    },
    template: '<APasswordRecoveryTemplate v-bind="args" />',
  }),
};
