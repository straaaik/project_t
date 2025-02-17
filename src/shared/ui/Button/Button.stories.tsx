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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonDark = Template.bind({});
ButtonDark.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
ButtonDark.decorators = [StyleDecorator(Theme.DARK)];

export const ButtonLight = Template.bind({});
ButtonLight.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
ButtonLight.decorators = [StyleDecorator(Theme.LIGHT)];
