import SocialButton from "~/components/molecules/SocialButton.vue";

export default {
  title: 'Molecules/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  argTypes: {
    iconSrc: {
      control: 'text',
      description: 'Source URL for the social media icon',
      defaultValue: 'https://path-to-icon/icon.png',
    },
    altText: {
      control: 'text',
      description: 'Alternative text for the icon',
      defaultValue: 'Social Media Icon',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the button',
      defaultValue: 'Sign in with Social Media',
    },
  },
};

const Template = (args) => ({
  components: { SocialButton },
  setup() {
    return { args };
  },
  template: '<SocialButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  iconSrc: 'https://path-to-icon/icon.png',
  altText: 'Social Media Icon',
  buttonText: 'Sign in with Social Media',
};
