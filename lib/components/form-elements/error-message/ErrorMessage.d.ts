import { VisuallyHiddenProps } from '../../../types/visually-hidden';
import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
export type ErrorMessageProps = HTMLProps<HTMLSpanElement> & Partial<VisuallyHiddenProps>;
/**
 * Use an error message when there is a validation error. Explain what went wrong and how to fix it.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/error-message).
 *
 *
 * @param {string} [props.className] - Optional additional className to add to the component.
 * @param {string} [props.visuallyHiddenText] - Visually hidden text for screen readers. Defaults to 'Error'.
 *
 * @example
 * ```tsx
 * <ErrorMessage>Example error message</ErrorMessage>
 * ```
 */
declare const ErrorMessage: React.FC<ErrorMessageProps>;
export default ErrorMessage;
