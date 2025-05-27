import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Avatar } from './Avatar';
import image from './avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDark = Template.bind({});
AvatarDark.args = {
    image,
};
AvatarDark.decorators = [StyleDecorator(Theme.DARK)];

export const AvatarLight = Template.bind({});
AvatarLight.args = {
    image,
};
AvatarLight.decorators = [StyleDecorator(Theme.LIGHT)];
