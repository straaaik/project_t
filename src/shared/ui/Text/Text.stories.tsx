import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Text, TextTheme } from './Text';
import { title } from 'process';
import { Theme } from 'app';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextDark = Template.bind({});
TextDark.args = {
    text: 'Описание',
};
TextDark.decorators = [StyleDecorator(Theme.DARK)];

export const TitleDark = Template.bind({});
TitleDark.args = {
    title: 'Заголовок',
};
TitleDark.decorators = [StyleDecorator(Theme.DARK)];

export const TitleTextDark = Template.bind({});
TitleTextDark.args = {
    title: 'Заголовок',
    text: 'Описание',
};
TitleTextDark.decorators = [StyleDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Заголовок',
    text: 'Описание',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [StyleDecorator(Theme.DARK)];

// -----------------------------------------------------------------

export const TitleTextLight = Template.bind({});
TitleTextLight.args = {
    title: 'Заголовок',
    text: 'Описание',
};
TitleTextLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const TextLight = Template.bind({});
TextLight.args = {
    text: 'Описание',
};
TextLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const TitleLight = Template.bind({});
TitleLight.args = {
    title: 'Заголовок',
};
TitleLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const ErrorLight = Template.bind({});
ErrorLight.args = {
    title: 'Заголовок',
    text: 'Описание',
    theme: TextTheme.ERROR,
};
ErrorLight.decorators = [StyleDecorator(Theme.LIGHT)];
