import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const MinusIcon = (props: Icon) => (
  <IconBase name="minus" {...props}>
    <path d="M5.5 10.5a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13Z" />
  </IconBase>
);

MinusIcon.displayName = 'MinusIcon';

export { MinusIcon };
