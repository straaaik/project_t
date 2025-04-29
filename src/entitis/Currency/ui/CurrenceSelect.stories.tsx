import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entitis/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectDark = Template.bind({});
CurrencySelectDark.args = {};
CurrencySelectDark.decorators = [StyleDecorator(Theme.DARK)];

export const CurrencySelectLight = Template.bind({});
CurrencySelectLight.args = {};
CurrencySelectLight.decorators = [StyleDecorator(Theme.LIGHT)];
