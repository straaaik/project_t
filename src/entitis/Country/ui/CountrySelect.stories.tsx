import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entitis/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CountrySelectDark = Template.bind({});
CountrySelectDark.args = {};
CountrySelectDark.decorators = [StyleDecorator(Theme.DARK)];

export const CountrySelectLight = Template.bind({});
CountrySelectLight.args = {};
CountrySelectLight.decorators = [StyleDecorator(Theme.LIGHT)];
