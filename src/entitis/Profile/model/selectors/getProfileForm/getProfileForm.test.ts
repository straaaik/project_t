import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';

describe('getProfileForm', () => {
    test('should return error', () => {
        const form = {
            age: '18',
            city: 'Moscow',
            country: Country.Armenia,
            currency: Currency.RUB,
            first: 'Igor',
            lastname: 'Timofeev',
            username: 'stk',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
