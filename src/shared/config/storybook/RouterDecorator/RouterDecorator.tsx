import { Story, StoryFn, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Decorator } from '@storybook/react';

export const RouterDecorator:Decorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
