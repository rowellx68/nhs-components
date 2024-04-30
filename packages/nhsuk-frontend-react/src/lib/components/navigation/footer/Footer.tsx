import Container, {
  ContainerProps,
} from '@/components/core/container/Container'
import { HTMLProps } from 'react'
import clsx from 'clsx'
import { AsElementLink } from '@/types/link-like'
import { VisuallyHiddenProps } from '@/types/visually-hidden'

type FooterProps = {
  containerProps?: ContainerProps
  footerContainerProps?: HTMLProps<HTMLDivElement>
  footerProps?: HTMLProps<HTMLDivElement>
} & HTMLProps<HTMLDivElement> &
  Partial<VisuallyHiddenProps>

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
  footerContainerProps,
  footerProps = { role: 'contentinfo' },
  visuallyHiddenText = 'Support links',
  ...rest
}): JSX.Element => {
  const { className: footerContainerClassName, ...footerContainerRest } = footerContainerProps || {}

  return (
    <footer {...{ role: 'contentinfo', ...footerProps }}>
      <div className={clsx('nhsuk-footer-container', footerContainerClassName)} {...footerContainerRest}>
        <Container {...containerProps}>
          <div className={clsx('nhsuk-footer', className)} {...rest}>
              {visuallyHiddenText && (
                <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
              )}
              {children}
          </div>
        </Container>
      </div>
    </footer>
  )
}

Footer.displayName = 'Footer'
List.displayName = 'Footer.List'
ListItem.displayName = 'Footer.ListItem'
Copyright.displayName = 'Footer.Copyright'

Footer.List = List
Footer.ListItem = ListItem
Footer.Copyright = Copyright

export default Footer
