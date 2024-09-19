'use client';

import { Hint, HintProps } from '@/components/form-elements/hint/Hint';
import { Label, LabelProps } from '../label/Label';
import {
  ErrorMessage,
  ErrorMessageProps,
} from '@/components/form-elements/error-message/ErrorMessage';
import { ElementProps } from '@/types/shared';
import React, {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import { useFieldsetContext } from '@/components/form-elements/fieldset/Fieldset.context';
import { createPolymorphicComponent } from '@/internal/factory/create-polymorphic-factory';
import clsx from 'clsx';
import { Base } from '../base/Base';
import {
  Fieldset,
  FieldsetLegend,
} from '@/components/form-elements/fieldset/Fieldset';

export type BaseFormElementProps = {
  name?: string;
  id?: string;
  label?: ReactNode;
  hint?: ReactNode | ReactNode[];
  error?: string | Record<string, string>;
  labelProps?: LabelProps;
  hintProps?: HintProps;
  errorProps?: ErrorMessageProps;
  formGroupProps?: ElementProps<'div'>;
  withErrorLine?: boolean;
};

type FormGroupProps = BaseFormElementProps & {
  render: (
    props: BaseFormElementProps & {
      ref: ForwardedRef<any>;
      withError: boolean;
      errorMap?: Record<string, string>;
      className?: string;
      children?: ReactNode;
    },
  ) => ReactNode;
  inputType:
    | 'input'
    | 'radios'
    | 'select'
    | 'checkboxes'
    | 'dateinput'
    | 'textarea'
    | 'other';
  fieldsetProps?: ElementProps<'fieldset'>;
  withFieldset?: boolean;
  namePrefix?: string;
};

const _FormGroup = forwardRef<HTMLInputElement, FormGroupProps>(
  (props, ref) => {
    const {
      render,
      formGroupProps = {},
      fieldsetProps = {},
      withErrorLine,
      error,
      label,
      hint,
      labelProps = {},
      hintProps = {},
      errorProps = {},
      inputType,
      id,
      withFieldset,
      namePrefix,
      ...rest
    } = props;

    const [generatedId] = useState(useIdWithPrefix(namePrefix || inputType));
    const { isFieldset, dispatch: dispatchFieldsetAction } =
      useFieldsetContext();

    const hints = Array.isArray(hint) ? hint : [hint];
    const errorMessages =
      typeof error === 'string'
        ? [error]
        : typeof error === 'object'
          ? Object.values(error)
          : [];

    const elementId = id || generatedId;
    const labelId = `${elementId}--label`;
    const hintId = hints.map(() => `${useIdWithPrefix(elementId)}--hint`);
    const errorId = `${elementId}--error-message`;

    useEffect(() => {
      if (!isFieldset) {
        return;
      }

      dispatchFieldsetAction({
        type: 'set_error',
        data: { id: elementId, error: Boolean(error) },
      });

      return () =>
        dispatchFieldsetAction({
          type: 'set_error',
          data: { id: elementId, error: false },
        });
    }, [elementId, error, isFieldset]);

    useEffect(() => {
      dispatchFieldsetAction({
        type: 'register_component',
        data: { id: elementId, unregister: false },
      });
      return () =>
        dispatchFieldsetAction({
          type: 'register_component',
          data: { id: elementId, unregister: true },
        });
    }, []);

    const { className: formGroupClass, ...formGroupRest } = formGroupProps;

    const arias = {
      'aria-labelledby': labelId,
      'aria-describedby':
        clsx({ [`${hintId.join(' ')}`]: hint, [`${errorId}`]: error }) ||
        undefined,
    };

    const wrapWithFieldset =
      inputType === 'checkboxes' ||
      inputType === 'radios' ||
      inputType === 'dateinput' ||
      withFieldset;

    const renderProps = {
      as: undefined,
      id: elementId,
      withError: Boolean(error),
      ref,
      ...rest,
      ...(typeof error === 'object' && inputType === 'dateinput'
        ? {
            errorMap: error,
          }
        : {}),
      ...(!wrapWithFieldset ? arias : {}),
    };

    const outerBaseProps = {
      as: wrapWithFieldset ? 'div' : React.Fragment,
      ...(wrapWithFieldset
        ? {
            className: clsx(
              'nhsuk-form-group',
              {
                'nhsuk-form-group--error': withErrorLine && error,
              },
              formGroupClass,
            ),
            ...formGroupRest,
          }
        : {}),
    };

    const baseProps = {
      as: wrapWithFieldset ? Fieldset : 'div',
      ...(wrapWithFieldset
        ? { ...fieldsetProps, ...arias }
        : {
            className: clsx(
              'nhsuk-form-group',
              {
                'nhsuk-form-group--error': withErrorLine && error,
              },
              formGroupClass,
            ),
            ...formGroupRest,
          }),
    };

    const labelBaseProps = {
      as: wrapWithFieldset ? FieldsetLegend : Label,
      id: labelId,
      htmlFor: elementId,
      ...labelProps,
    };

    return (
      <Base<any> {...outerBaseProps}>
        <Base<any> {...baseProps}>
          {label && <Base<any> {...labelBaseProps} children={label} />}

          {hint &&
            hints.map((hint, idx) => (
              <Hint
                key={hintId[idx]}
                id={hintId[idx]}
                {...hintProps}
                className={clsx(hintProps.className, {
                  'nhsuk-u-margin-bottom-2': idx < hints.length - 1,
                })}
                children={hint}
              />
            ))}

          {error && (
            <ErrorMessage
              id={errorId}
              {...errorProps}
              children={errorMessages.join(' ')}
            />
          )}

          {render(renderProps)}
        </Base>
      </Base>
    );
  },
);

_FormGroup.displayName = 'FormGroup';

/**
 * Only use this component if you need to create a custom form element.
 *
 * This is the main component for most form elements. It wraps the input element with a label, hint and error message. It can also wrap the input element with a fieldset if required.
 */
export const FormGroup = createPolymorphicComponent<'input', FormGroupProps>(
  _FormGroup,
);
