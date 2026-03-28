import clsx from 'clsx';
import React from 'react';

import { ElementProps } from '@/types/shared';

export type ContainerProps = {
  /**
   * `set-width` will be deprecated in the future. Use `default` instead.
   */
  variant?: 'fluid' | 'set-width';
} & ElementProps<'div'>;

const Container = ({ className, variant, ...props }: ContainerProps) => {
  return (
    <div
      className={clsx(
        {
          'nhsuk-width-container': !variant || variant === 'set-width',
          'nhsuk-width-container-fluid': variant === 'fluid',
        },
        className,
      )}
      {...props}
    />
  );
};

Container.displayName = 'Container';

export { Container };
