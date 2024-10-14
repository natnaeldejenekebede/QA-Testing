import Header from "~/components/atoms/Header.vue";

const meta = {
  title: 'Atoms/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Header text content' },
    customClass: {
      control: 'text',
      description: 'Custom CSS classes for styling the header',
    },
  },
};

export default meta;

export const HeaderStory = {
  args: {
    text: 'Header',
    customClass: 'text-6xl font-bold opacity-90',
  },
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header :text="args.text" :customClass="args.customClass" />',
  }),
};
