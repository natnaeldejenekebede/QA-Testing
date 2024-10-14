import BorderLine from "~/components/atoms/BorderLine.vue";

const meta = {
  title: 'Atoms/BorderLine',
  component: BorderLine,
  tags: ['autodocs'],
};

export default meta;

export const BorderLineStory = {
  render: () => ({
    components: { BorderLine },
    template: '<BorderLine />',
  }),
};
