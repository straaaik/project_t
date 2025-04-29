import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { DynamicLoader, ReducersList } from 'shared/lib/components/DynamicLoader/DynamicLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entitis/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfileCardHeader } from './ProfileCardHeader/ProfileCardHeader';
import { Country } from 'entitis/Country/model/types/Country';
import { Currency } from 'entitis/Currency/model/types/Currency';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

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
