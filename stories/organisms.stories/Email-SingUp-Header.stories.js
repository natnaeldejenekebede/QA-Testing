import EmailSingUpHeader from "~/components/organisms/EmailSingUpHeader.vue";

export default {
  title: 'Organisms/EmailSignUpHeader',
  component: EmailSingUpHeader ,
  tags: ['autodocs'],
  argTypes: {
    bannerTitle: {
      control: { type: 'text' },
      description: 'Title text for the InfoBaner',
      defaultValue: 'Nice to meet you',
    },
    bannerContent: {
      control: { type: 'text' },
      description: 'Content text for the InfoBaner',
      defaultValue: 'Upload a profile picture and complete your presentation',
    },
    checkboxLabel: {
      control: { type: 'text' },
      description: 'Label text for the CheckboxWithText',
      defaultValue: 'I agree to the terms and conditions',
    },
    isChecked: {
      control: { type: 'boolean' },
      description: 'Initial checked state of the checkbox',
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { EmailSingUpHeader  },
  setup() {
    return { args };
  },
  template: '<EmailSingUpHeader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  bannerTitle: 'Nice to meet you',
  bannerContent: 'Upload a profile picture and complete your presentation',
  checkboxLabel: 'I agree to the terms and conditions',
  isChecked: false,
};

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  ...Default.args,
  isChecked: true,
};

export const CustomBanner = Template.bind({});
CustomBanner.args = {
  bannerTitle: 'Welcome to Your New Journey',
  bannerContent: 'Set up your profile for a better experience',
  checkboxLabel: 'I accept the privacy policy',
  isChecked: false,
};
