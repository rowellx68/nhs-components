import clsx from 'clsx';
import React, { Fragment, ReactNode } from 'react';

import { Base } from '@/components/core/base/Base';
import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type SelectProps = {
  suffix?: ReactNode;
} & BaseFormElementProps &
  ElementProps<'select'>;

type SelectFactory = Factory<{
  props: SelectProps;
  ref: HTMLSelectElement;
  staticComponents: {
    Option: typeof SelectOption;
    Divider: typeof SelectDivider;
  };
}>;

const Select = factory<SelectFactory>(({ suffix, ...props }, ref) => {
  const component = suffix ? 'div' : Fragment;
  const baseProps = suffix ? { className: 'nhsuk-input-wrapper' } : {};

  return (
    <FormGroup
      as="select"
      inputType="select"
      withErrorLine
      {...props}
      ref={ref}
      render={({ id, name, className, withError, ...rest }) => (
        <Base<any> as={component} {...baseProps}>
          <select
            id={id}
            name={name}
            className={clsx('nhsuk-select', { 'nhsuk-select--error': withError }, className)}
            {...rest}
          />
          {suffix}
        </Base>
      )}
    />
  );
});

export type SelectOptionProps = ElementProps<'option'>;

const SelectOption = (props: SelectOptionProps) => <option {...props} />;

const SelectDivider = () => <hr />;

Select.displayName = 'Select';
SelectOption.displayName = 'Select.Option';
SelectDivider.displayName = 'Select.Divider';

Select.Option = SelectOption;
Select.Divider = SelectDivider;

export { Select, SelectOption, SelectDivider };
