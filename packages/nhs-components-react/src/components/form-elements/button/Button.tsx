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
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/button).
 *
 * @param {string} [props.className] - Optional additional classes to add to the button.
 * @param {boolean} [props.disabled] - Disables the button, preventing user interaction.
 * @param {boolean} [props.secondary] - Changes the button to a secondary style.
 * @param {boolean} [props.reverse] - Changes the button to a reverse style.
 * @param {string} [props.type] - The type of button. Defaults to `submit`.
 *
 * @example
 * ```tsx
 * <Button>Default button</Button>
 * <Button secondary>Secondary button</Button>
 * <Button reverse>Reverse button</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  secondary,
  reverse,
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
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/button).
 *
 * @param {string} [props.className] - Optional additional classes to add to the button.
 * @param {boolean} [props.disabled] - Disables the button, preventing user interaction.
 * @param {boolean} [props.secondary] - Changes the button to a secondary style.
 * @param {boolean} [props.reverse] - Changes the button to a reverse style.
 * @param {React.ElementType} [props.asElement] - The element to render the button as. Defaults to `a`.
 * @param {string} [props.role] - The role of the button. Defaults to `button`.
 * @param {boolean} [props.draggable] - Whether the button is draggable. Defaults to `false`.
 *
 * @example
 * ```tsx
 * <ButtonLink href="https://www.nhs.uk">Default button</ButtonLink>
 * <ButtonLink asElement={Link} to="/somewhere">Default button</ButtonLink>
 * ```
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

Button.displayName = 'Button'
ButtonLink.displayName = 'ButtonLink'
