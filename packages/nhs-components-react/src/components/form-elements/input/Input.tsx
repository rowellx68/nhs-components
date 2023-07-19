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

const render: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
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

const Input = forwardRef(render)

export default Input
