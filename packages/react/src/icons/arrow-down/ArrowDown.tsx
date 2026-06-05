import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ArrowDownIcon = (props: Icon) => (
  <IconBase name="arrow-down" {...props}>
    <path d="M17.7 14.7l-5 5c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-5-5a1 1 0 0 1 1.4-1.4l3.3 3.3L11 5a1 1 0 0 1 2 0L13 16.6l3.3-3.3a1 1 0 1 1 1.4 1.4Z" />
  </IconBase>
);

ArrowDownIcon.displayName = 'ArrowDownIcon';

export { ArrowDownIcon };
