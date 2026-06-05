import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ArrowDownCircleIcon = (props: Icon) => (
  <IconBase name="arrow-down-circle" {...props}>
    <path d="M22 12a10 10 0 0 0-9-10L13 13.7l4-4a1 1 0 0 1 1.4 1.5l-5.7 5.6a1 1 0 0 1-1.4 0l-5.7-5.6a1 1 0 0 1 0-1.5 1 1 0 0 1 1.4 0l4 4L11 2A10 10 0 1 0 22 12z" />
  </IconBase>
);

ArrowDownCircleIcon.displayName = 'ArrowDownCircleIcon';

export { ArrowDownCircleIcon };
