import FPasswordRecoveryTemplate from '~/components/templates/FPasswordRecoveryTemplate.vue';

export default {
  title: 'Templates/FPasswordRecoveryTemplate',
  component: FPasswordRecoveryTemplate,
};

const Template = (args) => ({
  components: { FPasswordRecoveryTemplate },
  setup() {
    return { args };
  },
  template: '<FPasswordRecoveryTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};