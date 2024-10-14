import Image from "~/components/atoms/Image.vue";

const meta = {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Source URL of the image' },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS classes for additional styling',
    },
  },
};

export default meta;

export const ImageStory = {
  args: {
    src: 'https://via.placeholder.com/150', // Default image URL
    alt: 'Placeholder Image', // Default alt text
    customClass: 'rounded-lg', // Example custom class for styling
  },
  render: (args) => ({
    components: { Image },
    setup() {
      return { args };
    },
    template: '<Image :src="args.src" :alt="args.alt" :customClass="args.customClass" />',
  }),
};
