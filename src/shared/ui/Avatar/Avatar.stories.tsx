import { Meta, StoryFn } from '@storybook/react';
import  Avatar  from './Avatar';
import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof Avatar>;

const Template:StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const BigAvatar = Template.bind({});
BigAvatar.args = {
    size:150
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    size: 50
};
