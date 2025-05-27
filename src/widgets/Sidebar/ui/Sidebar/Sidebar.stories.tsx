import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarDark = Template.bind({});
SidebarDark.args = {};
SidebarDark.decorators = [StyleDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];

export const SidebarLight = Template.bind({});
SidebarLight.args = {};
SidebarLight.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } })];

export const SidebarNoAuth = Template.bind({});
SidebarNoAuth.args = {};
SidebarNoAuth.decorators = [StyleDecorator(Theme.LIGHT), StoreDecorator({})];
