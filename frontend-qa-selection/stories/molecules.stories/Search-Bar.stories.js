import SearchBar from "~/components/molecules/SearchBar.vue";


export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input field',
      defaultValue: 'Search courses...',
    },
    maxlength: {
      control: 'number',
      description: 'Maximum length for the search input field',
      defaultValue: 100,
    },
    iconClass: {
      control: 'text',
      description: 'CSS class for the search icon',
      defaultValue: 'fa-magnifying-glass text-xs',
    },
    closeIconClass: {
      control: 'text',
      description: 'CSS class for the optional close icon',
      defaultValue: 'fa-circle-xmark hidden',
    },
  },
};

const Template = (args) => ({
  components: { SearchBar },
  setup() {
    return { args };
  },
  template: '<SearchBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search courses...',
  maxlength: 100,
  iconClass: 'fa-magnifying-glass text-xs',
  closeIconClass: 'fa-circle-xmark hidden',
};
