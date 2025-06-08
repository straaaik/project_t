import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicLoader, ReducersList } from 'shared/lib/components/DynamicLoader/DynamicLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from 'entitis/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entitis/Article/model/selectors/articleDetails';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticlesBlockType } from 'entitis/Article/model/types/types';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticlesBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
            case ArticlesBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
            case ArticlesBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} height={200} width={200} border="50%" />
                <Skeleton className={cls.title} height={36} width={400} />
                <Skeleton className={cls.skeleton} height={24} width={600} />
                <Skeleton className={cls.skeleton} height={500} width="100%" />
                <Skeleton className={cls.skeleton} height={500} width="100%" />
            </>
        );
    } else if (error) {
        content = <Text theme={TextTheme.ERROR} align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи')} />;
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar className={cls.avatar} size={AvatarSize.XL} image={article?.img} />
                </div>
                <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                <div>{article?.blocks.map(renderBlock)}</div>
            </>
        );
    }

    return (
        <DynamicLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
        </DynamicLoader>
    );
});
