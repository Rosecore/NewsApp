import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecoratorDark];

