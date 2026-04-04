import clsx from 'clsx';
import React, { Fragment } from 'react';

import { Base } from '@/components/core/base/Base';
import { ElementProps, Size } from '@/types/shared';

export type LabelProps = (
  | {
      variant?: 'page-heading';
      size?: Size;
    }
  | { variant: undefined; size: Size }
  | { variant: 'page-heading'; size?: Size }
) &
  ElementProps<'label', 'size' | 'as'>;

const Label = ({ className, size, variant, ...props }: LabelProps) => {
  const component = variant === 'page-heading' || size === 'l' ? 'h1' : Fragment;

  const baseProps = component === 'h1' ? { className: 'nhsuk-label-wrapper' } : {};

  return (
    <Base<any> as={component} {...baseProps}>
      <label
        className={clsx('nhsuk-label', { [`nhsuk-label--${size}`]: size }, className)}
        {...props}
      />
    </Base>
  );
};

Label.displayName = 'Label';

export { Label };
