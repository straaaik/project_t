import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Avatar } from './Avatar';

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
    image: 'https://cdn1.flamp.ru/4229585e87897ca9d895ded85fc57006.png',
};
AvatarDark.decorators = [StyleDecorator(Theme.DARK)];

export const AvatarLight = Template.bind({});
AvatarLight.args = {
    image: 'https://cdn1.flamp.ru/4229585e87897ca9d895ded85fc57006.png',
};
AvatarLight.decorators = [StyleDecorator(Theme.LIGHT)];
