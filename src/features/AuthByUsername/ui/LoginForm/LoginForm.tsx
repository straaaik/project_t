import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('translation');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Логин')} type="text" />
            <Input placeholder={t('Пароль')} type="text" />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
