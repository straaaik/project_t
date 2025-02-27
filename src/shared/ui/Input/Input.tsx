import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, placeholder, type = 'text', autofocus, ...otherProps } = props;
    const [isFocus, setIsFocus] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocus(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onFocus = () => {
        setIsFocus(true);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Record<string, boolean> = {
        [cls.focus]: isFocus || Boolean(value),
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <div className={cls.placeholderWrapper}>
                <span className={classNames(cls.placeholder, mods, [])}>{placeholder}</span>
            </div>
            <input
                ref={ref}
                onFocus={onFocus}
                onBlur={onBlur}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
