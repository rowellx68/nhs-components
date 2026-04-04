import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/types/icon';

const ArrowRightIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon--arrow-right', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="34"
      height="34"
    >
      <path d="m14.7 6.3 5 5c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H5a1 1 0 0 1 0-2h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4Z" />
    </svg>
  );
};

ArrowRightIcon.displayName = 'ArrowRightIcon';

export { ArrowRightIcon };
