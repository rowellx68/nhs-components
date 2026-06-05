import React from 'react';

import { IconBase } from '@/icons/IconBase';
import { Icon } from '@/types/icon';

const SearchIcon = (props: Icon) => (
  <IconBase name="search" {...props}>
    <path d="m20.7 18.9-4.1-4.1a7 7 0 1 0-1.4 1.4l4 4.1a1 1 0 0 0 1.5 0c.4-.4.4-1 0-1.4ZM6 10.6a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
  </IconBase>
);

SearchIcon.displayName = 'SearchIcon';

export { SearchIcon };
