import React from 'react';
import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';

export type SelectProps = BaseFormElementProps & ElementProps<'select'>;

type SelectFactory = Factory<{
  props: SelectProps;
  ref: HTMLSelectElement;
  staticComponents: {
    Option: typeof SelectOption;
  };
}>;

const Select = factory<SelectFactory>((props, ref) => {
  return (
    <FormGroup
      as="select"
      inputType="select"
      {...props}
      ref={ref}
      render={({ id, name, className, withError, ...rest }) => (
        <select
          id={id}
          name={name}
          className={clsx(
            'nhsuk-select',
            {
              'nhsuk-select--error': withError,
            },
            className,
          )}
          {...rest}
        />
      )}
    />
  );
});

export type SelectOptionProps = ElementProps<'option'>;

const SelectOption = (props: SelectOptionProps) => {
  return <option {...props} />;
};

Select.displayName = 'Select';
SelectOption.displayName = 'SelectOption';

Select.Option = SelectOption;

export { Select, SelectOption };
