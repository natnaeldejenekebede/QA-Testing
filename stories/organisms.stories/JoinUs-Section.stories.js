import JoinUsSection from "~/components/organisms/JoinUsSection.vue";

export default {
  title: 'Organisms/JoinUsSection',
  component: JoinUsSection,
  tags: ['autodocs'],
  argTypes: {
    iconClass: {
      control: { type: 'text' },
      description: 'CSS class for the icon',
      defaultValue: 'fa-solid fa-user-plus',
    },
    iconColor: {
      control: { type: 'color' },
      description: 'Color of the icon',
      defaultValue: '#ffffff', // Default to white
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Text displayed on the button',
      defaultValue: 'Join Us',
    },
  },
};

const Template = (args) => ({
  components: { JoinUsSection },
  setup() {
    const togglePopup = () => {
      alert('Popup toggled!'); // Simple alert to simulate popup toggle
    };
    return { args, togglePopup };
  },
  template: '<JoinUsSection v-bind="args" :togglePopup="togglePopup" />',
});

export const Default = Template.bind({});
Default.args = {
  iconClass: 'fa-solid fa-user-plus',
  iconColor: '#ffffff',
  buttonText: 'Join Us',
};
