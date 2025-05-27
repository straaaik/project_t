import { Country } from 'entitis/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entitis/Currency';
import { updateProfileData } from 'entitis/Profile/services/updateProfileData';

const data = {
    age: '18',
    city: 'Moscow',
    country: Country.Armenia,
    currency: Currency.RUB,
    first: 'Igor',
    lastname: 'Timofeev',
    username: 'stk',
};

describe('profileSlice', () => {
    test('test updateReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(state as ProfileSchema, profileActions.updateReadOnly(false))).toEqual({ readonly: false });
    });
    test('test updateData', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '12' } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateData({ username: 'TEST' }))).toEqual({
            data,
            form: {
                username: 'TEST',
            },
        });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '111' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({ readonly: true, data, form: data, validateError: undefined });
    });

    test('test updateData pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test updateData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true, data: {}, readonly: false };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
        });
    });
});
