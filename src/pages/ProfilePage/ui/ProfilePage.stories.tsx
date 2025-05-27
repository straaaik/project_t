import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [
    StyleDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                age: '18',
                avatar,
                city: 'Moscow',
                country: Country.Armenia,
                currency: Currency.RUB,
                first: 'Igor',
                lastname: 'Timofeev',
                username: 'stk',
            },
        },
    }),
];

export const ProfilePageLight = Template.bind({});
ProfilePageLight.args = {};
ProfilePageLight.decorators = [
    StyleDecorator(Theme.LIGHT),
    StoreDecorator({
        profile: {
            form: {
                age: '18',
                avatar,
                city: 'Moscow',
                country: Country.Armenia,
                currency: Currency.RUB,
                first: 'Igor',
                lastname: 'Timofeev',
                username: 'stk',
            },
        },
    }),
];
