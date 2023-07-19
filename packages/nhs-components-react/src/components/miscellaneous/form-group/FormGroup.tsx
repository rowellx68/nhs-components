import { HTMLProps, memo, useEffect, useState } from 'react'
import clsx from 'clsx'
import useIdWithPrefix from '@/hooks/use-id-with-prefix'
import Label, { LabelProps } from '@/components/miscellaneous/label/Label'
import ErrorMessage, {
  ErrorMessageProps,
} from '@/components/form-elements/error-message/ErrorMessage'
import Hint from '@/components/form-elements/hint/Hint'
import { useFieldsetContext } from '@/index'

type FormGroupProps = {
  name?: string
  label?: string
  labelProps?: LabelProps
  hint?: string
  hintProps?: HTMLProps<HTMLDivElement>
  error?: string | boolean
  errorProps?: ErrorMessageProps
  disableErrorLine?: boolean
  inputType:
    | 'input'
    | 'radios'
    | 'select'
    | 'checkboxes'
    | 'dateinput'
    | 'textarea'
  render: (data: {
    elementId: string
    hintId?: string
    labelId?: string
    name: string
    hasError: boolean
  }) => JSX.Element
} & Omit<HTMLProps<HTMLDivElement>, 'children'>

const FormGroup: React.FC<FormGroupProps> = ({
  className,
  id,
  name,
  label,
  labelProps,
  hint,
  hintProps,
  error,
  errorProps,
  disableErrorLine,
  inputType,
  render,
}): JSX.Element => {
  const [generatedId] = useState(useIdWithPrefix(inputType))
  const { isFieldset, passError, registerComponent } = useFieldsetContext()

  const elementId = id || generatedId
  const labelId = `${elementId}--label`
  const hintId = `${elementId}--hint`
  const errorId = `${elementId}--error-message`

  useEffect(() => {
    if (!isFieldset) {
      return
    }

    passError(elementId, Boolean(error))

    return () => passError(elementId, false)
  }, [elementId, error, isFieldset])

  useEffect(() => {
    registerComponent(elementId)
    return () => registerComponent(elementId, true)
  }, [])

  return (
    <div
      className={clsx(
        'nhsuk-form-group',
        {
          'nhsuk-form-group--error': !disableErrorLine && error,
        },
        className,
      )}
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

      {render({
        elementId,
        hasError: Boolean(error),
        labelId: label ? labelId : undefined,
        hintId: hint ? hintId : undefined,
        name: name || elementId,
      })}
    </div>
  )
}

export default memo(FormGroup)
