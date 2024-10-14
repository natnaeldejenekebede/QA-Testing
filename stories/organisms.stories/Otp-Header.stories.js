import OtpHeader from "~/components/organisms/OtpHeader.vue";

export default {
  title: 'Organisms/OtpHeader',
  component: OtpHeader,
  tags: ['autodocs'],
  argTypes: {
    imgSrc: {
      control: { type: 'text' },
      description: 'Source of the image to display',
      defaultValue: '../../image.png',
    },
    mainText: {
      control: { type: 'text' },
      description: 'Main header text',
      defaultValue: 'Aladia company',
    },
    subText: {
      control: { type: 'text' },
      description: 'Sub header text',
      defaultValue: 'Thanks for joining Aladia',
    },
    instructionText: {
      control: { type: 'text' },
      description: 'Instruction text for entering the OTP',
      defaultValue: 'Please enter below the 6-digit code we sent you through your registration e-mail:',
    },
  },
};

const Template = (args) => ({
  components: { OtpHeader },
  setup() {
    return { args };
  },
  template: `
    <div>
      <OtpHeader 
        :imgSrc="args.imgSrc" 
        :mainText="args.mainText"
        :subText="args.subText"
        :instructionText="args.instructionText"
      />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  imgSrc: '../../image.png',
  mainText: 'Aladia company',
  subText: 'Thanks for joining Aladia',
  instructionText: 'Please enter below the 6-digit code we sent you through your registration e-mail:',
};
