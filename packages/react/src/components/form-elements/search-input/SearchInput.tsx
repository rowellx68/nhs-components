import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { SearchIcon } from '@/icons/search/Search';
import { Factory, factory } from '@/internal/factory/factory';
import { ColumnWidth, ElementProps, InputWidth } from '@/types/shared';

import { Button, ButtonProps } from '../button/Button';

export type SearchInputButton = {
  /**
   * Visible button text. When omitted the button shows only its icon.
   */
  text?: ReactNode;
  /**
   * Icon rendered inside the button. Defaults to the search icon.
   */
  icon?: ReactNode;
  /**
   * Accessible name for the button, used when it only shows an icon. Defaults to `Search`.
   */
  visuallyHiddenText?: string;
  variant?: ButtonProps['variant'];
  className?: string;
};

export type SearchInputProps = Omit<BaseFormElementProps, 'name'> & {
  name: string;
  large?: boolean;
  width?: InputWidth | ColumnWidth;
  button?: SearchInputButton;
} & ElementProps<'input', 'size' | 'type' | 'name'>;

type SearchInputFactory = Factory<{
  props: SearchInputProps;
  ref: HTMLInputElement;
}>;

const SearchInput = factory<SearchInputFactory>(
  (
    { id, name, large, width, button, disabled, formGroupProps: userFormGroupProps, ...props },
    ref,
  ) => {
    const widthNumberLike = width && !Number.isNaN(Number.parseInt(width, 10));

    const formGroupProps = {
      ...userFormGroupProps,
      className: clsx(
        'nhsuk-search-input',
        { 'nhsuk-search-input--large': large },
        userFormGroupProps?.className,
      ),
    };

    return (
      <FormGroup
        as="input"
        withErrorLine
        {...props}
        id={id || name}
        name={name}
        ref={ref}
        inputType="input"
        formGroupProps={formGroupProps}
        render={({ id: inputId, name: inputName, className, withError, ...rest }) => (
          <div
            className={clsx('nhsuk-input-wrapper', 'nhsuk-search-input__wrapper', {
              'nhsuk-input-wrapper--large': large,
            })}
          >
            <input
              id={inputId}
              name={inputName}
              type="search"
              autoComplete="off"
              className={clsx(
                'nhsuk-input',
                'nhsuk-search-input__input',
                {
                  'nhsuk-input--large': large,
                  [`nhsuk-input--width-${width}`]: widthNumberLike,
                  [`nhsuk-u-width-${width}`]: !widthNumberLike && width,
                  'nhsuk-input--error': withError,
                },
                className,
              )}
              disabled={disabled}
              {...rest}
            />
            <Button
              type="submit"
              variant={button?.variant}
              small={!large}
              disabled={disabled}
              icon={button?.icon ?? <SearchIcon />}
              className={clsx('nhsuk-search-input__button', button?.className)}
              aria-label={button?.text ? undefined : (button?.visuallyHiddenText ?? 'Search')}
            >
              {button?.text}
            </Button>
          </div>
        )}
      />
    );
  },
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };
