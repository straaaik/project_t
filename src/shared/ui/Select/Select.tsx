import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, InputHTMLAttributes, useMemo } from 'react';

interface Options {
    value: string;
    label: string;
}

interface SelectProps {
    className?: string;
    title?: string;
    value?: string;
    onChange?: (value: string) => void;
    options: Options[];
    readOnly?: boolean;
}

export const Select = ({ className, title, value, onChange, options, readOnly }: SelectProps) => {
    const optionsList = useMemo(() => {
        return options.map((item) => (
            <option className={cls.option} value={item.value} key={item.value}>
                {item.label}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.WrapperSelect, {}, [className])}>
            {title && <div className={cls.title}>{title}</div>}
            <select disabled={readOnly} onChange={onChangeHandler} value={value} className={cls.select}>
                {optionsList}
            </select>
        </div>
    );
};
