import React from 'react';
import { Icon } from '@/types/icon';
import clsx from 'clsx';

const ChevronRightIcon = ({
  className,
  width = 34,
  height = 34,
  ...rest
}: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__chevron-right', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={width}
      height={height}
      {...rest}
    >
      <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
    </svg>
  );
};

ChevronRightIcon.displayName = 'ChevronRightIcon';

export { ChevronRightIcon };
