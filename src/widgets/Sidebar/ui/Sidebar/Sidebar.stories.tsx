import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/themeProvider';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args:any) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {theme: Theme.DARK};
Dark.decorators = [ThemeDecorator];
