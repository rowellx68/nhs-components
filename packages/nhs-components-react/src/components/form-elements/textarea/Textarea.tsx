import FormGroup from '@/components/miscellaneous/form-group/FormGroup'
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
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).
 *
 * @param {string} [props.id] - An optional ID for the textarea. If not passed, one will be generated.
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {string} [props.label] - An optional label for the textarea.
 * @param {HTMLProps<HTMLLabelElement>} [props.labelProps] - Any other props to be passed to the label.
 * @param {string} [props.hint] - An optional hint to be displayed above the textarea.
 * @param {HTMLProps<HTMLDivElement>} [props.hintProps] - Any other props to be passed to the hint.
 * @param {string} [props.error] - An optional error message to be displayed above the textarea.
 * @param {HTMLProps<HTMLDivElement>} [props.errorProps] - Any other props to be passed to the error message.
 * @param {boolean} [props.disableErrorLine] - Whether to disable the error line.
 * @param {number} [props.rows] - The number of rows to display.
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
