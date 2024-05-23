'use client';

import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps, InputWidth } from '@/types/shared';
import clsx from 'clsx';
import { LabelProps } from '@/components/core/label/Label';
import { Input } from '../input/Input';
import { DateInputProvider, useDateInputContext } from './DateInput.context';

export type DateInputPart = 'day' | 'month' | 'year';

export type DateInputValue = {
  day: string;
  month: string;
  year: string;
};

export type DateInputChangeEvent = ChangeEvent<HTMLInputElement> & {
  target: HTMLInputElement & { value: DateInputValue };
  currentTarget: HTMLInputElement & { value: DateInputValue };
};

export type DateInputProps = {
  value?: DateInputValue;
  error?: string | Record<string, string>;
} & BaseFormElementProps &
  ElementProps<'div'>;

type DateInputFactory = Factory<{
  props: DateInputProps;
  ref: HTMLDivElement;
  staticComponents: {
    Day: typeof DateInputDay;
    Month: typeof DateInputMonth;
    Year: typeof DateInputYear;
  };
}>;

const defaultDateInputValue: DateInputValue = {
  day: '',
  month: '',
  year: '',
};

const DateInput = factory<DateInputFactory>(
  ({ onChange, value = defaultDateInputValue, ...props }, ref) => {
    const [state, setState] = useState(value);

    const handleChange = useCallback(
      (part: DateInputPart, event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const newValue = {
          ...state,
          [part]: event.target.value,
        };

        if (onChange) {
          const newEvent = {
            ...event,
            target: { ...event.target, value: newValue },
            currentTarget: { ...event.currentTarget, value: newValue },
          } as DateInputChangeEvent;

          onChange(newEvent);
        }

        setState(newValue);
      },
      [onChange, state, setState],
    );

    return (
      <FormGroup
        as="div"
        {...props}
        ref={ref}
        fieldsetProps={{ role: 'group' }}
        inputType="dateinput"
        render={({ id, className, withError, errorMap, children }) => {
          const contextValue = useMemo(
            () => ({
              id: id!,
              name: id!,
              error: withError,
              errorMap,
              handleChange,
              value: state,
            }),
            [id, withError, errorMap, state, handleChange],
          );

          return (
            <div className={clsx('nhsuk-date-input', className)} id={id}>
              <DateInputProvider value={contextValue}>
                {children ?? (
                  <>
                    <DateInputDay />
                    <DateInputMonth />
                    <DateInputYear />
                  </>
                )}
              </DateInputProvider>
            </div>
          );
        }}
      />
    );
  },
);

export type DatePart = 'day' | 'month' | 'year';

const datePartLabels: Record<DatePart, string> = {
  day: 'Day',
  month: 'Month',
  year: 'Year',
};

export type DateInputPartProps = {
  label?: string;
  labelProps?: LabelProps;
  error?: boolean;
  part: DatePart;
  name?: string;
  width?: InputWidth;
  value?: string;
} & ElementProps<'div', 'value' | 'defaultValue' | 'type' | 'ref'>;

type DateInputPartFactory = Factory<{
  props: DateInputPartProps;
  ref: HTMLInputElement;
}>;

const BaseDatePart = factory<DateInputPartFactory>(
  (
    {
      part,
      label,
      error,
      className,
      name,
      id,
      width,
      labelProps = {},
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const {
      id: ctxId,
      name: ctxName,
      value: ctxValue,
      handleChange: ctxHandleChange,
      error: ctxError,
      errorMap,
    } = useDateInputContext();

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      event.persist();
      onChange?.(event);
      if (!event.isPropagationStopped()) {
        ctxHandleChange(part, event);
      }
    }, []);

    const { className: labelClassName, ...restLabelProps } = labelProps;
    const _label = label || datePartLabels[part];

    const inputId = id || `${ctxId}-${part}`;
    const inputName = name || `${ctxName}-${part}`;

    let inputSize: InputWidth = '4';

    if (part === 'day' || part === 'month') {
      inputSize = '2';
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const inputValue = value || ctxValue?.[part];

    const _error =
      error || (errorMap && errorMap[part]) || (ctxError && !errorMap);

    return (
      <div className={clsx('nhsuk-date-input__item')} {...props}>
        <Input
          labelProps={{
            className: clsx('nhsuk-date-input__label', labelClassName),
            ...restLabelProps,
            htmlFor: inputId,
          }}
          label={_label}
          id={inputId}
          name={inputName}
          width={inputSize || width}
          value={inputValue}
          className={clsx(
            'nhsuk-date-input__input',
            {
              'nhsuk-input--error': _error,
            },
            className,
          )}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={handleChange}
          ref={ref}
        />
      </div>
    );
  },
);

type DatePartFactory = Factory<{
  props: Omit<DateInputPartProps, 'part'>;
  ref: HTMLInputElement;
}>;

const DateInputDay = factory<DatePartFactory>((props, ref) => (
  <BaseDatePart part="day" {...props} ref={ref} />
));

const DateInputMonth = factory<DatePartFactory>((props, ref) => (
  <BaseDatePart part="month" {...props} ref={ref} />
));

const DateInputYear = factory<DatePartFactory>((props, ref) => (
  <BaseDatePart part="year" {...props} ref={ref} />
));

BaseDatePart.displayName = 'BaseDatePart';

DateInput.displayName = 'DateInput';
DateInputDay.displayName = 'DateInput.Day';
DateInputMonth.displayName = 'DateInput.Month';
DateInputYear.displayName = 'DateInput.Year';

DateInput.Day = DateInputDay;
DateInput.Month = DateInputMonth;
DateInput.Year = DateInputYear;

export { DateInput, DateInputDay, DateInputMonth, DateInputYear };
