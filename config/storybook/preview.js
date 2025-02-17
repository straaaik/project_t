import { addDecorator } from '@storybook/react';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(RouteDecorator);
