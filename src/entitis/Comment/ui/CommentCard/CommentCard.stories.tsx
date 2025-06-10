import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { CommentCard } from './CommentCard';

export default {
    title: 'entitis/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const comment = {
    id: '1',
    text: 'Comment',
    user: {
        id: '1',
        username: 'User',
        avatar: '',
    },
};

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const CommentCardDark = Template.bind({});
CommentCardDark.args = {
    comment,
};
CommentCardDark.decorators = [StyleDecorator(Theme.DARK)];

export const CommentCardDarkLoading = Template.bind({});
CommentCardDarkLoading.args = {
    isLoading: true,
};
CommentCardDarkLoading.decorators = [StyleDecorator(Theme.DARK)];

export const CommentCardLight = Template.bind({});
CommentCardLight.args = {
    comment,
};
CommentCardLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const CommentCardLightLoading = Template.bind({});
CommentCardLightLoading.args = {
    isLoading: true,
};
CommentCardLightLoading.decorators = [StyleDecorator(Theme.LIGHT)];
