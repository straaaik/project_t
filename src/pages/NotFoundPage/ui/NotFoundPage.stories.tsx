import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
    <NotFoundPage {...args} />
);

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {};
NotFoundPageDark.decorators = [StyleDecorator(Theme.DARK)];

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};
NotFoundPageLight.decorators = [StyleDecorator(Theme.LIGHT)];
