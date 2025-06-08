import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from 'entitis/Article/model/types/types';
import { Text } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img className={cls.image} src={block.src} alt={block.title} />
            {block.title && <Text className={cls.title} text={block.title} />}
        </div>
    );
});
