import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => (
    <AboutPage {...args} />
);

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [StyleDecorator(Theme.DARK)];

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};
AboutPageLight.decorators = [StyleDecorator(Theme.LIGHT)];
