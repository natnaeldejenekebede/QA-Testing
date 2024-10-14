import SocialTransition from "~/components/molecules/SocialTransition.vue";

export default {
  title: 'Molecules/SocialTransition',
  component: SocialTransition,
  tags: ['autodocs'],
  argTypes: {
    iconClass: {
      control: 'text',
      description: 'CSS classes for the FontAwesome icon',
      defaultValue: 'fa-regular fa-arrow-right text-xl',
    },
    imageSrc: {
      control: 'text',
      description: 'Source URL for the image',
      defaultValue: 'envelope.svg',
    },
  },
};

const Template = (args) => ({
  components: { SocialTransition },
  setup() {
    return { args };
  },
  template: '<SocialTransition v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  iconClass: 'fa-regular fa-arrow-right text-xl',
  imageSrc: 'envelope.svg',
};
