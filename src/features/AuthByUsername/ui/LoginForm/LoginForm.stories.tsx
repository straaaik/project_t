import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { LoginForm } from './LoginForm';

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
LoginFormDark.decorators = [StyleDecorator(Theme.DARK)];

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {};
LoginFormLight.decorators = [StyleDecorator(Theme.LIGHT)];
