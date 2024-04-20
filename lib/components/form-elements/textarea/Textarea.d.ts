import { FormElementProps } from '../../../types/form-element-types';
import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
type TextareaProps = Omit<HTMLProps<HTMLTextAreaElement>, 'width'> & FormElementProps;
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
declare const TextareaForwardRef: import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').RefAttributes<HTMLTextAreaElement>>;
export default TextareaForwardRef;
