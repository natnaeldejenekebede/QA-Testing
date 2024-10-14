import SocialLoginHeader from "~/components/organisms/SocialLoginHeader.vue";

export default {
  title: 'Organisms/SocialLoginHeader',
  component: SocialLoginHeader,
  tags: ['autodocs'],
  argTypes: {
    imgSrc: {
      control: { type: 'text' },
      description: 'Source for the image',
      defaultValue: 'google.png',
    },
    titleText: {
      control: { type: 'text' },
      description: 'Title text for the banner',
      defaultValue: 'Add new password',
    },
    contentText: {
      control: { type: 'text' },
      description: 'Content text for the banner',
      defaultValue: 'Your account uses Google sign-in add a new password',
    },
  },
};

const Template = (args) => ({
  components: { SocialLoginHeader },
  setup() {
    return { args };
  },
  template: '<SocialLoginHeader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'google.png',
  titleText: 'Add new password',
  contentText: 'Your account uses Google sign-in add a new password',
};
