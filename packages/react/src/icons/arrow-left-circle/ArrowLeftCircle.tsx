import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ArrowLeftCircleIcon = (props: Icon) => (
  <IconBase name="arrow-left-circle" {...props}>
    <path d="M12 22a10 10 0 0 0 10-9L10.3 13l4 4a1 1 0 0 1-1.5 1.4l-5.6-5.7a1 1 0 0 1 0-1.4l5.6-5.7a1 1 0 0 1 1.5 0 1 1 0 0 1 0 1.4l-4 4L22 11A10 10 0 1 0 12 22z" />
  </IconBase>
);

ArrowLeftCircleIcon.displayName = 'ArrowLeftCircleIcon';

export { ArrowLeftCircleIcon };
