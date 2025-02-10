import { classNames } from 'shared';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-circle', {}, [className])}>
            <div></div>
        </div>
    );
};
