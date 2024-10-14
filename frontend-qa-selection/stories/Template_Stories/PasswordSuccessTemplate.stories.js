import PasswordSuccessTemplate from "~/components/templates/PasswordSuccessTemplate.vue";

export default {
  title: 'Templates/PasswordSuccessTemplate',
  component: PasswordSuccessTemplate,
};

const Template = (args) => ({
  components: { PasswordSuccessTemplate },
  setup() {
    return { args };
  },
  template: '<PasswordSuccessTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
