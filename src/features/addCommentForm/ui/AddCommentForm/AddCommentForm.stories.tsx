import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import AddCommentForm from './AddCommentForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = () => <AddCommentForm onSendComment={() => {}} />;

export const AddCommentFormDark = Template.bind({});
AddCommentFormDark.args = {};
AddCommentFormDark.decorators = [
    StyleDecorator(Theme.DARK),
    StoreDecorator({
        addCommentForm: {
            text: '',
        },
    }),
];

export const AddCommentFormLight = Template.bind({});
AddCommentFormLight.args = {};
AddCommentFormLight.decorators = [
    StyleDecorator(Theme.LIGHT),
    StoreDecorator({
        addCommentForm: {
            text: '',
        },
    }),
];
