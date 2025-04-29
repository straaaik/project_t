import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Country } from '../model/types/Country';

interface CurrencySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.Armenia, label: Country.Armenia },
    { value: Country.Belarus, label: Country.Belarus },
    { value: Country.Kazakhstan, label: Country.Kazakhstan },
    { value: Country.Russia, label: Country.Russia },
];

export const CountrySelect = ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );
    return <Select readOnly={readOnly} onChange={onChangeHandler} className={className} title={t('Страна')} value={value} options={options} />;
};
