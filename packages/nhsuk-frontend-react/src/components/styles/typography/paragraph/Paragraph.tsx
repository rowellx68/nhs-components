import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type FontSize = '64' | '48' | '32' | '24' | '22' | '19' | '16' | '14';

export type FontWeight = 'bold' | 'normal';

export type ParagraphProps = {
  variant?: 'lead' | 'small' | 'body';
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textAlignRight?: boolean;
} & ElementProps<'p'>;

const Paragraph = ({
  variant = 'body',
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
          'nhsuk-body': variant === 'body',
          'nhsuk-body-l': variant === 'lead',
          'nhsuk-body-s': variant === 'small',
          'nhsuk-u-text-align-right': textAlignRight,
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
