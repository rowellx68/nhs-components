import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const TickIcon = (props: Icon) => (
  <IconBase name="tick" {...props}>
    <path d="M11.4 17.5a2 2 0 0 1-2.7.1h-.1L4 12.8a1.5 1.5 0 0 1 2.1-2L10 14.7l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" />
  </IconBase>
);

TickIcon.displayName = 'TickIcon';

export { TickIcon };
