import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {
    theme: Theme.DARK,
};
ThemeSwitcherDark.decorators = [StyleDecorator(Theme.DARK)];

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {
    theme: Theme.LIGHT,
};
ThemeSwitcherLight.decorators = [StyleDecorator(Theme.LIGHT)];
