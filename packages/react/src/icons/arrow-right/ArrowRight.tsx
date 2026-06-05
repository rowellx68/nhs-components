import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const ArrowRightIcon = (props: Icon) => (
  <IconBase name="arrow-right" width="34" height="34" {...props}>
    <path d="m14.7 6.3 5 5c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H5a1 1 0 0 1 0-2h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4Z" />
  </IconBase>
);

ArrowRightIcon.displayName = 'ArrowRightIcon';

export { ArrowRightIcon };
