import TopBar from "~/components/organisms/TopBar.vue";

export default {
  title: 'Organisms/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  argTypes: {
    buttonText: {
      control: { type: 'text' },
      description: 'Text for the join button',
      defaultValue: 'Join Us',
    },
    buttonIcon: {
      control: { type: 'text' },
      description: 'Icon class for the button',
      defaultValue: 'fa-user-plus',
    },
  },
};

const Template = (args) => ({
  components: { TopBar },
  setup() {
    return { args };
  },
  template: `
    <div>
      <TopBar v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Join Us',
  buttonIcon: 'fa-user-plus',
};
