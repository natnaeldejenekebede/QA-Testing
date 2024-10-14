import OtpBody from "~/components/organisms/OtpBody.vue";

export default {
  title: 'Organisms/OtpBody',
  component: OtpBody,
  tags: ['autodocs'],
  argTypes: {
    buttonText: {
      control: { type: 'text' },
      description: 'Text displayed on the action button',
      defaultValue: 'Enter',
    },
    text: {
      control: { type: 'text' },
      description: 'Text displayed for email verification',
      defaultValue: "You didn't receive any email?",
    },
  },
};

const Template = (args) => ({
  components: { OtpBody },
  setup() {
    return { args };
  },
  template: `
    <div>
      <OtpBody :buttonText="args.buttonText" :text="args.text" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Enter',
  text: "You didn't receive any email?",
};
