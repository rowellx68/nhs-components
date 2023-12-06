import FormGroup from '@/components/core/form-group/FormGroup'
import { FormElementProps } from '@/types/form-element-types'
import { InputWidth } from '@/types/nhsuk-sizes'
import clsx from 'clsx'
import {
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute,
  HTMLProps,
  ReactNode,
  forwardRef,
} from 'react'

type InputProps = {
  width?: InputWidth
  type?: HTMLInputTypeAttribute
  prefix?: ReactNode
  suffix?: ReactNode
} & Omit<HTMLProps<HTMLInputElement>, 'type'> &
  FormElementProps

/**
 * Use text input to let users enter a single line of text.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/text-input).
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
      render={({ id, name, className, error, width, type = 'text', ...rest }) =>
        props.prefix || props.suffix ? (
          <div className="nhsuk-input__wrapper">
            {props.prefix && (
              <div className="nhsuk-input__prefix" aria-hidden="true">{props.prefix}</div>
            )}
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
            {props.suffix && (
              <div className="nhsuk-input__suffix" aria-hidden="true">{props.suffix}</div>
            )}
          </div>
        ) : (
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
        )
      }
    />
  )
}

const InputForwardRef = forwardRef(Input)

InputForwardRef.displayName = 'Input'

export default InputForwardRef
