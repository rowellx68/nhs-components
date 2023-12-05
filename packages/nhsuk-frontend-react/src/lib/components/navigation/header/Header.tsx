import clsx from 'clsx'
import React, {
  ComponentProps,
  HTMLProps,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import HeaderContext, {
  HeaderContextValue,
  useHeaderContext,
} from './HeaderContext'
import { AsElementLink } from '@/types/link-like'
import { NhsLogo } from '@/assets/nhs-logo'
import { ChevronRightIcon, CloseIcon, SearchIcon } from '@/icons'
import Container from '@/components/core/container'

type Header = {
  Logo: typeof Logo
  TransactionalLink: typeof TransactionalServiceName
  Container: typeof HeaderContainer
  MenuToggle: typeof MenuToggle
  Content: typeof HeaderContent
  Nav: typeof HeaderNav
  NavItem: typeof NavItem
  Search: typeof Search
} & React.FC<HeaderProps>

type HeaderProps = Partial<{
  transactional: boolean
  orgName: string
  orgSplit: string
  orgDescriptor: string
  serviceName: string
  white: boolean
}> &
  HTMLProps<HTMLDivElement> &
  PropsWithChildren

type MenuToggleProps = {
  type?: 'button' | 'submit' | 'reset'
} & Omit<HTMLProps<HTMLButtonElement>, 'children'>

type LogoProps = {
  image?: HTMLProps<HTMLImageElement>
} & Omit<AsElementLink<HTMLAnchorElement>, 'children'>

type HeaderNavProps = {
  containerProps?: ComponentProps<typeof Container>
} & HTMLProps<HTMLDivElement> &
  PropsWithChildren

type NavItemProps = {
  mobileOnly?: boolean
} & AsElementLink<HTMLAnchorElement> &
  PropsWithChildren

type HeaderContentProps = HTMLProps<HTMLDivElement> & PropsWithChildren

type ButtonToggleProps = {
  'data-testid'?: string
} & Omit<
  HTMLProps<HTMLButtonElement>,
  'children' | 'type' | 'onClick' | 'className'
>

type SearchProps = {
  visuallyHiddenText?: string
  toggleProps?: ButtonToggleProps
  submitProps?: ButtonToggleProps
  closeProps?: ButtonToggleProps
} & Omit<HTMLProps<HTMLInputElement>, 'children'>

const Logo: React.FC<LogoProps> = ({
  className,
  asElement: Component = 'a',
  image,
  ...rest
}): JSX.Element => {
  const {
    orgName,
    orgDescriptor,
    orgSplit,
    serviceName,
    hasMenuToggle,
    hasSearch,
    hasTransactionalLink,
  } = useHeaderContext()

  const label = orgName
    ? [orgName, orgSplit, orgDescriptor, 'homepage']
      .filter((val) => !!val)
      .join(' ')
    : 'NHS homepage'

  const {
    src: imageSrc,
    className: imageClassName,
    alt: imageAlt,
    ...restImageProps
  } = image || {}

  return (
    <div
      className={clsx('nhsuk-header__logo', {
        'nhsuk-header__logo--only':
          !hasMenuToggle && !hasSearch && hasTransactionalLink,
      })}
    >
      <Component
        className={clsx(
          'nhsuk-header__link',
          {
            'nhsuk-header__link--service': !orgName && serviceName,
          },
          className,
        )}
        aria-label={label}
        {...rest}
      >
        {imageSrc ? (
          <img
            className={clsx('nhsuk-org-logo', imageClassName)}
            src={imageSrc}
            alt={imageAlt}
            {...restImageProps}
          />
        ) : (
          <NhsLogo />
        )}
        {orgName && (
          <>
            <span className="nhsuk-organisation-name">
              {orgName}
              {orgSplit && (
                <span className="nhsuk-organisation-name-split">
                  {orgSplit}
                </span>
              )}
            </span>
            {orgDescriptor && (
              <span className="nhsuk-organisation-descriptor">
                {orgDescriptor}
              </span>
            )}
          </>
        )}

        {!hasTransactionalLink && serviceName && (
          <span className="nhsuk-header__service-name">{serviceName}</span>
        )}
      </Component>
    </div>
  )
}

const TransactionalServiceName: React.FC<
  Omit<AsElementLink<HTMLAnchorElement>, 'children'>
> = ({ className, asElement: Component = 'a', ...rest }): JSX.Element => {
  const { serviceName, setHasTransactionalLink } = useHeaderContext()

  useEffect(() => {
    setHasTransactionalLink(true)

    return () => setHasTransactionalLink(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="nhsuk-header__transactional-service-name">
      <Component
        className={clsx(
          'nhsuk-header__transactional-service-name--link',
          className,
        )}
        {...rest}
      >
        {serviceName}
      </Component>
    </div>
  )
}

const MenuToggle: React.FC<MenuToggleProps> = ({
  className,
  onClick,
  ...rest
}): JSX.Element => {
  const { toggleMenu, setHasMenuToggle, menuOpen } = useHeaderContext()

  const onToggleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleMenu()
    onClick?.(e)
  }

  useEffect(() => {
    setHasMenuToggle(true)
    return () => setHasMenuToggle(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="nhsuk-header__menu">
      <button
        className={clsx('nhsuk-header__menu-toggle', className)}
        aria-label="Open menu"
        aria-expanded={menuOpen ? 'true' : 'false'}
        onClick={onToggleClick}
        {...rest}
      >
        Menu
      </button>
    </div>
  )
}

const HeaderContainer: React.FC<ComponentProps<typeof Container>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <Container className={clsx('nhsuk-header__container', className)} {...rest}>
      {children}
    </Container>
  )
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  children,
  className,
  id = 'content-header',
  ...rest
}): JSX.Element => {
  const { searchOpen } = useHeaderContext()
  return (
    <div
      className={clsx(
        'nhsuk-header__content',
        { 'js-show': searchOpen },
        className,
      )}
      id={id}
      {...rest}
    >
      {children}
    </div>
  )
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  children,
  className,
  open,
  role = 'navigation',
  containerProps = {},
  ...rest
}): JSX.Element => {
  const { menuOpen, toggleMenu } = useHeaderContext()

  return (
    <nav
      className={clsx(
        'nhsuk-header__navigation',
        {
          'js-show': open ?? menuOpen,
        },
        className,
      )}
      aria-label="Primary navigation"
      aria-labelledby="label-navigation"
      role={role}
      {...rest}
    >
      <Container {...containerProps}>
        <p className="nhsuk-header__navigation-title">
          <span id="label-navigation">Menu</span>
          <button
            className="nhsuk-header__navigation-close"
            id="close-menu"
            onClick={toggleMenu}
          >
            <CloseIcon />
            <span className="nhsuk-u-visually-hidden">Close menu</span>
          </button>
        </p>
        <ul className="nhsuk-header__navigation-list">{children}</ul>
      </Container>
    </nav>
  )
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  className,
  mobileOnly,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  return (
    <li
      className={clsx(
        'nhsuk-header__navigation-item',
        { 'nhsuk-header__navigation-item--for-mobile': mobileOnly },
        className,
      )}
    >
      <Component className="nhsuk-header__navigation-link" {...rest}>
        {children}
        <ChevronRightIcon />
      </Component>
    </li>
  )
}

