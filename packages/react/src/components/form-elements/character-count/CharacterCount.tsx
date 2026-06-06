import React from 'react';

import { Factory, factory } from '@/internal/factory/factory';

import { CharacterCountConfigProps, Textarea, TextareaBaseProps } from '../textarea/Textarea';

export type CharacterCountProps = TextareaBaseProps & CharacterCountConfigProps;

type CharacterCountFactory = Factory<{
  props: CharacterCountProps;
  ref: HTMLTextAreaElement;
}>;

const CharacterCount = factory<CharacterCountFactory>((props, ref) => {
  return <Textarea {...props} ref={ref} />;
});

CharacterCount.displayName = 'CharacterCount';

export { CharacterCount };
