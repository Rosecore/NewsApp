import { Meta, StoryFn } from "@storybook/react";
import { Theme } from "app/provider/themeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark";
import { ArticleTextBlockComponents } from "./ArticleTextBlockComponents";

export default {
    title: 'entities/ArticleTextBlockComponents',
    component: ArticleTextBlockComponents,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleTextBlockComponents>;

const Template: StoryFn<typeof ArticleTextBlockComponents> = (args) => <ArticleTextBlockComponents {...args} />;

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
