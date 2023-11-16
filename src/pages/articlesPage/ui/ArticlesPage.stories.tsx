import { Meta, StoryFn } from "@storybook/react";
import { Theme } from "app/provider/themeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark";
import  ArticledPage  from "./ArticlesPage";

export default {
    title: 'pages/ArticledPage',
    component: ArticledPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticledPage>;

const Template: StoryFn<typeof ArticledPage> = (args) => <ArticledPage {...args} />;

export const Light = Template.bind({});
Light.args = {
    
};
Light.decorators = [StoreDecorator({

})];
export const Dark = Template.bind({});
Dark.args = {
    
};
Dark.decorators = [ThemeDecoratorDark, StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({
    user: { authData: { id: 0, username: '' } },
})];
