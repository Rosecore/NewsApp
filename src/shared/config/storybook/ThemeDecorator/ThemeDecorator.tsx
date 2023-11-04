import { StoryObj } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { Decorator } from '@storybook/react';

export const ThemeDecorator:Decorator = (Story, {args}) =>{  
    const {theme} = args
    return(
        <div className={`app ${theme}`}>
            <Story />
        </div>
    )}
;
