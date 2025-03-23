import React, { Fragment, ReactNode } from 'react';
import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ColumnWidth, ElementProps, InputWidth } from '@/types/shared';
import clsx from 'clsx';
import { Base } from '@/components/core/base/Base';

export type InputProps = {
  width?: InputWidth | ColumnWidth;
  prefix?: ReactNode;
  suffix?: ReactNode;
} & BaseFormElementProps &
  ElementProps<'input', 'size' | 'as'>;

type InputFactory = Factory<{
  props: InputProps;
  ref: HTMLInputElement;
}>;

const Input = factory<InputFactory>(
  ({ width, suffix, prefix, ...props }, ref) => {
    const component = suffix || prefix ? 'div' : Fragment;
    const baseProps =
      component === 'div' ? { className: 'nhsuk-input__wrapper' } : {};

    const widthNumberLike = width && !isNaN(parseInt(width, 10));

    return (
      <FormGroup
        as="input"
        {...props}
        ref={ref}
        inputType="input"
        render={({ id, name, className, withError, ...rest }) => (
          <Base<any> as={component} {...baseProps}>
            {prefix && (
              <div className="nhsuk-input__prefix" aria-hidden="true">
                {prefix}
              </div>
            )}
            <input
              id={id}
              name={name}
              className={clsx(
                'nhsuk-input',
                {
                  [`nhsuk-input--width-${width}`]: widthNumberLike,
                  [`nhsuk-u-width-${width}`]: !widthNumberLike && width,
                  'nhsuk-u-width-full': !widthNumberLike && !width,
                  'nhsuk-input--error': withError,
                },
                className,
              )}
              {...rest}
            />
            {suffix && (
              <div className="nhsuk-input__suffix" aria-hidden="true">
                {suffix}
              </div>
            )}
          </Base>
        )}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
