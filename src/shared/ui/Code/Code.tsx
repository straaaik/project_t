import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import CopyIcon from 'shared/assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
