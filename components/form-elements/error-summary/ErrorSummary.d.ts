import { AsElementLink } from '../../../types/link-like';
import { HTMLProps, ForwardRefRenderFunction, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
type ErrorSummary = {
    Title: typeof ErrorSummaryTitle;
    Body: typeof ErrorSummaryBody;
    List: typeof ErrorSummaryList;
    Item: typeof ErrorSummaryListItem;
} & ForwardRefExoticComponent<PropsWithoutRef<HTMLProps<HTMLDivElement>> & RefAttributes<HTMLDivElement>>;
declare const ErrorSummaryTitle: React.FC<HTMLProps<HTMLHeadingElement>>;
declare const ErrorSummaryBody: React.FC<HTMLProps<HTMLDivElement>>;
declare const ErrorSummaryList: React.FC<HTMLProps<HTMLUListElement>>;
declare const ErrorSummaryListItem: React.FC<AsElementLink<HTMLAnchorElement>>;
declare const ErrorSummary: ForwardRefRenderFunction<HTMLDivElement, HTMLProps<HTMLDivElement>>;
/**
 * Include an error summary at the top of a page to summarise any mistakes a user has made.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/error-summary).
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {React.ForwardedRef<HTMLDivElement>} [ref] - Optional ref to be passed to the container.
 *
 * @example
 * ```tsx
 * <ErrorSummary>
 *  <ErrorSummary.Title>Error summary title</ErrorSummary.Title>
 * <ErrorSummary.Body>
 *  <ErrorSummary.List>
 *   <ErrorSummary.Item href="#example-error-1">Example error 1</ErrorSummary.Item>
 *  </ErrorSummary.List>
 * </ErrorSummary.Body>
 * </ErrorSummary>
 * ```
 */
declare const ErrorSummaryRef: ErrorSummary;
export default ErrorSummaryRef;
