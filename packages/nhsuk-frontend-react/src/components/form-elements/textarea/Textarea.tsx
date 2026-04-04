'use client';

import clsx from 'clsx';
import { CharacterCount as NhsCharacterCount, CharacterCountTranslations } from 'nhsuk-frontend';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

import { Hint } from '../hint/Hint';

export type TextareaProps = BaseFormElementProps &
  ElementProps<'textarea'> &
  (
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
    | {
        variant?: 'textarea';
        maxWords?: undefined;
        maxCharacterLength?: undefined;
      }
  ) & {
    i18n?: CharacterCountTranslations;
  };

type TextareaFactory = Factory<{
  props: TextareaProps;
  ref: HTMLTextAreaElement;
}>;

const Textarea = factory<TextareaFactory>(
  (
    {
      variant = 'textarea',
      maxCharacterLength,
      maxWords,
      formGroupProps: userFormGroupProps,
      i18n = {},
      ...props
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textarea = useRef<NhsCharacterCount>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);

    const characterCount = variant !== 'textarea';

    useEffect(() => {
      if (!characterCount) {
        return;
      }

      if (!internalRef.current) {
        return;
      }

      if (textarea.current) {
        return;
      }

      const root = internalRef.current.closest('[data-module="nhsuk-character-count"]');
      textarea.current = new NhsCharacterCount(root, { i18n });

      return () => {
        root?.removeAttribute('data-nhsuk-character-count-init');
      };
    }, [internalRef, characterCount, maxCharacterLength, maxWords]);

    const formGroupProps = characterCount
      ? {
          ...userFormGroupProps,
          className: clsx('nhsuk-character-count', userFormGroupProps?.className),
          'data-module': 'nhsuk-character-count',
          ...(variant === 'word-count' ? { 'data-maxwords': maxWords } : {}),
          ...(variant === 'character-count' ? { 'data-maxlength': maxCharacterLength } : {}),
        }
      : userFormGroupProps;

    return (
      <FormGroup
        as="textarea"
        inputType="textarea"
        withErrorLine
        {...props}
        formGroupProps={formGroupProps}
        ref={internalRef}
        render={({ id, name, className, withError, ...rest }) => {
          const ariaDescribedBy =
            clsx(characterCount ? `${id}-info` : undefined, (rest as never)['aria-describedby']) ||
            undefined;

          return (
            <>
              <textarea
                id={id}
                name={name}
                className={clsx(
                  'nhsuk-textarea',
                  {
                    'nhsuk-textarea--error': withError,
                    'nhsuk-js-character-count': characterCount,
                  },
                  className,
                )}
                {...rest}
                aria-describedby={ariaDescribedBy}
              />
              {characterCount && (
                <Hint className="nhsuk-character-count__message" id={`${id}-info`} />
              )}
            </>
          );
        }}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
