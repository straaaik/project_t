import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { CommentList } from './CommentList';

export default {
    title: 'entitis/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const comments = [
    {
        id: '1',
        text: 'Comment',
        user: {
            id: '1',
            username: 'User',
            avatar: '',
        },
    },
    {
        id: '1',
        text: 'Comment 2',
        user: {
            id: '1',
            username: 'Vitos',
            avatar: '',
        },
    },
];

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const CommentListDark = Template.bind({});
CommentListDark.args = {
    comments,
};
CommentListDark.decorators = [StyleDecorator(Theme.DARK)];

export const CommentListDarkLoading = Template.bind({});
CommentListDarkLoading.args = {
    isLoading: true,
};
CommentListDarkLoading.decorators = [StyleDecorator(Theme.DARK)];

export const CommentListLight = Template.bind({});
CommentListLight.args = {
    comments,
};
CommentListLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const CommentListLightLoading = Template.bind({});
CommentListLightLoading.args = {
    isLoading: true,
};
CommentListLightLoading.decorators = [StyleDecorator(Theme.LIGHT)];
