import { ElementProps } from '@/types/shared';
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

const Tag = ({ variant = 'grey', ...props }: TagProps) => {
  return <strong className={`nhsuk-tag nhsuk-tag--${variant}`} {...props} />;
};

Tag.displayName = 'Tag';

export { Tag };
