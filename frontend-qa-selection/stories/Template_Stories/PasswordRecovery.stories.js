import PasswordRecovery from "~/components/templates/PasswordRecovery.vue";

export default {
  title: 'Templates/PasswordRecovery',
  component: PasswordRecovery,
};

const Template = (args) => ({
  components: { PasswordRecovery },
  setup() {
    return { args };
  },
  template: '<PasswordRecovery v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
