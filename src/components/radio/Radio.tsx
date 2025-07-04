'use client';

import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/form-group/FormGroup';
import { Label } from '@/components/label/Label';
import { Factory, factory } from '@/internal/factory/factory';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import { ElementProps } from '@/types/shared';
import clsx from 'clsx';
import React, {
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Hint } from '../hint/Hint';
import { RadioProvider, useRadioContext } from './Radio.context';
import { Radios as NhsRadios } from 'nhsuk-frontend';

export type RadioProps = { inline?: boolean } & BaseFormElementProps &
  ElementProps<'div'>;

type RadioFactory = Factory<{
  props: RadioProps;
  ref: HTMLDivElement;
  staticComponents: {
    Item: typeof RadioItem;
    Divider: typeof RadioDivider;
  };
}>;

const Radio = factory<RadioFactory>(({ children, inline, ...props }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  const [withConditionals, setWithConditionals] = useState(false);

  useEffect(() => {
    if (!internalRef.current) {
      return;
    }

    new NhsRadios(internalRef.current);
  }, [internalRef, withConditionals]);

  const value = useMemo(
    () => ({ withConditionals, setWithConditionals }),
    [withConditionals, setWithConditionals],
  );

  const memoChildren = useMemo(() => children, [children]);

  return (
    <RadioProvider value={value}>
      <FormGroup
        as="div"
        withErrorLine
        {...props}
        ref={internalRef}
        inputType="radios"
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ className, withError: _withError, ...rest }) => (
          <div
            className={clsx(
              'nhsuk-radios',
              {
                'nhsuk-radios--inline': inline,
                'nhsuk-radios--conditional': withConditionals,
              },
              className,
            )}
            {...rest}
          >
            {memoChildren}
          </div>
        )}
      />
    </RadioProvider>
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

    const { setWithConditionals } = useRadioContext();

    useEffect(() => {
      setWithConditionals(hasConditional);
    }, []);

    const itemId = id || useIdWithPrefix('radio-item');
    const hintId = useIdWithPrefix('radio-item-hint');
    const conditionalId = useIdWithPrefix('radio-item-conditional');

    return (
      <>
        <div className="nhsuk-radios__item">
          <input
            className={clsx('nhsuk-radios__input', className)}
            id={itemId}
            {...props}
            ref={ref}
            aria-describedby={hint ? hintId : undefined}
            aria-controls={hasConditional ? conditionalId : undefined}
            aria-expanded={hasConditional ? 'false' : undefined}
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
            className={clsx(
              'nhsuk-radios__conditional nhsuk-radios__conditional--hidden',
            )}
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

const RadioDivider: React.FC<RadioDividerProps> = ({
  children = 'or',
  className,
  ...props
}) => (
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
