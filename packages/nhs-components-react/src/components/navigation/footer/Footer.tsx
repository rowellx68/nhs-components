import Container, {
  ContainerProps,
} from '@/components/core/container/Container'
import { HTMLProps } from 'react'
import clsx from 'clsx'
import { AsElementLink } from '@/types/link-like'

type FooterProps = {
  visuallyHiddenText?: string
  containerProps?: ContainerProps
  footerProps?: HTMLProps<HTMLDivElement>
} & HTMLProps<HTMLDivElement>

type ListItemProps = {
  containerProps?: HTMLProps<HTMLLIElement>
} & AsElementLink<HTMLAnchorElement>

type Footer = {
  List: typeof List
  ListItem: typeof ListItem
  Copyright: typeof Copyright
} & React.FC<FooterProps>

const List: React.FC<HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <ul className={clsx('nhsuk-footer__list', className)} {...rest}>
      {children}
    </ul>
  )
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  asElement: Component = 'a',
  containerProps = {},
  ...rest
}) => {
  const { className: liClassName, ...containerRest } = containerProps

  return (
    <li
      className={clsx('nhsuk-footer__list-item', liClassName)}
      {...containerRest}
    >
      <Component
        className={clsx('nhsuk-footer__list-item-link', className)}
        {...rest}
      >
        {children}
      </Component>
    </li>
  )
}

const Copyright: React.FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p className={clsx('nhsuk-footer__copyright', className)} {...rest}>
      {children}
    </p>
  )
}

const Footer: Footer = ({
  children,
  className,
  containerProps,
  footerProps = { role: 'contentinfo' },
  visuallyHiddenText = 'Support links',
  ...rest
}): JSX.Element => {
  return (
    <footer {...{ role: 'contentinfo', ...footerProps }}>
      <div className={clsx('nhsuk-footer', className)} {...rest}>
        <Container {...containerProps}>
          {visuallyHiddenText && (
            <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
          )}
          {children}
        </Container>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
List.displayName = 'Footer.List'
ListItem.displayName = 'Footer.ListItem'

Footer.List = List
Footer.ListItem = ListItem
Footer.Copyright = Copyright

export default Footer
