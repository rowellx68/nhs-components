import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/types/icon';

const CrossIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon--cross', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
    >
      <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" />
    </svg>
  );
};

CrossIcon.displayName = 'CrossIcon';

export { CrossIcon };
