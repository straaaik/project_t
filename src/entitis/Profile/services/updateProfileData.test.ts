import { Country } from 'entitis/Country';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/config/test/testAsyncThunk/testAsyncThunk';
import { Currency } from 'entitis/Currency';
import { ValidateProfileError } from '../model/types/profile';

const data = {
    id: '1',
    age: '18',
    city: 'Moscow',
    country: Country.Armenia,
    currency: Currency.RUB,
    first: 'Igor',
    lastname: 'Timofeev',
    username: 'stk',
};

describe('updateProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } });

        thunk.api.put.mockReturnValue(Promise.resolve());

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, username: '' } } });

        thunk.api.put.mockReturnValue(Promise.resolve());

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });
});
