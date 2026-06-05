import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ArrowUpIcon = (props: Icon) => (
  <IconBase name="arrow-up" {...props}>
    <path d="M6.3 9.3l5-5c.2-.2.4-.3.7-.3.3 0 .5.1.7.3l5 5a1 1 0 0 1-1.4 1.4l-3.3-3.3L13 19a1 1 0 0 1-2 0L11 7.4l-3.3 3.3a1 1 0 1 1-1.4-1.4Z" />
  </IconBase>
);

ArrowUpIcon.displayName = 'ArrowUpIcon';

export { ArrowUpIcon };
