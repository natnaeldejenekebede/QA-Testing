import GPasswordResetTemplate from '~/components/templates/GPasswordResetTemplate.vue';

export default {
  title: 'Templates/GPasswordResetTemplate',
  component: GPasswordResetTemplate,
  argTypes: {},
};

const Template = (args) => ({
  components: { GPasswordResetTemplate },
  setup() {
    return { args };
  },
  template: '<GPasswordResetTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};