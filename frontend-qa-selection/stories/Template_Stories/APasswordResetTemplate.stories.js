import APasswordResetTemplate from '~/components/templates/APasswordResetTemplate.vue';
import { store } from '~/store/store'; 

const meta = {
  title: 'Templates/APasswordResetTemplate',
  component: APasswordResetTemplate,
};

export default meta;

export const Default = {
  render: (args) => ({
    components: { APasswordResetTemplate },
    setup() {
      const password = ref('');
      const confirmPassword = ref('');

      const resetPassword = () => {
        store.resetPassword(password.value, confirmPassword.value);
      };

      return { args, password, confirmPassword, resetPassword };
    },
    template: '<APasswordResetTemplate v-bind="args" />',
  }),
};
