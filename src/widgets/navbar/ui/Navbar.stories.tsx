import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/provider/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {
    theme: Theme.LIGHT
};
Light.decorators = [StoreDecorator({

})];
export const Dark = Template.bind({});
Dark.args = {
    theme: Theme.DARK
};
Dark.decorators = [ThemeDecoratorDark, StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: { authData: { id: 0, username: '' } },
})];
