import { Meta, StoryFn } from '@storybook/react';
import { AppLinks, AppLinksTheme } from './AppLinks';
import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark';

export default {
    title: 'shared/AppLink',
    component: AppLinks,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLinks>;

const Template:StoryFn<typeof AppLinks> = (args) => <AppLinks {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinksTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinksTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: AppLinksTheme.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinksTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecoratorDark];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinksTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecoratorDark];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    theme: AppLinksTheme.RED,
};
RedDark.decorators = [ThemeDecoratorDark];
