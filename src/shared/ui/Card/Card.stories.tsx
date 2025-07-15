import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardDark = Template.bind({});
CardDark.args = {
    children: <div>Card</div>,
};
CardDark.decorators = [StyleDecorator(Theme.DARK)];

export const CardLight = Template.bind({});
CardLight.args = {
    children: <div>Card</div>,
};
CardLight.decorators = [StyleDecorator(Theme.LIGHT)];
