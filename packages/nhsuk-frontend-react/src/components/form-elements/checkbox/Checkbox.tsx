'use client';

import clsx from 'clsx';
import { Checkboxes as NhsCheckboxes } from 'nhsuk-frontend';
import React, { ReactNode, useEffect, useImperativeHandle, useRef } from 'react';

import { BaseFormElementProps, FormGroup } from '@/components/core/form-group/FormGroup';
import { Label } from '@/components/core/label/Label';
import { Factory, factory } from '@/internal/factory/factory';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import { ElementProps } from '@/types/shared';

import { Hint } from '../hint/Hint';

export type CheckboxProps = BaseFormElementProps &
  ElementProps<'div'> & {
    small?: boolean;
  };

type CheckboxFactory = Factory<{
  props: CheckboxProps;
  ref: HTMLDivElement;
  staticComponents: {
    Item: typeof CheckboxItem;
    Divider: typeof CheckboxDivider;
  };
}>;

/**
 * This is the main wrapper for the Checkbox component.
 *
 * It should contain one or more {@link Checkbox.Item} or {@link CheckboxItem} components and optionally a {@link Checkbox.Divider} or {@link CheckboxDivider} component.
 */
const Checkbox = factory<CheckboxFactory>(({ children, small, ...props }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const checkboxesRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  useEffect(() => {
    if (!checkboxesRef.current) {
      return;
    }

    setTimeout(() => {
      new NhsCheckboxes(checkboxesRef.current);
    }, 0);

    return () => {
      checkboxesRef.current?.removeAttribute('data-nhsuk-checkboxes-init');
    };
  }, []);

  return (
    <FormGroup
      as="div"
      withErrorLine
      {...props}
      ref={internalRef}
      inputType="checkboxes"
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ className, withError: _withError, ref: _ref, ...rest }) => (
        <div
          className={clsx('nhsuk-checkboxes', { 'nhsuk-checkboxes--small': small }, className)}
          data-module="nhsuk-checkboxes"
          ref={checkboxesRef}
          {...rest}
        >
          {children}
        </div>
      )}
    />
  );
});

export type CheckboxItemProps = {
  hint?: ReactNode;
  conditional?: ReactNode;
} & (
  | { exclusive?: undefined; exclusiveGroup?: undefined }
  | { exclusive: true; exclusiveGroup: string }
  | { exclusive?: undefined; exclusiveGroup: string }
) &
  ElementProps<'input', 'type'>;

type CheckboxItemFactory = Factory<{
  props: CheckboxItemProps;
  ref: HTMLInputElement;
}>;

/**
 * This component is used to create a single checkbox item.
 *
 * If the `conditional` prop is provided, a conditional content will be displayed when the checkbox is checked.
 *
 * If the `exclusive` and `exclusiveGroup` props are provided, the checkbox will be exclusive to other checkboxes in the same group.
 */
const CheckboxItem = factory<CheckboxItemFactory>(
  ({ id, hint, conditional, exclusive, exclusiveGroup, className, children, ...props }, ref) => {
    const hasConditional = !!conditional;

    const itemId = id || useIdWithPrefix('checkbox-item');
    const hintId = `${itemId}-item-hint`;
    const conditionalId = `${itemId}-conditional`;

    return (
      <>
        <div className="nhsuk-checkboxes__item">
          <input
            className={clsx('nhsuk-checkboxes__input', className)}
            id={itemId}
            {...props}
            ref={ref}
            aria-describedby={hint ? hintId : undefined}
            {...(hasConditional ? { 'data-aria-controls': conditionalId } : {})}
            data-checkbox-exclusive-group={exclusiveGroup || undefined}
            data-checkbox-exclusive={exclusive ? 'true' : undefined}
            type="checkbox"
          />
          <Label htmlFor={itemId} className="nhsuk-checkboxes__label">
            {children}
          </Label>
          {hint && (
            <Hint className="nhsuk-checkboxes__hint" id={hintId}>
              {hint}
            </Hint>
          )}
        </div>
        {hasConditional && (
          <div
            className="nhsuk-checkboxes__conditional nhsuk-checkboxes__conditional--hidden"
            id={conditionalId}
          >
            {conditional}
          </div>
        )}
      </>
    );
  },
);

export type CheckboxDividerProps = ElementProps<'div'>;

/**
 * This component is used to add a separator between checkboxes.
 */
const CheckboxDivider = ({ children = 'or', className, ...props }: CheckboxDividerProps) => (
  <div className={clsx('nhsuk-checkboxes__divider', className)} {...props}>
    {children}
  </div>
);

Checkbox.displayName = 'Checkbox';
CheckboxItem.displayName = 'Checkbox.Item';
CheckboxDivider.displayName = 'Checkbox.Divider';

Checkbox.Item = CheckboxItem;
Checkbox.Divider = CheckboxDivider;

export { Checkbox, CheckboxDivider, CheckboxItem };
