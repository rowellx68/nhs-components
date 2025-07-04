import React from 'react';
import clsx from 'clsx';
import { ElementProps, Size } from '@/types/shared';

export type HeadingCaptionProps = {
  size: Extract<Size, 'xl' | 'l' | 'm'>;
} & ElementProps<'span'>;

const HeadingCaption = ({ size, className, ...props }: HeadingCaptionProps) => {
  return (
    <span className={clsx(`nhsuk-caption-${size}`, className)} {...props} />
  );
};

HeadingCaption.displayName = 'HeadingCaption';

export { HeadingCaption };
