import { Size } from '@/types/nhsuk-sizes'
import { Fragment, HTMLProps } from 'react'
import clsx from 'clsx'

export type LabelProps = {
  isPageHeading?: boolean
  size?: Size
} & Omit<HTMLProps<HTMLLabelElement>, 'size'>

/**
 * This component is not meant to be used directly.
 *
 * @param {string} [props.className] - An optional class name to apply to the label.
 * @param {Size} [props.size] - The size of the label.
 * @param {boolean} [props.isPageHeading] - Whether the label is a page heading.
 *
 * @example
 * ```tsx
 * <Label size="xl">Example</Label>
 * <Label isPageHeading>Example</Label>
 * ```
 */
const Label: React.FC<LabelProps> = ({
  children,
  className,
  size,
  isPageHeading,
  ...rest
}): JSX.Element => {
  const Wrapper = isPageHeading || size === 'xl' ? 'h1' : Fragment
  const wrapperProps =
    Wrapper === 'h1' ? { className: 'nhsuk-label-wrapper' } : {}

  return (
    <Wrapper {...wrapperProps}>
      <label
        className={clsx(
          'nhsuk-label',
          { 'nhsuk-label--xl': isPageHeading && !size },
          { [`nhsuk-label--${size}`]: size },
          className,
        )}
        {...rest}
      >
        {children}
      </label>
    </Wrapper>
  )
}

Label.displayName = 'Label'

export default Label
