import SocialLogin from "~/components/organisms/SocialLogin.vue";

export default {
  title: 'Organisms/SocialLogin',
  component: SocialLogin,
  tags: ['autodocs'],
  argTypes: {
    googleIconSrc: {
      control: { type: 'text' },
      description: 'Source for the Google icon',
      defaultValue: '../../google.png',
    },
    facebookIconSrc: {
      control: { type: 'text' },
      description: 'Source for the Facebook icon',
      defaultValue: '../../facebook.png',
    },
    appleIconSrc: {
      control: { type: 'text' },
      description: 'Source for the Apple icon',
      defaultValue: '../../appl.png',
    },
  },
};

const Template = (args) => ({
  components: { SocialLogin },
  setup() {
    return { args };
  },
  template: `
    <div>
      <SocialButton
        :iconSrc="args.googleIconSrc"
        altText="Google Icon"
        buttonText="Continue with Google"
      />
      <SocialButton
        :iconSrc="args.facebookIconSrc"
        altText="Facebook Icon"
        buttonText="Continue with Facebook"
      />
      <SocialButton
        :iconSrc="args.appleIconSrc"
        altText="Apple Icon"
        buttonText="Continue with Apple"
      />
      <Text text=" Terms & Conditions " class="cursor-pointer text-center text-white/40" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
