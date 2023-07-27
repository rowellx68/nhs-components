import { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'
import {
  HTMLProps,
  ForwardRefRenderFunction,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react'

type ErrorSummary = {
  Title: typeof ErrorSummaryTitle
  Body: typeof ErrorSummaryBody
  List: typeof ErrorSummaryList
  Item: typeof ErrorSummaryListItem
} & ForwardRefExoticComponent<
  PropsWithoutRef<HTMLProps<HTMLDivElement>> & RefAttributes<HTMLDivElement>
>

const ErrorSummaryTitle: React.FC<HTMLProps<HTMLHeadingElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <h2 className={clsx('nhsuk-error-summary__title', className)} {...rest}>
      {children}
    </h2>
  )
}

const ErrorSummaryBody: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-error-summary__body', className)} {...rest}>
      {children}
    </div>
  )
}

const ErrorSummaryList: React.FC<HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <ul
      className={clsx('nhsuk-list', 'nhsuk-error-summary__list', className)}
      {...rest}
    >
      {children}
    </ul>
  )
}

const ErrorSummaryListItem: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  return (
    <li>
      <Component {...rest}>{children}</Component>
    </li>
  )
}

const ErrorSummary: ForwardRefRenderFunction<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
> = ({ children, className, ...rest }, ref): JSX.Element => {
  return (
    <div className={clsx('nhsuk-error-summary', className)} ref={ref} {...rest}>
      {children}
    </div>
  )
}

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
const ErrorSummaryRef = forwardRef(ErrorSummary) as ErrorSummary

ErrorSummaryRef.displayName = 'ErrorSummary'
ErrorSummaryBody.displayName = 'ErrorSummary.Body'
ErrorSummaryList.displayName = 'ErrorSummary.List'
ErrorSummaryListItem.displayName = 'ErrorSummary.Item'

ErrorSummaryRef.Title = ErrorSummaryTitle
ErrorSummaryRef.Body = ErrorSummaryBody
ErrorSummaryRef.List = ErrorSummaryList
ErrorSummaryRef.Item = ErrorSummaryListItem

export default ErrorSummaryRef
