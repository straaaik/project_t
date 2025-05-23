import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    DANGER = 'danger',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.L, disabled, ...otherProps } = props;

    const mods: Record<string, boolean | undefined> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };
    return (
        <button type="button" className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])} disabled={disabled} {...otherProps}>
            {children}
        </button>
    );
});
