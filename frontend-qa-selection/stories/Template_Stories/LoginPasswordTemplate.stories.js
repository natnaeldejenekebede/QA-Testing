import LogInPasswordTemplate from "~/components/templates/LogInPasswordTemplate.vue";

export default {
  title: 'Templates/LoginPasswordTemplate',
  component: LogInPasswordTemplate,
};

const Template = (args) => ({
  components: { LogInPasswordTemplate },
  setup() {
    return { args };
  },
  template: '<LogInPasswordTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
