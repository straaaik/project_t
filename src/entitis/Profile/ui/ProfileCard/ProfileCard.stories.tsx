import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardDarkIsLoading = Template.bind({});
ProfileCardDarkIsLoading.args = {
    isLoading: true,
};
ProfileCardDarkIsLoading.decorators = [StyleDecorator(Theme.DARK)];

export const ProfileCardDarkError = Template.bind({});
ProfileCardDarkError.args = {
    error: 'Ошибка',
};
ProfileCardDarkError.decorators = [StyleDecorator(Theme.DARK)];

export const ProfileCardDark = Template.bind({});
ProfileCardDark.args = {
    data: {
        age: '18',
        avatar,
        city: 'Moscow',
        country: Country.Armenia,
        currency: Currency.RUB,
        first: 'Igor',
        lastname: 'Timofeev',
        username: 'stk',
    },
};
ProfileCardDark.decorators = [StyleDecorator(Theme.DARK)];

export const ProfileCardLight = Template.bind({});
ProfileCardLight.args = {
    data: {
        age: '18',
        avatar,
        city: 'Moscow',
        country: Country.Armenia,
        currency: Currency.RUB,
        first: 'Igor',
        lastname: 'Timofeev',
        username: 'stk',
    },
};
ProfileCardLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const ProfileCardLightIsLoading = Template.bind({});
ProfileCardLightIsLoading.args = {
    isLoading: true,
};
ProfileCardLightIsLoading.decorators = [StyleDecorator(Theme.LIGHT)];

export const ProfileCardLightError = Template.bind({});
ProfileCardLightError.args = {
    error: 'Ошибка',
};
ProfileCardLightError.decorators = [StyleDecorator(Theme.LIGHT)];
