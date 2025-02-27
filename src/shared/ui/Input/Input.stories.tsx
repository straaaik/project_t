import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDark = Template.bind({});
InputDark.args = {
    value: 'Какой-то текст',
    placeholder: 'Инпут',
};
InputDark.decorators = [StyleDecorator(Theme.DARK)];

export const InputLight = Template.bind({});
InputLight.args = {
    value: 'Какой-то текст',
    placeholder: 'Инпут',
};
InputLight.decorators = [StyleDecorator(Theme.LIGHT)];
