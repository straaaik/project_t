import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

export enum AvatarSize {
    XL = 'size_xl',
    L = 'size_l',
    M = 'size_m',
}
interface AvatarProps {
    className?: string;
    image?: string;
    size?: AvatarSize;
}

export const Avatar = ({ className, image, size = AvatarSize.M }: AvatarProps) => {
    return <img src={image} alt={image} className={classNames(cls.Avatar, {}, [className, cls[size]])} />;
};
