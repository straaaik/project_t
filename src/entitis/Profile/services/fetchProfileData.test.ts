import { Country } from 'entitis/Country';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/config/test/testAsyncThunk/testAsyncThunk';
import { Currency } from 'entitis/Currency';

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

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
