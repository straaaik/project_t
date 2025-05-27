import { Country } from 'entitis/Country';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'entitis/Currency';
import { ValidateProfileError } from '../model/types/profile';

const data = {
    age: '18',
    city: 'Moscow',
    country: Country.Armenia,
    currency: Currency.RUB,
    first: 'Igor',
    lastname: 'Timofeev',
    username: 'stk',
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_FIRST_NAME, ValidateProfileError.INCORRECT_LAST_NAME]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('no data', async () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('without username', async () => {
        const result = validateProfileData({ ...data, username: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_FIRST_NAME,
            ValidateProfileError.INCORRECT_LAST_NAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });
});
