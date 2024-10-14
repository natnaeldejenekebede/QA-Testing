import DividedWithText from "~/components/molecules/DividedWithText.vue";

const meta = {
  title: 'Molecules/DividedWithText',
  component: DividedWithText,
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => ({
  components: { DividedWithText },
  setup() {
    return { args };
  },
  template: '<DividedWithText v-bind="args" />',
});

// Default Divider with Text
export const Default = Template.bind({});
Default.args = {};

// Divider with custom text
export const CustomText = Template.bind({});
CustomText.args = {
  // You can extend the DividedWithText component to accept a 'text' prop if needed
  // text: "Your Custom Text Here", // Uncomment if your component supports custom text
};
