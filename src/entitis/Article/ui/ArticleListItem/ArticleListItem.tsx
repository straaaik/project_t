import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo, useCallback } from 'react';
import { Article, ArticlesBlockType, ArticleTextBlock, ArticleView } from 'entitis/Article/model/types/types';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import viewIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('articles');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_about + article.id);
    }, [navigate, article.id]);

    if (view === ArticleView.BIG) {
        const textContent = article.blocks.find((block) => block.type === ArticlesBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.user}>
                        <Avatar image={article.user?.avatar} />
                        <Text text={article.user?.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.title}>
                        <Text text={article.type.join(' ,')} className={cls.type} />
                        <Text size={TextSize.L} text={article.title} />
                    </div>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} alt={article.title} className={cls.img} />
                    </div>
                    {textContent && <ArticleTextBlockComponent block={textContent} className={cls.textBlock} />}
                    <div className={cls.info}>
                        <Button onClick={onOpenArticle}>{t('Читать далее')}</Button>
                        <Text text={article.views.toString()} className={cls.view} />
                        <Icon Svg={viewIcon} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <Text text={article.createdAt} className={cls.date} />
                    <img src={article.img} alt={article.title} className={cls.img} />
                </div>
                <div className={cls.info}>
                    <Text text={article.type.join(' ,')} className={cls.type} />
                    <Text text={article.views.toString()} className={cls.view} />
                    <Icon Svg={viewIcon} />
                </div>
                <div className={cls.title}>
                    <Text text={article.title} />
                </div>
            </Card>
        </div>
    );
});
