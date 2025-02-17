import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Ссылка',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const AppLinkDark = Template.bind({});
AppLinkDark.args = {
    theme: AppLinkTheme.PRIMARY,
};
AppLinkDark.decorators = [StyleDecorator(Theme.DARK)];

export const AppLinkLight = Template.bind({});
AppLinkLight.args = {
    theme: AppLinkTheme.PRIMARY,
};
AppLinkLight.decorators = [StyleDecorator(Theme.LIGHT)];
