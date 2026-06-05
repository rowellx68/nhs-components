import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ChevronUpCircleIcon = (props: Icon) => (
  <IconBase name="chevron-up-circle" {...props}>
    <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm5.8.3a1 1 0 1 0 1.4 1.5l2.8-2.9 2.8 2.9a1 1 0 0 0 1.4-1.5l-3.5-3.5c-.4-.4-1-.4-1.4 0Z" />
  </IconBase>
);

ChevronUpCircleIcon.displayName = 'ChevronUpCircleIcon';

export { ChevronUpCircleIcon };
