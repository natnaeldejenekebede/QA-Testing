import GPasswordRecoveryTemplate from '~/components/templates/GPasswordRecoveryTemplate.vue';

export default {
  title: 'Templates/GPasswordRecoveryTemplate',
  component: GPasswordRecoveryTemplate,
};

const Template = (args) => ({
  components: { GPasswordRecoveryTemplate },
  setup() {
    return { args };
  },
  template: '<GPasswordRecoveryTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {

};