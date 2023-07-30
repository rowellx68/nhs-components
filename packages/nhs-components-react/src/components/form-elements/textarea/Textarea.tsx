import FormGroup from '@/components/core/form-group/FormGroup'
import { FormElementProps } from '@/types/form-element-types'
import clsx from 'clsx'
import { ForwardRefRenderFunction, HTMLProps, forwardRef } from 'react'

type TextareaProps = Omit<HTMLProps<HTMLTextAreaElement>, 'width'> &
  FormElementProps

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  props,
  ref,
): JSX.Element => {
  return (
    <FormGroup<TextareaProps>
      {...props}
      inputType="textarea"
      render={({ id, name, error, className, rows, ...rest }) => (
        <textarea
          id={id}
          name={name}
          className={clsx(
            'nhsuk-textarea',
            {
              'nhsuk-textarea--error': error,
            },
            className,
          )}
          ref={ref}
          rows={rows}
          {...rest}
        />
      )}
    />
  )
}

/**
 * Use textarea to let users enter more than 1 line of text.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).
 *
 * @param {TextareaProps} props - The props of the component.
 * @param {React.ForwardedRef<HTMLTextAreaElement>} ref - Optional ref to be passed to the textarea.
 *
 * @example
 * ```tsx
 * <Textarea id="example" label="Example" />
 * ```
 */
const TextareaForwardRef = forwardRef(Textarea)

TextareaForwardRef.displayName = 'Textarea'

export default TextareaForwardRef
