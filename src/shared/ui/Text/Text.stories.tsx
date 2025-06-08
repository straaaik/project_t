import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Text, TextSize, TextTheme } from './Text';
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

export const TitleTextDarkL = Template.bind({});
TitleTextDarkL.args = {
    title: 'Заголовок',
    text: 'Описание',
    size: TextSize.L,
};
TitleTextDarkL.decorators = [StyleDecorator(Theme.DARK)];

export const TitleTextDarkM = Template.bind({});
TitleTextDarkM.args = {
    title: 'Заголовок',
    text: 'Описание',
    size: TextSize.M,
};
TitleTextDarkM.decorators = [StyleDecorator(Theme.DARK)];

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

export const TitleTextLightL = Template.bind({});
TitleTextLightL.args = {
    title: 'Заголовок',
    text: 'Описание',
    size: TextSize.L,
};
TitleTextLightL.decorators = [StyleDecorator(Theme.LIGHT)];

export const TitleTextLightM = Template.bind({});
TitleTextLightM.args = {
    title: 'Заголовок',
    text: 'Описание',
    size: TextSize.M,
};
TitleTextLightM.decorators = [StyleDecorator(Theme.LIGHT)];
