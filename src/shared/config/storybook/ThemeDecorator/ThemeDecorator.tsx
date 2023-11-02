import { StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { Decorator } from '@storybook/react';

export const ThemeDecorator:Decorator = (Story, {parameters}) =>{  
    const {theme} = parameters
    return(
        <div className={`app ${theme}`}>
            <Story />
        </div>
    )}
;
