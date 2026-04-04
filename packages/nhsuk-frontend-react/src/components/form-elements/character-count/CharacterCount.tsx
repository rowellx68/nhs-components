import React from 'react';

import { Factory, factory } from '@/internal/factory/factory';

import { Textarea, TextareaProps } from '../textarea/Textarea';

export type CharacterCountProps = (
  | {
      variant: 'character-count';
      maxWords?: never;
      maxCharacterLength: number;
    }
  | {
      variant: 'word-count';
      maxWords: number;
      maxCharacterLength?: never;
    }
) &
  Omit<TextareaProps, 'variant'>;

type CharacterCountFactory = Factory<{
  props: CharacterCountProps;
  ref: HTMLTextAreaElement;
}>;

const CharacterCount = factory<CharacterCountFactory>((props, ref) => {
  return <Textarea {...props} ref={ref} />;
});

CharacterCount.displayName = 'CharacterCount';

export { CharacterCount };
