import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo } from 'react';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
    return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
