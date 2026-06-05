import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/types/icon';

type IconBaseProps = Icon & {
  name: string;
};

const IconBase = ({ name, title, className, children, ...rest }: IconBaseProps) => {
  return (
    <svg
      className={clsx('nhsuk-icon', `nhsuk-icon--${name}`, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      focusable="false"
      {...(title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': 'true' })}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

IconBase.displayName = 'IconBase';

export { IconBase };
