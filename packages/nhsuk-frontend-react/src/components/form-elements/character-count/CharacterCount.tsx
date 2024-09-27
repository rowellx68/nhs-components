import React from 'react';
import { Textarea, TextareaProps } from '../textarea/Textarea';
import { Factory, factory } from '@/internal/factory/factory';

export type CharacterCountProps = (
  | {
      variant: 'character-count';
      maxWords?: undefined;
      maxCharacterLength: number;
    }
  | {
      variant: 'word-count';
      maxWords: number;
      maxCharacterLength?: undefined;
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
