import RectElement from "~/components/atoms/RectElement.vue";

const meta = {
  title: 'Atoms/RectElement',
  component: RectElement,
  tags: ['autodocs'],
  argTypes: {
    customClass: {
      control: { type: 'text' },
      description: 'Custom CSS classes for additional styling',
    },
  },
};

export default meta;

export const RectElementStory = {
  args: {
    customClass: 'h-80 flex-1 rounded bg-black', // Default custom class
  },
  render: (args) => ({
    components: { RectElement },
    setup() {
      return { args };
    },
    template: '<RectElement v-bind="args" />',
  }),
};
