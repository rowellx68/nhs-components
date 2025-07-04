import React from 'react';
import type { Icon } from '@/types/icon';
import clsx from 'clsx';

const ChevronLeftIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__chevron-left', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="24"
      width="24"
    >
      <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
    </svg>
  );
};

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export { ChevronLeftIcon };
