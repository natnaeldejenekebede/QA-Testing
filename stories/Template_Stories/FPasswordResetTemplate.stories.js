import FPasswordResetTemplate from '~/components/templates/FPasswordResetTemplate.vue';

export default {
  title: 'Templates/FPasswordResetTemplate',
  component: FPasswordResetTemplate,
};

const Template = (args) => ({
  components: { FPasswordResetTemplate },
  setup() {
    return { args };
  },
  template: '<FPasswordResetTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};