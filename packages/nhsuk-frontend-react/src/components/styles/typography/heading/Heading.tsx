import React from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, HeadingLevel } from '@/types/shared';
import clsx from 'clsx';

export type HeadingSize = 'xl' | 'l' | 'm' | 's' | 'xs';

export type HeadingProps = {
  size?: HeadingSize;
  variant?: 'caption-bottom';
} & BaseProps &
  AsElementProps<HeadingLevel> &
  ElementProps<'h1'>;

type HeadingFactory = PolymorphicFactory<{
  props: HeadingProps;
  defaultComponent: 'h1';
  defaultRef: HTMLHeadingElement;
}>;

const Heading = polymorphicFactory<HeadingFactory>(
  (
    { className, size, variant, as: component = 'h1', ...props }: HeadingProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx(
          { [`nhsuk-heading-${size}`]: size, 'nhsuk-caption--bottom': variant },
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

Heading.displayName = 'Heading';

export { Heading };
