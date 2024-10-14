import FPasswordSuccessTemplate from '~/components/templates/FPasswordSuccessTemplate.vue';

export default {
  title: 'Templates/FPasswordSuccessTemplate',
  component: FPasswordSuccessTemplate,
};

const Template = (args) => ({
  components: { FPasswordSuccessTemplate },
  setup() {
    return { args };
  },
  template: '<FPasswordSuccessTemplate v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};