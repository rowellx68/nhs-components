import { HTMLProps, ReactNode, useEffect, useState } from 'react'
import clsx from 'clsx'
import useIdWithPrefix from '@/hooks/use-id-with-prefix'
import Label from '@/components/core/label/Label'
import ErrorMessage from '@/components/form-elements/error-message/ErrorMessage'
import Hint from '@/components/form-elements/hint/Hint'
import { useFieldsetContext } from '@/index'
import { FormElementProps } from '@/types/form-element-types'

type ExcludedProps =
  | 'hint'
  | 'label'
  | 'labelProps'
  | 'hintProps'
  | 'errorProps'
  | 'inputType'
  | 'disableErrorLine'

type BaseFormElementRenderProps = {
  error?: string | boolean
} & HTMLProps<
  HTMLInputElement | HTMLDivElement | HTMLSelectElement | HTMLTextAreaElement
>

type FormElementRenderProps<T> = Omit<T, ExcludedProps> & {
  id: string
  name: string
}

type FormGroupProps<T> = FormElementProps & {
  render: (props: FormElementRenderProps<T>) => ReactNode
  inputType:
    | 'input'
    | 'radios'
    | 'select'
    | 'checkboxes'
    | 'dateinput'
    | 'textarea'
}

const FormGroup = <T extends BaseFormElementRenderProps>(
  props: FormGroupProps<T>,
): JSX.Element => {
  const {
    render,
    hint,
    label,
    id,
    labelProps,
    error,
    hintProps,
    errorProps,
    formGroupProps,
    inputType,
    disableErrorLine,
    name,
    ...rest
  } = props

  const [generatedId] = useState(useIdWithPrefix(inputType))
  const { isFieldset, dispatch: dispatchFieldsetAction } = useFieldsetContext()

  const elementId = id || generatedId
  const labelId = `${elementId}--label`
  const hintId = `${elementId}--hint`
  const errorId = `${elementId}--error-message`

  const renderProps = {
    'aria-describedby': hint ? hintId : undefined,
    'aria-labelledby': label ? labelId : undefined,
    error,
    name: name || elementId,
    id: elementId,
    ...rest,
  } as FormElementRenderProps<T>

  useEffect(() => {
    if (!isFieldset) {
      return
    }

    dispatchFieldsetAction({
      type: 'set_error',
      data: { id: elementId, error: Boolean(error) },
    })

    return () =>
      dispatchFieldsetAction({
        type: 'set_error',
        data: { id: elementId, error: false },
      })
  }, [elementId, error, isFieldset])

  useEffect(() => {
    dispatchFieldsetAction({
      type: 'register_component',
      data: { id: elementId, unregister: false },
    })
    return () =>
      dispatchFieldsetAction({
        type: 'register_component',
        data: { id: elementId, unregister: true },
      })
  }, [])

  const { className: formGroupClass, ...formGroupRest } = formGroupProps || {}

  return (
    <div
      className={clsx(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': !disableErrorLine && error,
        },
        formGroupClass,
      )}
      {...formGroupRest}
    >
      {label && (
        <Label id={labelId} htmlFor={elementId} {...labelProps}>
          {label}
        </Label>
      )}

      {hint && (
        <Hint id={hintId} htmlFor={elementId} {...hintProps}>
          {hint}
        </Hint>
      )}

      {error && typeof error === 'string' && (
        <ErrorMessage id={errorId} htmlFor={elementId} {...errorProps}>
          {error}
        </ErrorMessage>
      )}

      {render(renderProps)}
    </div>
  )
}

FormGroup.displayName = 'FormGroup'

export default FormGroup
