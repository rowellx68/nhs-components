import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type SectionBreakSize = 'm' | 'l' | 'xl';

export type SectionBreakProps = {
  size?: SectionBreakSize;
  visible?: boolean;
} & ElementProps<'hr'>;

const SectionBreak = ({
  className,
  size,
  visible,
  ...props
}: SectionBreakProps) => {
  return (
    <hr
      className={clsx(
        'nhsuk-section-break',
        {
          'nhsuk-section-break--visible': visible,
          [`nhsuk-section-break--${size}`]: size,
        },
        className,
      )}
      {...props}
    />
  );
};

SectionBreak.displayName = 'SectionBreak';

export { SectionBreak };
