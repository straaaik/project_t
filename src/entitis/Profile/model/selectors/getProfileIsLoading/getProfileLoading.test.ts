import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('should return error', () => {
        const isLoading = true;
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
