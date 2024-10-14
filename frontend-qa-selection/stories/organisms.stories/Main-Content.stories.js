import MainContent from "~/components/organisms/MainContent.vue";

export default {
  title: 'Organisms/MainContent',
  component: MainContent,
  tags: ['autodocs'],
  argTypes: {
    headerText: {
      control: { type: 'text' },
      description: 'Text displayed in the header',
      defaultValue: 'E-learning Revolution 2',
    },
    descriptionText: {
      control: { type: 'text' },
      description: 'Description text for the content section',
      defaultValue: 'We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers',
    },
    anchorUrl: {
      control: { type: 'text' },
      description: 'URL for the anchor button',
      defaultValue: '/courses',
    },
    anchorText: {
      control: { type: 'text' },
      description: 'Text displayed on the anchor button',
      defaultValue: 'Go to Marketplace',
    },
  },
};

const Template = (args) => ({
  components: { MainContent },
  setup() {
    return { args };
  },
  template: '<MainContent :headerText="args.headerText" :descriptionText="args.descriptionText" :anchorUrl="args.anchorUrl" :anchorText="args.anchorText" />',
});

export const Default = Template.bind({});
Default.args = {
  headerText: 'E-learning Revolution 2',
  descriptionText: 'We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers',
  anchorUrl: '/courses',
  anchorText: 'Go to Marketplace',
};
