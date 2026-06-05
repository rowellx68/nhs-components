import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const PlusIcon = (props: Icon) => (
  <IconBase name="plus" {...props}>
    <path d="M13.5 5.5a1.5 1.5 0 0 0-3 0v5h-5a1.5 1.5 0 0 0 0 3h5v5a1.5 1.5 0 0 0 3 0v-5h5a1.5 1.5 0 0 0 0-3h-5v-5Z" />
  </IconBase>
);

PlusIcon.displayName = 'PlusIcon';

export { PlusIcon };
