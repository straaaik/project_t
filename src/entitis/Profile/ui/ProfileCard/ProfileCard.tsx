import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entitis/Currency';
import { Profile } from 'entitis/Profile';
import { Country, CountrySelect } from 'entitis/Country';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastName?: (value: string) => void;
    onChangeFirstName?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeCountry?: (country: Country) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeCity,
    onChangeLastName,
    onChangeCountry,
    onChangeCurrency,
    onChangeAvatar,
    onChangeAge,
    onChangeUsername,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t('Произошла ошибка')} text={t('Попробуйте обновить страницу')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])}>
            <div className={cls.avatarWrapper}>{data?.avatar && <Avatar image={data?.avatar} size={AvatarSize.XL} />}</div>
            <div className={cls.selectWrapper}>
                <CountrySelect className={cls.input} readOnly={readonly} onChange={onChangeCountry} value={data?.country} />
                <CurrencySelect className={cls.input} readOnly={readonly} onChange={onChangeCurrency} value={data?.currency} />
            </div>
            <div className={cls.main}>
                <Input readOnly={readonly} onChange={onChangeUsername} className={cls.input} placeholder={t('Никнейм')} value={data?.username} />
                <Input readOnly={readonly} onChange={onChangeFirstName} className={cls.input} placeholder={t('Имя')} value={data?.first} />
                <Input readOnly={readonly} onChange={onChangeLastName} className={cls.input} placeholder={t('Фамилия')} value={data?.lastname} />
                <Input readOnly={readonly} onChange={onChangeAge} className={cls.input} placeholder={t('Возраст')} value={data?.age} />
                <Input readOnly={readonly} onChange={onChangeCity} className={cls.input} placeholder={t('Город')} value={data?.city} />
                <Input readOnly={readonly} onChange={onChangeAvatar} className={cls.input} placeholder={t('Аватар')} value={data?.avatar} />
            </div>
        </div>
    );
};
