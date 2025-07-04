import React from 'react';
import { Base, BaseProps } from '@/internal/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps } from '@/types/shared';
import clsx from 'clsx';

export type VisuallyHiddenProps = BaseProps;

export type VisuallyHiddenFactory = PolymorphicFactory<{
  props: VisuallyHiddenProps;
  defaultComponent: 'span';
  defaultRef: HTMLSpanElement;
}>;

const VisuallyHidden = polymorphicFactory<VisuallyHiddenFactory>(
  (
    {
      className,
      children,
      as: component = 'span',
      ...props
    }: VisuallyHiddenProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-u-visually-hidden', className)}
        {...props}
        ref={ref}
      >
        {children}
      </Base>
    );
  },
);

VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
