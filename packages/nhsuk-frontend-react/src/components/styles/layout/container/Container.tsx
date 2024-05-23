import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type ContainerProps = {
  variant?: 'fluid' | 'set-width';
} & ElementProps<'div'>;

const Container = ({
  className,
  variant = 'set-width',
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx({
        'nhsuk-width-container': variant === 'set-width',
        'nhsuk-width-container-fluid': variant === 'fluid',
        className,
      })}
      {...props}
    />
  );
};

Container.displayName = 'Container';

export { Container };
