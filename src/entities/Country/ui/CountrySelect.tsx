import React, { CSSProperties, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Country.module.scss'
import Select from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/Currency';
import { Country } from '../model/types/Country';
import { useTranslation } from 'react-i18next';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = [
    { value: Country.RU, content:Country.RU},
    { value: Country.SR, content:Country.SR },
    { value: Country.US, content: Country.US },
]
export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});