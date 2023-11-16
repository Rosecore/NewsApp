import { Meta, StoryFn } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfileCard from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export default {
    title: 'entities/Profile',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: "Masha",
        lastname: "Reynsvortdfsdf",
        age: 223,
        currency: Currency.DIN,
        country: Country.SR,
        city: "Beograde",
        username: "admin",
        avatar: "https://ru.myanimeshelf.com/upload/dynamic/2011-04/05/sbddb2.jpg"
    },
};


export const withError = Template.bind({});
withError.args = {
    error:'true'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading:true
};

