import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ArrowRightCircleIcon = (props: Icon) => (
  <IconBase name="arrow-right-circle" {...props}>
    <path d="M12 2a10 10 0 0 0-10 9h11.7l-4-4a1 1 0 0 1 1.5-1.4l5.6 5.7a1 1 0 0 1 0 1.4l-5.6 5.7a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4l4-4H2A10 10 0 1 0 12 2z" />
  </IconBase>
);

ArrowRightCircleIcon.displayName = 'ArrowRightCircleIcon';

export { ArrowRightCircleIcon };
