import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { memo } from 'react';
import { IComment } from 'entitis/Comment/model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation('articles');

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => <CommentCard isLoading={isLoading} key={comment.id} className={cls.comment} comment={comment} />)
            ) : (
                <Text text={t('Комментарии отсутствуют')} />
            )}
        </div>
    );
});
