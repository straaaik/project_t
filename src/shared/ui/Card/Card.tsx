import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, memo } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => {
    return (
        <div {...otherProps} className={classNames(cls.Card, {}, [className])}>
            {children}
        </div>
    );
});
