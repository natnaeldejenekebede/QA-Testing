import Button from "~/components/atoms/Button.vue";

const meta = {
    title: 'Atoms/BaseButton',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked', description: 'Function triggered on button click' },
    },
};

export default meta;

export const BaseButtonStory = {
    args: {
        onClick: () => alert('Button clicked!'),
    },
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: '<Button @click="args.onClick">Click Me</Button>',
    }),
};
