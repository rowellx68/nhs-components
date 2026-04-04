import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/types/icon';

const ArrowRightCircleIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon--arrow-right-circle', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
    >
      <path d="M12 2a10 10 0 0 0-10 9h11.7l-4-4a1 1 0 0 1 1.5-1.4l5.6 5.7a1 1 0 0 1 0 1.4l-5.6 5.7a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4l4-4H2A10 10 0 1 0 12 2z" />
    </svg>
  );
};

ArrowRightCircleIcon.displayName = 'ArrowRightCircleIcon';

export { ArrowRightCircleIcon };
