import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [StyleDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'username', password: 'password' } })];

export const LoginFormDarkError = Template.bind({});
LoginFormDarkError.args = {};
LoginFormDarkError.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: 'username', password: 'password', error: 'error' } })];

export const LoginFormDarkLoading = Template.bind({});
LoginFormDarkLoading.args = {};
LoginFormDarkLoading.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { isLoading: true } })];
//--------------------------------------
export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: 'username', password: 'password' } })];

export const LoginFormLightError = Template.bind({});
LoginFormLightError.args = {};
LoginFormLightError.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { username: 'username', password: 'password', error: 'error' } })];

export const LoginFormLightLoading = Template.bind({});
LoginFormLightLoading.args = {};
LoginFormLightLoading.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({ loginForm: { isLoading: true } })];
