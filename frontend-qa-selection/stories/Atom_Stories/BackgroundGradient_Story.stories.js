import BackgroundGradient from "~/components/atoms/BackgroundGradient.vue";

const meta = {
  title: 'Atoms/BackgroundGradient',
  component: BackgroundGradient,
  tags: ['autodocs'],
};

export default meta;

export const BackgroundGradientStory = {
  render: () => ({
    components: { BackgroundGradient },
    template: '<BackgroundGradient />',
  }),
};
