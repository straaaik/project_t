import { ArticleDetails } from 'entitis/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function ArticleAboutPage() {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();

    if (!id) return <div>{t('Статья не найдена')}</div>;

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
}
