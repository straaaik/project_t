import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { DynamicLoader, ReducersList } from 'shared/lib/components/DynamicLoader/DynamicLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entitis/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfileCardHeader } from './ProfileCardHeader/ProfileCardHeader';
import { Country } from 'entitis/Country/model/types/Country';
import { Currency } from 'entitis/Currency/model/types/Currency';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateError = useSelector(getProfileValidateError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData());
    }, [dispatch]);

    const validateErrorTranslate = {
        [ValidateProfileError.INCORRECT_AGE]: t('Возраст указан неверно'),
        [ValidateProfileError.INCORRECT_FIRST_NAME]: t('Имя не указано'),
        [ValidateProfileError.INCORRECT_LAST_NAME]: t('Фамилия не указана'),
        [ValidateProfileError.INCORRECT_USERNAME]: t('Никнейм не указан'),
        [ValidateProfileError.NO_DATA]: t('Данные не получены'),
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
    };

    const onChangeFirstName = (value: string) => {
        dispatch(profileActions.updateData({ first: value }));
    };

    const onChangeLastName = (value: string) => {
        dispatch(profileActions.updateData({ lastname: value }));
    };

    const onChangeAge = (value: string) => {
        const currentValue = value.replace(/[^0-9]/g, '');
        dispatch(profileActions.updateData({ age: currentValue }));
    };
    const onChangeAvatar = (value: string) => {
        dispatch(profileActions.updateData({ avatar: value }));
    };
    const onChangeCity = (value: string) => {
        dispatch(profileActions.updateData({ city: value }));
    };
    const onChangeCountry = (country: Country) => {
        dispatch(profileActions.updateData({ country }));
    };
    const onChangeCurrency = (currency: Currency) => {
        dispatch(profileActions.updateData({ currency }));
    };
    const onChangeUsername = (value: string) => {
        dispatch(profileActions.updateData({ username: value }));
    };

    return (
        <DynamicLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCardHeader />
                {validateError && validateError.map((err) => <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslate[err]} />)}
                <ProfileCard
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeAge={onChangeAge}
                    onChangeLastName={onChangeLastName}
                    onChangeFirstName={onChangeFirstName}
                    data={formData}
                    error={error}
                    isLoading={isLoading}
                    readonly={readOnly}
                />
            </div>
        </DynamicLoader>
    );
};

export default ProfilePage;
