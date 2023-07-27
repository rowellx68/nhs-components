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
 * @example
 * ```tsx
 * <Input id="example" label="Example" />
 * ```
 */
const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref,
): JSX.Element => {
  return (
    <FormGroup<InputProps>
      {...props}
      inputType="input"
      render={({
        id,
        name,
        className,
        error,
        width,
        type = 'text',
        ...rest
      }) => (
        <input
          id={id}
          name={name}
          className={clsx(
            'nhsuk-input',
            {
              [`nhsuk-input--width-${width}`]: width,
              'nhsuk-input--error': error,
            },
            className,
          )}
          type={type}
          ref={ref}
          {...rest}
        />
      )}
    />
  )
}

const InputForwardRef = forwardRef(Input)

InputForwardRef.displayName = 'Input'

export default InputForwardRef
