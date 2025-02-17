import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { PageError } from './PageError';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
    <PageError {...args} />
);

export const PageErrorDark = Template.bind({});
PageErrorDark.args = {};
PageErrorDark.decorators = [StyleDecorator(Theme.DARK)];

export const PageErrorLight = Template.bind({});
PageErrorLight.args = {};
PageErrorLight.decorators = [StyleDecorator(Theme.LIGHT)];
