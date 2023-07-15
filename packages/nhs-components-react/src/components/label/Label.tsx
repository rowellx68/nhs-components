import { Size } from '@/types/nhsuk-sizes'
import { HTMLProps } from 'react'
import clsx from 'clsx'

export type LabelProps = {
  isPageHeading?: boolean
  size?: Size
} & Omit<HTMLProps<HTMLLabelElement>, 'size'>

const BaseLabel: React.FC<LabelProps> = ({
  children,
  className,
  size,
  isPageHeading,
  ...rest
}): JSX.Element => {
  return (
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
  )
}

const Label: React.FC<LabelProps> = ({
  children,
  className,
  size,
  isPageHeading,
  ...rest
}): JSX.Element => {
  if (isPageHeading || size === 'xl') {
    return (
      <h1 className="nhsuk-label-wrapper">
        <BaseLabel className={className} isPageHeading {...rest}>
          {children}
        </BaseLabel>
      </h1>
    )
  }

  return (
    <BaseLabel className={className} size={size} {...rest}>
      {children}
    </BaseLabel>
  )
}

export default Label
