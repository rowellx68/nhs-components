'use client';

import clsx from 'clsx';
import React, { memo, useReducer, useMemo, Fragment } from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { factory, Factory } from '@/internal/factory/factory';
import { AsElementProps, ElementProps, Size } from '@/types/shared';

import { FieldsetContextValue, FieldsetProvider, reducer } from './Fieldset.context';

export type FieldsetProps = ElementProps<'fieldset'>;

type FieldsetFactory = Factory<{
  props: FieldsetProps;
  ref: HTMLFieldSetElement;
  staticComponents: {
    Label: typeof FieldsetLegend;
  };
}>;

const BaseFieldset = factory<FieldsetFactory>(({ className, ...props }, ref) => {
  return <fieldset className={clsx('nhsuk-fieldset', className)} {...props} ref={ref} />;
});

const MemoisedFieldset = memo(BaseFieldset);

const Fieldset = ({
  disableErrorLine,
  ...props
}: FieldsetProps & { disableErrorLine?: boolean }) => {
  const [state, dispatch] = useReducer(reducer, {
    registered: [],
    errored: [],
  });

  const contextValue: FieldsetContextValue = useMemo(
    () => ({
      isFieldset: true,
      dispatch,
    }),
    [dispatch],
  );

  const withFormElements = state.registered.length > 0;
  const withErrors = state.errored.length > 0;

  const baseProps = withFormElements
    ? {
        as: 'div',
        className: clsx([
          'nhsuk-form-group',
          { 'nhsuk-form-group--error': !disableErrorLine && withErrors },
        ]),
      }
    : {
        as: Fragment,
      };

  return (
    <FieldsetProvider value={contextValue}>
      <Base<any> {...baseProps}>
        <MemoisedFieldset {...props} />
      </Base>
    </FieldsetProvider>
  );
};

export type FieldsetLegendProps = (
  | {
      variant?: 'page-heading';
      size?: Size;
    }
  | {
      variant: undefined;
      size: Size;
    }
  | {
      variant: 'page-heading';
      size?: never;
    }
) &
  ElementProps<'legend', 'size' | 'as'> &
  BaseProps;

const FieldsetLegend = ({
  variant,
  size,
  as: component,
  className,
  children,
  ...props
}: FieldsetLegendProps & AsElementProps) => {
  const _component = variant === 'page-heading' ? component || 'h1' : Fragment;

  const baseProps = {
    as: _component,
    ...(_component === Fragment ? {} : { className: 'nhsuk-fieldset__heading' }),
  };

  return (
    <legend
      className={clsx(
        'nhsuk-fieldset__legend',
        {
          [`nhsuk-fieldset__legend--${size}`]: size,
        },
        className,
      )}
      {...props}
    >
      <Base<any> {...baseProps}>{children}</Base>
    </legend>
  );
};

Fieldset.displayName = 'Fieldset';
FieldsetLegend.displayName = 'Fieldset.Legend';

Fieldset.Legend = FieldsetLegend;

export { Fieldset, FieldsetLegend };
