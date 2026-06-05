import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ArrowUpCircleIcon = (props: Icon) => (
  <IconBase name="arrow-up-circle" {...props}>
    <path d="M2 12a10 10 0 0 0 9 10L11 10.3l-4 4a1 1 0 0 1-1.4-1.5l5.7-5.6a1 1 0 0 1 1.4 0l5.7 5.6a1 1 0 0 1 0 1.5 1 1 0 0 1-1.4 0l-4-4L13 22A10 10 0 1 0 2 12z" />
  </IconBase>
);

ArrowUpCircleIcon.displayName = 'ArrowUpCircleIcon';

export { ArrowUpCircleIcon };
