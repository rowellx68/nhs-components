import clsx from 'clsx';
import React from 'react';

import { ElementProps } from '@/types/shared';

export type HeadingCaptionProps = {
  size: 'm' | 'l' | 'xl';
  variant?: 'bottom';
} & ElementProps<'span'>;

const HeadingCaption = ({ size, variant, className, ...props }: HeadingCaptionProps) => {
  return (
    <span
      className={clsx(
        `nhsuk-caption-${size}`,
        {
          'nhsuk-caption-bottom': variant === 'bottom',
        },
        className,
      )}
      {...props}
    />
  );
};

HeadingCaption.displayName = 'HeadingCaption';

export { HeadingCaption };
