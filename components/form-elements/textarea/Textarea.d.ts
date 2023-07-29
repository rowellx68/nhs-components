import { FormElementProps } from '../../../types/form-element-types';
import { HTMLProps } from 'react';
type TextareaProps = Omit<HTMLProps<HTMLTextAreaElement>, 'width'> & FormElementProps;
/**
 * Use textarea to let users enter more than 1 line of text.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).
 *
 * @param {TextareaProps} props - The props of the component.
 * @param {React.ForwardedRef<HTMLTextAreaElement>} ref - Optional ref to be passed to the textarea.
 *
 * @example
 * ```tsx
 * <Textarea id="example" label="Example" />
 * ```
 */
declare const TextareaForwardRef: import("react").ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>>;
export default TextareaForwardRef;
