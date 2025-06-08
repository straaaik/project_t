import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const ArticlesPageDark = Template.bind({});
ArticlesPageDark.args = {};
ArticlesPageDark.decorators = [StyleDecorator(Theme.DARK)];

export const ArticlesPageLight = Template.bind({});
ArticlesPageLight.args = {};
ArticlesPageLight.decorators = [StyleDecorator(Theme.LIGHT)];
