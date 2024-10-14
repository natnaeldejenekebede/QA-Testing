import TransitionState from "~/components/organisms/TransitionState.vue";

export default {
  title: 'Organisms/TransitionState',
  component: TransitionState,
  tags: ['autodocs'],
  argTypes: {
    leftImageSrc: {
      control: { type: 'text' },
      description: 'Source for the left image',
      defaultValue: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png',
    },
    rightImageSrc: {
      control: { type: 'text' },
      description: 'Source for the right image',
      defaultValue: 'lock.svg',
    },
  },
};

const Template = (args) => ({
  components: { TransitionState },
  setup() {
    return { args };
  },
  template: '<TransitionState v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  leftImageSrc: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png',
  rightImageSrc: 'lock.svg',
};
