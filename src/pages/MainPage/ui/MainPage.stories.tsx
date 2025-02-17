import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
    <MainPage {...args} />
);

export const MainPageDark = Template.bind({});
MainPageDark.args = {};
MainPageDark.decorators = [StyleDecorator(Theme.DARK)];

export const MainPageLight = Template.bind({});
MainPageLight.args = {};
MainPageLight.decorators = [StyleDecorator(Theme.LIGHT)];
