import React from 'react';
import { Icon } from '@/types/icon';
import clsx from 'clsx';

const ChevronDownIcon = ({ className }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__chevron-down', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
    </svg>
  );
};

ChevronDownIcon.displayName = 'ChevronDownIcon';

export { ChevronDownIcon };
