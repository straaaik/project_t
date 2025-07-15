import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { memo } from 'react';
import { Article, ArticleView } from 'entitis/Article/model/types/types';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo(({ className, articles, isLoading, view = ArticleView.SMALL }: ArticleListProps) => {
    if (isLoading) {
        const loadingCards = 10;
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                {new Array(loadingCards).fill(null).map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ArticleListItemSkeleton view={view} key={i} />
                ))}
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} key={article.id} />;
    };

    return <div className={classNames(cls.ArticleList, {}, [className])}>{articles.length ? articles.map(renderArticle) : null}</div>;
});
