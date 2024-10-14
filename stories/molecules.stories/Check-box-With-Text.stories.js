import CheckboxWithText from "~/components/molecules/CheckboxWithText.vue";

const meta = {
  title: 'Molecules/CheckboxWithText',
  component: CheckboxWithText,
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => ({
  components: { CheckboxWithText },
  setup() {
    return { args };
  },
  template: '<CheckboxWithText v-bind="args" />',
});

// Default checkbox with text
export const Default = Template.bind({});
Default.args = {};

// Checkbox with text checked
export const Checked = Template.bind({});
Checked.args = {
  isChecked: true, // Pass initial checked state if needed
};
