'use client';

import clsx from 'clsx';
import { Radios as NhsRadios } from 'nhsuk-frontend';
import React, { ReactNode, useEffect, useImperativeHandle, useRef } from 'react';

import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { Label } from '@/components/core/label/Label';
import { Factory, factory } from '@/internal/factory/factory';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import { ElementProps } from '@/types/shared';

import { Hint } from '../hint/Hint';

export type RadioProps = {
  inline?: boolean;
  small?: boolean;
} & BaseFormElementProps &
  ElementProps<'div'>;

type RadioFactory = Factory<{
  props: RadioProps;
  ref: HTMLDivElement;
  staticComponents: {
    Item: typeof RadioItem;
    Divider: typeof RadioDivider;
  };
}>;

const Radio = factory<RadioFactory>(({ children, inline, small, ...props }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const radiosRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  useEffect(() => {
    if (!radiosRef.current) {
      return;
    }

    setTimeout(() => {
      new NhsRadios(radiosRef.current);
    }, 0);

    return () => {
      radiosRef.current?.removeAttribute('data-nhsuk-radios-init');
    };
  }, []);

  return (
    <FormGroup
      as="div"
      withErrorLine
      {...props}
      ref={internalRef}
      inputType="radios"
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ className, withError: _withError, ref: _ref, ...rest }) => (
        <div
          className={clsx(
            'nhsuk-radios',
            {
              'nhsuk-radios--inline': inline,
              'nhsuk-radios--small': small,
            },
            className,
          )}
          data-module="nhsuk-radios"
          ref={radiosRef}
          {...rest}
        >
          {children}
        </div>
      )}
    />
  );
});

export type RadioItemProps = {
  name: string;
  hint?: ReactNode;
  conditional?: ReactNode;
} & ElementProps<'input', 'type' | 'name'>;

type RadioItemFactory = Factory<{
  props: RadioItemProps;
  ref: HTMLInputElement;
}>;

const RadioItem = factory<RadioItemFactory>(
  ({ id, hint, conditional, className, children, ...props }, ref) => {
    const hasConditional = !!conditional;

    const itemId = id || useIdWithPrefix('radio-item');
    const hintId = `${itemId}-item-hint`;
    const conditionalId = `${itemId}-conditional`;

    return (
      <>
        <div className="nhsuk-radios__item">
          <input
            className={clsx('nhsuk-radios__input', className)}
            id={itemId}
            {...props}
            ref={ref}
            aria-describedby={hint ? hintId : undefined}
            {...(hasConditional ? { 'data-aria-controls': conditionalId } : {})}
            type="radio"
          />
          <Label htmlFor={itemId} className="nhsuk-radios__label">
            {children}
          </Label>
          {hint && (
            <Hint className="nhsuk-radios__hint" id={hintId}>
              {hint}
            </Hint>
          )}
        </div>
        {hasConditional && (
          <div
            className="nhsuk-radios__conditional nhsuk-radios__conditional--hidden"
            id={conditionalId}
          >
            {conditional}
          </div>
        )}
      </>
    );
  },
);

export type RadioDividerProps = ElementProps<'div'>;

const RadioDivider = ({ children = 'or', className, ...props }: RadioDividerProps) => (
  <div className={clsx('nhsuk-radios__divider', className)} {...props}>
    {children}
  </div>
);

Radio.displayName = 'Radio';
RadioItem.displayName = 'Radio.Item';
RadioDivider.displayName = 'Radio.Divider';

Radio.Item = RadioItem;
Radio.Divider = RadioDivider;

export { Radio, RadioDivider, RadioItem };