const Search: React.FC<SearchProps> = ({
  className,
  action = '/search',
  method = 'get',
  id = 'search-field',
  type = 'search',
  autoComplete = 'off',
  placeholder = 'Search',
  role = 'search',
  visuallyHiddenText = 'Search',
  toggleProps = {},
  submitProps = {},
  closeProps = {},
  ...rest
}): JSX.Element => {
  const { toggleSearch, setHasSearch, searchOpen } = useHeaderContext()

  useEffect(() => {
    setHasSearch(true)

    return () => setHasSearch(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={clsx('nhsuk-header__search', className)}>
      <button
        className={clsx('nhsuk-header__search-toggle', {
          'is-active': searchOpen,
        })}
        onClick={toggleSearch}
        {...toggleProps}
      >
        <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
        <SearchIcon />
      </button>
      <div
        className={clsx('nhsuk-header__search-wrap', {
          'js-show': searchOpen,
        })}
      >
        <form
          className="nhsuk-header__search-form"
          action={action}
          method={method}
          role={role}
        >
          <label className="nhsuk-u-visually-hidden" htmlFor={id}>
            {visuallyHiddenText}
          </label>
          <input
            className="nhsuk-search__input"
            id={id}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...rest}
          />
          <button
            className="nhsuk-search__submit"
            type="submit"
            aria-label="Submit search"
            {...submitProps}
          >
            <SearchIcon />
          </button>
          <button
            className="nhsuk-search__close"
            type="button"
            onClick={toggleSearch}
            {...closeProps}
          >
            <CloseIcon />
            <span className="nhsuk-u-visually-hidden">Close search</span>
          </button>
        </form>
      </div>
    </div>
  )
}

/**
 * Use the header to show users they are on an NHS service and help them get started in finding what they need.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/header).
 *
 * @link https://service-manual.nhs.uk/design-system/components/header
 *
 * @example
 * ```tsx
 * <Header orgName="Anytown Anyplace" orgSplit="Anywhere" orgDescriptor="NHS Foundation Trust">
 *  <Header.Container>
 *   <Header.Logo href="/" />
 *   <Header.Content>
 *    <Header.MenuToggle />
 *   </Header.Content>
 *  </Header.Container>
 *  <Header.Nav>
 *   <Header.NavItem mobileOnly href="/">Home</Header.NavItem>
 *   <Header.NavItem href="/service-one">Service one</Header.NavItem>
 *   <Header.NavItem href="/service-two">Service two</Header.NavItem>
 *  </Header.Nav>
 * </Header>
 * ```
 */
const Header: Header = ({
  children,
  className,
  role = 'banner',
  transactional,
  orgName,
  orgSplit,
  orgDescriptor,
  serviceName,
  white,
  ...rest
}): JSX.Element => {
  const [hasMenuToggle, setHasMenuToggle] = useState<boolean>(false)
  const [menuOpen, toggleMenu] = useState<boolean>(false)
  const [searchOpen, toggleSearch] = useState<boolean>(false)
  const [hasSearch, setHasSearch] = useState<boolean>(false)
  const [hasTransactionalLink, setHasTransactionalLink] =
    useState<boolean>(false)

  const value: HeaderContextValue = {
    orgName,
    orgSplit,
    orgDescriptor,
    serviceName,
    transactional: transactional ?? false,
    hasSearch,
    searchOpen,
    menuOpen,
    hasMenuToggle,
    hasTransactionalLink,
    setHasTransactionalLink,
    setHasMenuToggle,
    setHasSearch,
    toggleMenu: () => toggleMenu(!menuOpen),
    toggleSearch: () => toggleSearch(!searchOpen),
  }

  return (
    <header
      className={clsx(
        'nhsuk-header',
        {
          'nhsuk-header--transactional': transactional,
          'nhsuk-header--organisation': orgName,
          'nhsuk-header--white': white,
        },
        className,
      )}
      role={role}
      {...rest}
    >
      <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
    </header>
  )
}

Header.Container = HeaderContainer
Header.Logo = Logo
Header.TransactionalLink = TransactionalServiceName
Header.MenuToggle = MenuToggle
Header.Content = HeaderContent
Header.Nav = HeaderNav
Header.NavItem = NavItem
Header.Search = Search

Header.displayName = 'Header'
HeaderContainer.displayName = 'Header.Container'
Logo.displayName = 'Header.Logo'
TransactionalServiceName.displayName = 'Header.TransactionalLink'
MenuToggle.displayName = 'Header.MenuToggle'
HeaderContent.displayName = 'Header.Content'
HeaderNav.displayName = 'Header.Nav'
NavItem.displayName = 'Header.NavItem'
Search.displayName = 'Header.Search'

export default Header
