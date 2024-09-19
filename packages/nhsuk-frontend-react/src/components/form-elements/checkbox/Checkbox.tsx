'use client';

import {
  BaseFormElementProps,
  FormGroup,
} from '@/components/core/form-group/FormGroup';
import { Label } from '@/components/core/label/Label';
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
import { CheckboxProvider, useCheckboxContext } from './Checkbox.context';
import initCheckbox from '@/resources/checkboxes/checkboxes';

export type CheckboxProps = BaseFormElementProps & ElementProps<'div'>;

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
const Checkbox = factory<CheckboxFactory>(({ children, ...props }, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  const [withConditionals, setWithConditionals] = useState(false);

  useEffect(() => {
    if (!internalRef.current) {
      return;
    }

    const parent = internalRef.current.closest('form')?.parentElement;

    if (!parent) {
      return;
    }

    initCheckbox({ scope: parent as any });
  }, [internalRef]);

  const value = useMemo(
    () => ({ withConditionals, setWithConditionals }),
    [withConditionals, setWithConditionals],
  );

  const memoChildren = useMemo(() => children, [children]);

  return (
    <CheckboxProvider value={value}>
      <FormGroup
        as="div"
        withErrorLine
        {...props}
        ref={internalRef}
        inputType="checkboxes"
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ className, withError: _withError, ...rest }) => (
          <div
            className={clsx(
              'nhsuk-checkboxes',
              { 'nhsuk-checkboxes--conditional': withConditionals },
              className,
            )}
            {...rest}
          >
            {memoChildren}
          </div>
        )}
      />
    </CheckboxProvider>
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
  (
    {
      id,
      hint,
      conditional,
      exclusive,
      exclusiveGroup,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const hasConditional = !!conditional;

    const { setWithConditionals } = useCheckboxContext();

    useEffect(() => {
      setWithConditionals(hasConditional);
    }, []);

    const itemId = id || useIdWithPrefix('checkbox-item');
    const hintId = useIdWithPrefix('checkbox-item-hint');
    const conditionalId = useIdWithPrefix('checkbox-item-conditional');

    return (
      <>
        <div className="nhsuk-checkboxes__item">
          <input
            className={clsx('nhsuk-checkboxes__input', className)}
            id={itemId}
            {...props}
            ref={ref}
            aria-describedby={hint ? hintId : undefined}
            aria-controls={hasConditional ? conditionalId : undefined}
            aria-expanded={hasConditional ? 'false' : undefined}
            data-checkbox-exclusive-group={
              exclusiveGroup ? exclusiveGroup : undefined
            }
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
            className={clsx(
              'nhsuk-checkboxes__conditional nhsuk-checkboxes__conditional--hidden',
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

export type CheckboxDividerProps = ElementProps<'div'>;

/**
 * This component is used to add a separator between checkboxes.
 */
const CheckboxDivider: React.FC<CheckboxDividerProps> = ({
  children = 'or',
  className,
  ...props
}) => (
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
