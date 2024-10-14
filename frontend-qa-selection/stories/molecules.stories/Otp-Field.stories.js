import OtpField from "~/components/molecules/OtpField.vue";

export default {
  title: 'Molecules/OtpField',
  component: OtpField,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder for each OTP input field',
      defaultValue: '',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum length of each OTP input field',
      defaultValue: 1,
    },
    customClass: {
      control: 'text',
      description: 'Custom class for styling input fields',
      defaultValue: 'flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90',
    },
  },
};

const Template = (args) => ({
  components: { OtpField },
  setup() {
    return { args };
  },
  template: '<OtpField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: '',
  maxLength: 1,
  customClass: 'flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90',
};
