import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

export default function ArticlesPage() {
    const { t } = useTranslation('articles');

    return <div className={cls.ArticlesPage}>{t('Статьи')}</div>;
}
