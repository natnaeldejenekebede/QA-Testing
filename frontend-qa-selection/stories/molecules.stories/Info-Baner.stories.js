import InfoBaner from "~/components/molecules/InfoBaner.vue";

const meta = {
  title: 'Molecules/InfoBanner',
  component: InfoBaner,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    imgSrc: {
      control: {
        type: 'text',
      },
    },
    contentText: {
      control: {
        type: 'text',
      },
    },
    customClass: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

// Template function to create a story
const Template = (args) => ({
  components: { InfoBaner },
  setup() {
    return { args };
  },
  template: '<InfoBanner v-bind="args" />',
});

// Default Info Banner
export const Default = Template.bind({});
Default.args = {
  title: "Welcome to Our Platform", // default title
  imgSrc: "https://via.placeholder.com/150", // default image source
  contentText: "Explore a variety of courses and resources.", // default content text
  customClass: "text-xl", // default custom class
};

// Customized Info Banner
export const Customized = Template.bind({});
Customized.args = {
  title: "Get Started!", // customized title
  imgSrc: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Logo", // customized image source
  contentText: "Join us today and unlock your potential!", // customized content text
  customClass: "text-lg text-yellow-500", // customized text class
};
