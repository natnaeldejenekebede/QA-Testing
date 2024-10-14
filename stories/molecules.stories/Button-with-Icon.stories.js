import ButtonWithIcon from "~/components/molecules/ButtonWithIcon.vue";

const meta = {
  title: 'Molecules/ButtonWithIcon',
  component: ButtonWithIcon,
  tags: ['autodocs'],
  argTypes: {
    iconClass: {
      control: 'text',
      description: 'CSS class for the icon.',
      defaultValue: 'fa-solid fa-user-plus',
    },
    text: {
      control: 'text',
      description: 'Text displayed on the button.',
      defaultValue: 'Join Us',
    },
  },
};

export default meta;

const Template = (args) => ({
  components: { ButtonWithIcon },
  setup() {
    return { args };
  },
  template: '<ButtonWithIcon v-bind="args" />',
});

// Default button with icon
export const Default = Template.bind({});
Default.args = {
  iconClass: 'fa-solid fa-user-plus',
  text: 'Join Us',
};

// Button with a different icon and text
export const WithDifferentIcon = Template.bind({});
WithDifferentIcon.args = {
  iconClass: 'fa-solid fa-sign-in-alt',
  text: 'Login',
};

// Button with longer text
export const WithLongerText = Template.bind({});
WithLongerText.args = {
  iconClass: 'fa-solid fa-plus',
  text: 'Add New Item to Your List',
};
