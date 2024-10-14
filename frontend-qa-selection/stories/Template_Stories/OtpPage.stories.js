import OtpPage from "~/components/templates/OtpPage.vue";

export default {
  title: 'Templates/OtpPage',
  component: OtpPage,
};

const Template = (args) => ({
  components: { OtpPage },
  setup() {
    return { args };
  },
  template: '<OtpPage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
