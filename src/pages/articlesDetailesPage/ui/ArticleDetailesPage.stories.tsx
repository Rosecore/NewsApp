import { Meta, StoryFn } from "@storybook/react";
import { Theme } from "app/provider/themeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark";
import  ArticledDetailesPage  from "./ArticleDetailesPage";

export default {
    title: 'pages/ArticledDetailesPage',
    component: ArticledDetailesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticledDetailesPage>;

const Template: StoryFn<typeof ArticledDetailesPage> = (args) => <ArticledDetailesPage {...args} />;

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
