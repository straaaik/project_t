import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

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
NavbarDark.decorators = [StyleDecorator(Theme.DARK), StoreDecorator({})];

export const NavbarDarkLogin = Template.bind({});
NavbarDarkLogin.args = {};
NavbarDarkLogin.decorators = [StyleDecorator(Theme.DARK), StoreDecorator({})];

//----------------------------------

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
NavbarLight.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } })];

export const NavbarLightLogin = Template.bind({});
NavbarLightLogin.args = {};
NavbarLightLogin.decorators = [StyleDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
