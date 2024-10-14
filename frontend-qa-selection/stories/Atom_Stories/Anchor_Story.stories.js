import Anchor from "~/components/atoms/Anchor.vue";

const meta = {
  title: 'Atoms/Anchor',
  component: Anchor,
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: 'text',
      description: 'The URL that the anchor tag will point to.',
    },
    text: {
      control: 'text',
      description: 'The text displayed inside the anchor.',
    },
    customClass: {
      control: 'text',
      description: 'The CSS class applied to the anchor element.',
    },
  },
};

export default meta;

export const AnchorStory = {
  args: {
    url: 'https://www.google.com',
    text: 'Google',
    customClass: 'inline-block cursor-pointer rounded-md bg-black px-4 py-3 text-white',
  },
  render: (args) => ({
    components: { Anchor },
    setup() {
      return { args };
    },
    template: '<Anchor :url="args.url" :text="args.text" :class="args.customClass" />',
  }),
};
