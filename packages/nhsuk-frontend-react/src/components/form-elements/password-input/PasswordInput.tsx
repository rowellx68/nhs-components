'use client';

import clsx from 'clsx';
import { PasswordInput as NhsPasswordInput, PasswordInputTranslations } from 'nhsuk-frontend';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ColumnWidth, ElementProps, InputWidth } from '@/types/shared';

export type PasswordInputProps = {
  width?: InputWidth | ColumnWidth;
  i18n?: PasswordInputTranslations;
} & BaseFormElementProps &
  ElementProps<'input', 'size' | 'as' | 'type'>;

type PasswordInputFactory = Factory<{
  props: PasswordInputProps;
  ref: HTMLInputElement;
}>;

const PasswordInput = factory<PasswordInputFactory>(({ width, i18n, ...props }, ref) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const password = useRef<NhsPasswordInput>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

  useEffect(() => {
    const container = internalRef.current?.closest('.nhsuk-password-input');
    if (!container) {
      return;
    }

    if (password.current) {
      return;
    }

    password.current = new NhsPasswordInput(container, { i18n });

    return () => {
      container.removeAttribute('data-nhsuk-password-input-init');
    };
  }, []);

  const widthNumberLike = width && !isNaN(parseInt(width, 10));

  return (
    <FormGroup
      as="input"
      withErrorLine
      {...props}
      inputType="input"
      formGroupProps={{
        className: 'nhsuk-password-input',
        'data-module': 'nhsuk-password-input',
      }}
      render={({ id, name, className, withError, ...rest }) => (
        <div className="nhsuk-input-wrapper">
          <input
            id={id}
            name={name}
            className={clsx(
              'nhsuk-input',
              'nhsuk-password-input__input',
              'nhsuk-js-password-input-input',
              {
                [`nhsuk-input--width-${width}`]: widthNumberLike,
                [`nhsuk-u-width-${width}`]: !widthNumberLike && width,
                'nhsuk-input--error': withError,
              },
              className,
            )}
            type="password"
            spellCheck={false}
            autoCapitalize="none"
            autoComplete="current-password"
            {...rest}
            ref={internalRef}
          />
          <button
            className="nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-password-input__toggle nhsuk-js-password-input-toggle"
            data-module="nhsuk-button"
            type="button"
            aria-controls={id}
            aria-label="Show password"
            hidden
          >
            Show
          </button>
        </div>
      )}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
