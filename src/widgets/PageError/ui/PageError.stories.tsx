import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/themeProvider';
import { PageError } from './PageError';

export default {
    title: 'widget/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {theme: Theme.LIGHT};

export const Dark = Template.bind({});
Dark.args = {theme: Theme.DARK};

Dark.decorators = [ThemeDecorator];
