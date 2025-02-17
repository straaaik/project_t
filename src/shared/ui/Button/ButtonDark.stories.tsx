import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Темная тема

export const ButtonDarkClear = Template.bind({});
ButtonDarkClear.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
ButtonDarkClear.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonDarkDanger = Template.bind({});
ButtonDarkDanger.args = {
    children: 'Button',
    theme: ThemeButton.DANGER,
};
ButtonDarkDanger.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonDarkOutline = Template.bind({});
ButtonDarkOutline.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
ButtonDarkOutline.decorators = [StyleDecorator(Theme.DARK)];

// Светлая тема

export const ButtonLightClear = Template.bind({});
ButtonLightClear.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
ButtonLightClear.decorators = [StyleDecorator(Theme.LIGHT)];
export const ButtonLightDanger = Template.bind({});
ButtonLightDanger.args = {
    children: 'Button',
    theme: ThemeButton.DANGER,
};
ButtonLightDanger.decorators = [StyleDecorator(Theme.LIGHT)];

export const ButtonLightOutline = Template.bind({});
ButtonLightOutline.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
ButtonLightOutline.decorators = [StyleDecorator(Theme.LIGHT)];
