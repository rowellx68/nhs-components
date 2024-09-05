import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import React from 'react';

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
  variant?: TagColour;
  style?: React.CSSProperties;
} & ElementProps<'strong'>;

const Tag = ({ variant = 'grey', className, ...props }: TagProps) => {
  return (
    <strong
      className={clsx('nhsuk-tag', `nhsuk-tag--${variant}`, className)}
      {...props}
    />
  );
};

Tag.displayName = 'Tag';

export { Tag };
