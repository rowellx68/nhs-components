import { HTMLProps, ReactNode, useEffect, useState } from 'react'
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
  hint?: ReactNode
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

/**
 * This component is not meant to be used directly.
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {string} [props.id] - An optional ID for the form group. If not provided, a unique ID will be generated.
 * @param {string} [props.name] - An optional name for the form group. If not provided, the ID will be used.
 * @param {string} [props.label] - An optional label for the form group.
 * @param {LabelProps} [props.labelProps] - Any other props to be passed to the label.
 * @param {ReactNode} [props.hint] - An optional hint to be displayed above the form group.
 * @param {HTMLProps<HTMLDivElement>} [props.hintProps] - Any other props to be passed to the hint.
 * @param {string | boolean} [props.error] - An optional error message to be displayed above the form group.
 * @param {ErrorMessageProps} [props.errorProps] - Any other props to be passed to the error message.
 * @param {boolean} [props.disableErrorLine] - Whether to disable the error line.
 * @param {'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea'} [props.inputType] - The type of input to render.
 * @param {(data: { elementId: string; hintId?: string; labelId?: string; name: string; hasError: boolean }) => JSX.Element} [props.render] - A render function that will be passed the element ID, hint ID, label ID, name, and whether the form group has an error.
 *
 * @example
 * ```tsx
 * <FormGroup
 *  id="example"
 *  label="Example"
 *  inputType="input"
 *  render={({ elementId, hintId, labelId, name, hasError }) => (
 *    <input />
 *  )} />
 * ```
 */
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

FormGroup.displayName = 'FormGroup'

export default FormGroup
