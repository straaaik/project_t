import { ArticleDetails } from 'entitis/Article';
import { CommentList } from 'entitis/Comment';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleAboutPage.module.scss';
import { DynamicLoader, ReducersList } from 'shared/lib/components/DynamicLoader/DynamicLoader';
import { articleAboutCommentReducer, getArticleComments } from '../model/slice/ArticleAboutCommentSlice';
import { useSelector } from 'react-redux';
import { getCommentsError, getCommentsLoading } from '../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { useCallback } from 'react';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';

const reducers: ReducersList = {
    articleDetailsComments: articleAboutCommentReducer,
};

export default function ArticleAboutPage() {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getCommentsLoading);
    const commentsIsError = useSelector(getCommentsError);
    const navigate = useNavigate();

    const onBackArticleList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    if (!id) return <div>{t('Статья не найдена')}</div>;

    return (
        <DynamicLoader reducers={reducers} removeAfterUnmount>
            <div>
                <Button onClick={onBackArticleList}>{t('Назад к списку')}</Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicLoader>
    );
}
