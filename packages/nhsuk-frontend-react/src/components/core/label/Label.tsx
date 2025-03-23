import React, { Fragment } from 'react';
import clsx from 'clsx';
import { ElementProps, Size } from '@/types/shared';
import { Base } from '@/components/core/base/Base';

export type LabelProps = (
  | {
      size?: undefined;
      variant?: undefined;
    }
  | {
      size: Size;
      variant?: undefined;
    }
  | {
      variant: 'page-heading';
      size: Size;
    }
) &
  ElementProps<'label', 'size' | 'as'>;

const Label = ({ className, size, variant, ...props }: LabelProps) => {
  const component =
    variant === 'page-heading' || size === 'l' ? 'h1' : Fragment;

  const baseProps =
    component === 'h1' ? { className: 'nhsuk-label-wrapper' } : {};

  return (
    <Base<any> as={component} {...baseProps}>
      <label
        className={clsx(
          'nhsuk-label',
          {
            'nhsuk-label--xl': variant === 'page-heading' && !size,
            [`nhsuk-label--${size}`]: size,
          },
          className,
        )}
        {...props}
      />
    </Base>
  );
};

Label.displayName = 'Label';

export { Label };
