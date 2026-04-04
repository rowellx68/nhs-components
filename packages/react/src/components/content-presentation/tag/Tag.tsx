import clsx from 'clsx';
import React from 'react';

import { ElementProps } from '@/types/shared';

export type TagColour =
  | 'white'
  | 'grey'
  | 'green'
  | 'aqua-green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';

export type TagProps = {
  colour?: TagColour;
  noBorder?: boolean;
} & ElementProps<'strong'>;

const Tag = ({ colour, noBorder, className, ...props }: TagProps) => {
  return (
    <strong
      className={clsx(
        'nhsuk-tag',
        { [`nhsuk-tag--${colour}`]: colour },
        { 'nhsuk-tag--no-border': noBorder },
        className,
      )}
      {...props}
    />
  );
};

Tag.displayName = 'Tag';

export { Tag };
