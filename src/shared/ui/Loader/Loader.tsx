import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import { memo } from 'react';

interface LoaderProps {
    className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-circle', {}, [className])}>
            <div></div>
        </div>
    );
});
