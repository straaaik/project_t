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
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ThemeSwitcher {...args} />
);

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {};
ThemeSwitcherDark.decorators = [StyleDecorator(Theme.DARK)];

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {};
ThemeSwitcherLight.decorators = [StyleDecorator(Theme.LIGHT)];
