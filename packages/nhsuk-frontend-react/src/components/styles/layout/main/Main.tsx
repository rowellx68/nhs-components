import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type MainProps = { id?: 'maincontent'; role?: 'main' } & ElementProps<
  'main',
  'id' | 'role'
>;

const Main = ({
  className,
  id = 'maincontent',
  role = 'main',
  ...props
}: MainProps) => {
  return (
    <main
      className={clsx('nhsuk-main-wrapper', className)}
      id={id}
      role={role}
      {...props}
    />
  );
};

Main.displayName = 'Main';

export { Main };
