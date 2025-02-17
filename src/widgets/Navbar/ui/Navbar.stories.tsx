import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [StyleDecorator(Theme.DARK)];

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [StyleDecorator(Theme.LIGHT)];
