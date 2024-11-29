import React from 'react';
import { Icon } from '@/types/icon';
import clsx from 'clsx';

const TickIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__tick', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      width="24"
      height="24"
    >
      <path
        strokeWidth="4"
        strokeLinecap="round"
        d="M18.4 7.8l-8.5 8.4L5.6 12"
        stroke="#007f3b"
      />
    </svg>
  );
};

TickIcon.displayName = 'TickIcon';

export { TickIcon };
