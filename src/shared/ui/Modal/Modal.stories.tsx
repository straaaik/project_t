import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Какой-то текст',
};
ModalDark.decorators = [StyleDecorator(Theme.DARK)];

export const ModalLight = Template.bind({});
ModalLight.args = {
    isOpen: true,
    children: 'Какой-то текст',
};
ModalLight.decorators = [StyleDecorator(Theme.LIGHT)];
