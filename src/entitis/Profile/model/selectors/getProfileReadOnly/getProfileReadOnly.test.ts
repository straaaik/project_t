import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
    test('should return error', () => {
        const readonly = true;
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(readonly);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
