import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string | number;
    placeholder?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, readOnly = false, value, onChange, placeholder, type = 'text', autofocus, ...otherProps } = props;
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

    return (
        <div className={classNames(cls.inputWrapper, { [cls.readOnly]: readOnly }, [className])}>
            <div className={cls.placeholderWrapper}>
                <span className={classNames(cls.placeholder, { [cls.focus]: isFocus || Boolean(value) }, [])}>{placeholder}</span>
            </div>
            <input
                ref={ref}
                readOnly={readOnly}
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
