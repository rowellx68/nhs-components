import clsx from 'clsx';
import React from 'react';

import { ElementProps } from '@/types/shared';

export type FontSize = '64' | '48' | '32' | '24' | '22' | '19' | '16' | '14';

export type FontWeight = 'bold' | 'normal';

export type ParagraphProps = {
  size?: 's' | 'm' | 'l';
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textAlignRight?: boolean;
} & ElementProps<'p'>;

const Paragraph = ({
  size,
  fontSize,
  fontWeight,
  textAlignRight,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        {
          'nhsuk-body': !size,
          'nhsuk-u-text-align-right': textAlignRight,
          [`nhsuk-body-${size}`]: size,
          [`nhsuk-u-font-size-${fontSize}`]: fontSize,
          [`nhsuk-u-font-weight-${fontWeight}`]: fontWeight,
        },
        className,
      )}
      {...props}
    />
  );
};

Paragraph.displayName = 'Paragraph';

export { Paragraph };
