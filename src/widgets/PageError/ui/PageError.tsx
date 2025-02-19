import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

// eslint-disable-next-line no-restricted-globals
const reloadPage = () => location.reload();

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <span>{t('Произошла ошибка')}</span>
            <Button theme={ButtonTheme.DANGER} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
