import { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type BaseButtonProps = {
  disabled?: boolean
  secondary?: boolean
  reverse?: boolean
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Use buttons to help users carry out an action on a page like starting an application or saving their progress.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/button).
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  children,
  type = 'submit',
  ...rest
}): JSX.Element => {
  return (
    <button
      className={clsx(
        'nhsuk-button',
        {
          'nhsuk-button--disabled': disabled,
          'nhsuk-button--secondary': secondary,
          'nhsuk-button--reverse': reverse,
        },
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

type ButtonLinkProps = BaseButtonProps & AsElementLink<HTMLAnchorElement>

/**
 * Use buttons to help users carry out an action on a page like starting an application or saving their progress.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/button).
 */
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  children,
  asElement: Component = 'a',
  role = 'button',
  draggable = false,
  ...rest
}): JSX.Element => {
  return (
    <Component
      className={clsx(
        'nhsuk-button',
        {
          'nhsuk-button--disabled': disabled,
          'nhsuk-button--secondary': secondary,
          'nhsuk-button--reverse': reverse,
        },
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled}
      role={role}
      draggable={draggable}
      {...rest}
    >
      {children}
    </Component>
  )
}
