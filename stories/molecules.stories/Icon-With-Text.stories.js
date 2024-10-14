import IconWithText from "~/components/molecules/IconWithText.vue";

const meta = {
  title: 'Molecules/IconWithText',
  component: IconWithText,
  tags: ['autodocs'],
  argTypes: {
    iconWidth: {
      control: {
        type: 'text',
      },
    },
    iconHeight: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    textClass: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

// Template function to create a story
const Template = (args) => ({
  components: { IconWithText },
  setup() {
    return { args };
  },
  template: '<IconWithText v-bind="args" />',
});

// Default Icon with Text
export const Default = Template.bind({});
Default.args = {
  iconWidth: "16", // default icon width
  iconHeight: "16", // default icon height
  text: "Default Text", // default text
  textClass: "", // default text class
};

// Customized Icon with Text
export const Customized = Template.bind({});
Customized.args = {
  iconWidth: "24", // customized icon width
  iconHeight: "24", // customized icon height
  text: "Customized Text", // customized text
  textClass: "font-bold text-blue-500", // applying a custom text class
};
