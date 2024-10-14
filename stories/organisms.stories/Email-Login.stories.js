import EmailLogIn from "~/components/organisms/EmailLogIn.vue";

export default {
  title: 'Organisms/EmailLogIn',
  component: EmailLogIn,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title displayed in the InfoBanner',
      defaultValue: 'Welcome to Aladial',
    },
    contentText: {
      control: { type: 'text' },
      description: 'The content text displayed in the InfoBanner',
      defaultValue: 'Create or access your account from here',
    },
    emailPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder for the email input',
      defaultValue: 'Email Address',
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Text for the action button',
      defaultValue: 'Enter',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Indicates if the action button is loading',
      defaultValue: false,
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'Indicates if there was an error during login',
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { EmailLogIn },
  setup() {
    return { args };
  },
  template: '<EmailLogIn v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Aladial',
  contentText: 'Create or access your account from here',
  emailPlaceholder: 'Email Address',
  buttonText: 'Enter',
  isLoading: false,
  hasError: false,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  title: 'Welcome to Aladial',
  contentText: 'Creating your account...',
  emailPlaceholder: 'Email Address',
  buttonText: 'Loading...',
  isLoading: true,
  hasError: false,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  title: 'Welcome to Aladial',
  contentText: 'There was an error processing your request.',
  emailPlaceholder: 'Email Address',
  buttonText: 'Try Again',
  isLoading: false,
  hasError: true,
};
