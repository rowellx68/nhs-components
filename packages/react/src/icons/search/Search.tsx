import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/types/icon';

const SearchIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon--search', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      focusable="false"
      role="img"
      aria-label="Search"
    >
      <title>Search</title>
      <path d="m20.7 19.3-4.1-4.1a7 7 0 1 0-1.4 1.4l4 4.1a1 1 0 0 0 1.5 0c.4-.4.4-1 0-1.4ZM6 11a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
    </svg>
  );
};

SearchIcon.displayName = 'SearchIcon';

export { SearchIcon };
