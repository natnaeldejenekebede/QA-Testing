import DecorativeLine from "~/components/atoms/DecorativeLine.vue";

const meta = {
  title: 'Atoms/DecorativeLine',
  component: DecorativeLine,
  tags: ['autodocs'],
  argTypes: {
    customClass: {
      control: 'text',
      description: 'Custom CSS classes for the decorative line',
    },
  },
};

export default meta;

export const DecorativeLineStory = {
  args: {
    customClass: 'bg-gradient-to-l from-white/0 to-white absolute bottom-0 left-0 right-0 h-[1px] w-full',
  },
  render: (args) => ({
    components: { DecorativeLine },
    setup() {
      return { args };
    },
    template: '<DecorativeLine :class="args.customClass" />',
  }),
};
