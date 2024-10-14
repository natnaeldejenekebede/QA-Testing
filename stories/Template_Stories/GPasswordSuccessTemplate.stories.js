import GPasswordSuccess from "~/components/templates/GPasswordSuccess.vue";

export default {
  title: 'Templates/GPasswordSuccessTemplate',
  component: GPasswordSuccess,
};

const Template = (args) => ({
  components: { GPasswordSuccess },
  setup() {
    return { args };
  },
  template: '<GPasswordSuccess v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};