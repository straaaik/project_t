import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectDark = Template.bind({});
SelectDark.args = {
    title: 'Выберите значение',
    options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
    ],
};
SelectDark.decorators = [StyleDecorator(Theme.DARK)];

export const SelectLight = Template.bind({});
SelectLight.args = {
    title: 'Выберите значение',
    options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
    ],
};
SelectLight.decorators = [StyleDecorator(Theme.LIGHT)];
