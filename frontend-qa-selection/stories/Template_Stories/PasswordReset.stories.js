import PasswordResetTemplate from "~/components/templates/PasswordResetTemplate.vue";

export default {
  title: 'Templates/PasswordResetTemplate',
  component: PasswordResetTemplate,
};

const Template = (args) => ({
  components: { PasswordResetTemplate },
  setup() {
    return { args };
  },
  template: '<PasswordResetTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
