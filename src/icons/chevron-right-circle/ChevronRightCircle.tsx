import React from 'react';
import { Icon } from '@/types/icon';
import clsx from 'clsx';

const ChevronRightCircleIcon = ({ className, ...rest }: Icon) => {
  return (
    <svg
      className={clsx('nhsuk-icon nhsuk-icon__chevron-right-circle', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="27"
      height="27"
    >
      <circle cx="13.333" cy="13.333" r="13.333" fill="" />
      <g
        data-name="Group 1"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2.667"
      >
        <path d="M15.438 13l-3.771 3.771" />
        <path data-name="Path" d="M11.667 9.229L15.438 13" />
      </g>
    </svg>
  );
};

ChevronRightCircleIcon.displayName = 'ChevronRightCircleIcon';

export { ChevronRightCircleIcon };
