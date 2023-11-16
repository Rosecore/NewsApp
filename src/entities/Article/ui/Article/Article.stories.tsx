import { Meta, StoryFn } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecoratorDark } from "shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark";
import { Article } from "./Article";

export default {
    title: 'entities/Article',
    component: Article,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Article>;

const Template: StoryFn<typeof Article> = (args) => <Article {...args} />;

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
