'use client';

import React, { useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/core/form-group/FormGroup';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import initTextarea from '@/resources/character-count/character-count';
import { Base } from '@/components/core/base/Base';
import { Hint } from '../hint/Hint';

export type TextareaProps = BaseFormElementProps &
  ElementProps<'textarea'> &
  (
    | {
        variant: 'character-count';
        maxWords?: undefined;
        maxLength: number;
      }
    | {
        variant: 'word-count';
        maxWords: number;
        maxLength?: undefined;
      }
    | {
        variant: 'textarea';
        maxWords?: undefined;
        maxLength?: undefined;
      }
  );

type TextareaFactory = Factory<{
  props: TextareaProps;
  ref: HTMLTextAreaElement;
}>;

const Textarea = factory<TextareaFactory>(
  ({ variant, maxLength, maxWords, ...props }, ref) => {
    useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);
    const internalRef = useRef<HTMLTextAreaElement>(null);

    const characterCount = variant !== 'textarea';
    const baseProps = {
      as: characterCount ? 'div' : React.Fragment,
      className: characterCount ? 'nhsuk-character-count' : undefined,
      'data-module': characterCount ? 'nhsuk-character-count' : undefined,
      'data-maxwords': variant === 'word-count' ? maxWords : undefined,
      'data-maxlength': variant === 'character-count' ? maxLength : undefined,
    };

    const message = useMemo(() => {
      if (variant === 'character-count') {
        return `You have ${maxLength} characters remaining`;
      }

      if (variant === 'word-count') {
        return `You have ${maxWords} words remaining`;
      }

      return undefined;
    }, [variant, maxWords, maxLength]);

    useEffect(() => {
      if (!characterCount) {
        return;
      }

      if (!internalRef.current) {
        return;
      }

      const parent = internalRef.current.parentElement;

      if (!parent) {
        return;
      }

      initTextarea({ scope: parent as any });
    }, [internalRef, characterCount]);

    return (
      <Base<any> {...baseProps}>
        <FormGroup
          as="textarea"
          inputType="textarea"
          {...props}
          ref={internalRef}
          render={({ id, name, className, withError, ...rest }) => (
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
              />
              {characterCount && (
                <Hint
                  className="nhsuk-character-count__message"
                  id={`${id}-info`}
                >
                  {message}
                </Hint>
              )}
            </>
          )}
        />
      </Base>
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
