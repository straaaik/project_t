import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const SkeletonDark = Template.bind({});
SkeletonDark.args = {
    height: 30,
    width: 100,
};
SkeletonDark.decorators = [StyleDecorator(Theme.DARK)];

export const SkeletonLight = Template.bind({});
SkeletonLight.args = {
    height: 30,
    width: 100,
};
SkeletonLight.decorators = [StyleDecorator(Theme.LIGHT)];
