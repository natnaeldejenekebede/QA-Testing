import APasswordSuccessTemplate from '~/components/templates/APasswordSuccessTemplate.vue';

export default {
  title: 'Templates/APasswordSuccessTemplate',
  component: APasswordSuccessTemplate,
  argTypes: {
    proceedToHome: { action: 'proceedToHome' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { APasswordSuccessTemplate },
  setup() {
    return { args };
  },
  template: '<APasswordSuccessTemplate v-bind="args" @proceedToHome="args.proceedToHome" />',
});

export const Default = Template.bind({});
Default.args = {};
