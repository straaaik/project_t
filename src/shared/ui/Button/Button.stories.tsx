import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
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

export const ButtonSizeL = Template.bind({});
ButtonSizeL.args = {
    children: '||',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
ButtonSizeL.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonSizeM = Template.bind({});
ButtonSizeM.args = {
    children: '||',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};
ButtonSizeM.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonSizeXl = Template.bind({});
ButtonSizeXl.args = {
    children: '||',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
ButtonSizeXl.decorators = [StyleDecorator(Theme.DARK)];

// Темная тема

export const ButtonDarkClear = Template.bind({});
ButtonDarkClear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};
ButtonDarkClear.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonDarkClearInverted = Template.bind({});
ButtonDarkClearInverted.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
};
ButtonDarkClearInverted.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonDarkDanger = Template.bind({});
ButtonDarkDanger.args = {
    children: 'Button',
    theme: ButtonTheme.DANGER,
};
ButtonDarkDanger.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonDarkOutline = Template.bind({});
ButtonDarkOutline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
ButtonDarkOutline.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonDarkBackground = Template.bind({});
ButtonDarkBackground.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
};
ButtonDarkBackground.decorators = [StyleDecorator(Theme.DARK)];
export const ButtonDarkBackgroundInverted = Template.bind({});
ButtonDarkBackgroundInverted.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
ButtonDarkBackgroundInverted.decorators = [StyleDecorator(Theme.DARK)];

// Светлая тема

export const ButtonLightClear = Template.bind({});
ButtonLightClear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};
ButtonLightClear.decorators = [StyleDecorator(Theme.LIGHT)];
export const ButtonLightClearInverted = Template.bind({});
ButtonLightClearInverted.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
};
ButtonLightClearInverted.decorators = [StyleDecorator(Theme.LIGHT)];
export const ButtonLightDanger = Template.bind({});
ButtonLightDanger.args = {
    children: 'Button',
    theme: ButtonTheme.DANGER,
};
ButtonLightDanger.decorators = [StyleDecorator(Theme.LIGHT)];

export const ButtonLightOutline = Template.bind({});
ButtonLightOutline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
ButtonLightOutline.decorators = [StyleDecorator(Theme.LIGHT)];

export const ButtonLightBackground = Template.bind({});
ButtonLightBackground.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
};
ButtonLightBackground.decorators = [StyleDecorator(Theme.LIGHT)];
export const ButtonLightBackgroundInverted = Template.bind({});
ButtonLightBackgroundInverted.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
ButtonLightBackgroundInverted.decorators = [StyleDecorator(Theme.LIGHT)];
