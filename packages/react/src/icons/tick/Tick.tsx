import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/types/icon';

const TickIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon--tick', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
    >
      <path d="M11.4 18.8a2 2 0 0 1-2.7.1h-.1L4 14.1a1.5 1.5 0 0 1 2.1-2L10 16l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" />
    </svg>
  );
};

TickIcon.displayName = 'TickIcon';

export { TickIcon };
