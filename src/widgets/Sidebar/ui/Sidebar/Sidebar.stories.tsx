import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const SidebarDark = Template.bind({});
SidebarDark.args = {};
SidebarDark.decorators = [StyleDecorator(Theme.DARK)];

export const SidebarLight = Template.bind({});
SidebarLight.args = {};
SidebarLight.decorators = [StyleDecorator(Theme.LIGHT)];
