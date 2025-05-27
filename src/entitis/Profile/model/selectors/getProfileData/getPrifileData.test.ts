import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entitis/Country';
import { Currency } from 'entitis/Currency';

describe('getProfileData', () => {
    test('should return data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
