import SocialLoginBody from "~/components/organisms/SocialLoginBody.vue";

export default {
  title: 'Organisms/SocialLoginBody',
  component: SocialLoginBody,
  tags: ['autodocs'],
  argTypes: {
    email: {
      control: { type: 'text' },
      description: 'Email address to display',
      defaultValue: 'test@gmail.com',
    },
  },
};

const Template = (args) => ({
  components: { SocialLoginBody },
  setup() {
    return { args };
  },
  template: `
    <div>
      <SocialLoginBody :email="args.email" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  email: 'test@gmail.com',
};
