import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

export type LedeTextProps = {
  size?: 's';
} & BaseProps &
  AsElementProps &
  ElementProps<'div'>;

type LedeTextFactory = PolymorphicFactory<{
  props: LedeTextProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
}>;

const LedeText = polymorphicFactory<LedeTextFactory>(
  ({ className, size, as: component = 'div', ...props }: LedeTextProps, ref) => {
    return (
      <Base
        as={component}
        className={clsx(
          'nhsuk-lede-text',
          {
            [`nhsuk-lede-text-${size}`]: size,
          },
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

LedeText.displayName = 'LedeText';

export { LedeText };
