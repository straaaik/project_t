import { Profile, ValidateProfileError } from '../model/types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { first, lastname, age, username } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first) {
        errors.push(ValidateProfileError.INCORRECT_FIRST_NAME);
    }
    if (!lastname) {
        errors.push(ValidateProfileError.INCORRECT_LAST_NAME);
    }
    if (!age) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    return errors;
};
