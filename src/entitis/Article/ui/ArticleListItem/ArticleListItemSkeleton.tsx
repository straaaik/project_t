import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { memo } from 'react';
import { ArticleView } from 'entitis/Article/model/types/types';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.user}>
                        <Skeleton width={50} border="50%" height={50} />
                        <Skeleton width={100} height={20} className={cls.username} />
                        <Skeleton width={100} height={20} className={cls.date} />
                    </div>
                    <div className={cls.title}>
                        <Skeleton width={400} height={50} className={cls.type} />
                        <Skeleton width={200} height={30} />
                    </div>
                    <div className={cls.imageWrapper}>
                        <Skeleton width="100%" height={250} />
                    </div>
                    <Skeleton width="100%" height={200} />
                    <div className={cls.info}>
                        <Skeleton width={200} height={50} />
                        <Skeleton width={100} height={20} className={cls.view} />
                        <Skeleton width={20} height={20} border="50%" />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.info}>
                    <Skeleton width={50} height={20} className={cls.type} />
                    <Skeleton width={100} height={20} className={cls.view} />
                    <Skeleton width={20} height={20} className={cls.view} />
                </div>
                <div className={cls.title}>
                    <Skeleton width={190} height={50} />
                </div>
            </Card>
        </div>
    );
});
