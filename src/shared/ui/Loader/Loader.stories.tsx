import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [StyleDecorator(Theme.DARK)];

export const LoaderLight = Template.bind({});
LoaderLight.args = {};
LoaderLight.decorators = [StyleDecorator(Theme.LIGHT)];
