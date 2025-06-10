import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCardHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadOnly, profileActions, updateProfileData } from 'entitis/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { getUserData } from 'entitis/User';

interface ProfileCardHeaderProps {
    className?: string;
}

export const ProfileCardHeader = ({ className }: ProfileCardHeaderProps) => {
    const { t } = useTranslation('profile');
    const readOnly = useSelector(getProfileReadOnly);
    const authData = useSelector(getUserData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.updateReadOnly(false));
    }, [dispatch]);

    const onUpdate = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfileCardHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.wrapper}>
                    {readOnly ? (
                        <Button className={cls.editBtn} onClick={onEdit} theme={ButtonTheme.OUTLINE}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button className={cls.editBtn} onClick={onUpdate} theme={ButtonTheme.OUTLINE}>
                                {t('Сохранить')}
                            </Button>
                            <Button className={cls.editBtn} onClick={onCancel} theme={ButtonTheme.DANGER}>
                                {t('Отменить')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
