import { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type BaseButtonProps = {
  disabled?: boolean
  secondary?: boolean
  reverse?: boolean
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  children,
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
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'submit',
}

type ButtonLinkProps = BaseButtonProps & AsElementLink<HTMLAnchorElement>

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  children,
  asElement: Component = 'a',
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
      {...rest}
    >
      {children}
    </Component>
  )
}

ButtonLink.defaultProps = {
  role: 'button',
  draggable: false,
}
