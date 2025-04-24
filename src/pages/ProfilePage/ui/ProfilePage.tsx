import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { DynamicLoader, ReducersList } from 'shared/lib/components/DynamicLoader/DynamicLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entitis/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicLoader>
    );
};

export default ProfilePage;
