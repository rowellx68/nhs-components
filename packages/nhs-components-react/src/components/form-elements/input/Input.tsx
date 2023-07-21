import FormGroup from '@/components/miscellaneous/form-group/FormGroup'
import { FormElementProps } from '@/types/form-element-types'
import { InputWidth } from '@/types/nhsuk-sizes'
import clsx from 'clsx'
import {
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute,
  HTMLProps,
  forwardRef,
} from 'react'

type InputProps = {
  width?: InputWidth
  type?: HTMLInputTypeAttribute
} & Omit<HTMLProps<HTMLInputElement>, 'type'> &
  FormElementProps

/**
 * Use text input to let users enter a single line of text.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/text-input).
 *
 * @param {string} [props.id] - An optional ID for the input. If not passed, one will be generated.
 * @param {InputWidth} [props.width] - The width of the input.
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {string} [props.label] - An optional label for the input.
 * @param {HTMLProps<HTMLLabelElement>} [props.labelProps] - Any other props to be passed to the label.
 * @param {string} [props.hint] - An optional hint to be displayed above the input.
 * @param {HTMLProps<HTMLDivElement>} [props.hintProps] - Any other props to be passed to the hint.
 * @param {string} [props.error] - An optional error message to be displayed above the input.
 * @param {HTMLProps<HTMLDivElement>} [props.errorProps] - Any other props to be passed to the error message.
 * @param {boolean} [props.disableErrorLine] - Whether to disable the error line.
 * @param {HTMLInputTypeAttribute} [props.type] - The type of the input. Defaults to `text`.
 * @param {React.ForwardedRef<HTMLInputElement>} [ref] - Optional ref to be passed to the input.
 *
 * @example
 * ```tsx
 * <Input id="example" label="Example" />
 * ```
 */
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    id,
    width,
    className,
    label,
    labelProps,
    hint,
    hintProps,
    error,
    errorProps,
    disableErrorLine,
    type = 'text',
    ...rest
  },
  ref,
): JSX.Element => {
  return (
    <FormGroup
      id={id}
      label={label}
      labelProps={labelProps}
      hint={hint}
      hintProps={hintProps}
      error={error}
      errorProps={errorProps}
      disableErrorLine={disableErrorLine}
      inputType="input"
      render={({ elementId, hintId, labelId, name, hasError }) => (
        <input
          id={elementId}
          aria-describedby={hintId}
          aria-labelledby={labelId}
          name={name}
          className={clsx(
            'nhsuk-input',
            {
              [`nhsuk-input--width-${width}`]: width,
              'nhsuk-input--error': hasError,
            },
            className,
          )}
          ref={ref}
          type={type}
          {...rest}
        />
      )}
    />
  )
}

const InputForwardRef = forwardRef(Input)

InputForwardRef.displayName = 'Input'

export default InputForwardRef
