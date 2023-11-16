import { Meta, StoryFn } from '@storybook/react';
import  Select  from 'shared/ui/Select/Select';
import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecoratorDark/ThemeDecoratorDark';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value:'123'
};

export const Dark = Template.bind({});
Dark.args = {
    value:'123'
};
Dark.decorators = [ThemeDecoratorDark];
