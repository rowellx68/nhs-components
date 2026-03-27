import clsx from 'clsx';
import React from 'react';

import { ElementProps } from '@/types/shared';

export type MainProps = { id?: 'maincontent'; role?: 'main'; size?: 's' | 'l' } & ElementProps<
  'main',
  'id' | 'role'
>;

const Main = ({ className, size, id = 'maincontent', role = 'main', ...props }: MainProps) => {
  return (
    <main
      className={clsx('nhsuk-main-wrapper', size && `nhsuk-main-wrapper--${size}`, className)}
      id={id}
      role={role}
      {...props}
    />
  );
};

Main.displayName = 'Main';

export { Main };
