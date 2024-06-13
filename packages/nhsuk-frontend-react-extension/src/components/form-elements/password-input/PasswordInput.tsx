'use client';

import React, { useState } from 'react';
import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';

export type InputProps = BaseFormElementProps &
  ElementProps<'input', 'size' | 'as'>;

type InputFactory = Factory<{
  props: InputProps;
  ref: HTMLInputElement;
}>;

const PasswordInput = factory<InputFactory>(({ ...props }, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <FormGroup
      as="input"
      {...props}
      ref={ref}
      inputType="input"
      render={({ id, name, className, withError, ...rest }) => (
        <div className="nhsuk-input__wrapper nhsuk-password-input__wrapper">
          <input
            id={id}
            name={name}
            className={clsx(
              'nhsuk-input',
              'nhsuk-password-input__input',
              {
                'nhsuk-input--error': withError,
              },
              className,
            )}
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="current-password"
            type={passwordVisible ? 'text' : 'password'}
            {...rest}
          />
          <VisuallyHidden
            className="nhsuk-password-input__sr-status"
            aria-live="polite"
          >
            `Your password is ${passwordVisible ? 'visible' : 'hidden'}`
          </VisuallyHidden>
          <button
            className="nhsuk-button nhsuk-button--secondary nhsuk-password-input__toggle"
            aria-controls={id}
            aria-label={`${passwordVisible ? 'Hide' : 'Show'} password`}
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
      )}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
