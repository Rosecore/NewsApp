import React, { CSSProperties, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CurrencySelect.module.scss'
import Select from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/Currency';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
    className?: string,
    value?: string,
    onChange?: (value:Currency)=>void,
    readonly?: boolean

}

const options = [
    { value:Currency.DIN, content:Currency.DIN },
    { value:Currency.EUR, content:Currency.EUR },
    { value:Currency.RUB, content:Currency.RUB },
    { value:Currency.USD, content:Currency.USD },
]

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

export default CurrencySelect;