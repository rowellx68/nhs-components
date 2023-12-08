import clsx from 'clsx'
import React, {
  ComponentProps,
  HTMLProps,
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
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
import { VisuallyHiddenProps } from '@/types/visually-hidden'

type Header = {
  Logo: typeof Logo
  TransactionalLink: typeof TransactionalServiceName
  Container: typeof HeaderContainer
  /**
   * @deprecated This component will be removed in a future release.
   */
  MenuToggle: typeof MenuToggle
  Content: typeof HeaderContent
  /**
   * @deprecated This component will be removed in a future release. Use {@link Header.Navigation} instead.
   */
  Nav: typeof HeaderNav
  /**
   * @deprecated This component will be removed in a future release. Use {@link Header.NavigationItem} instead.
   * */
  NavItem: typeof NavItem
  Navigation: typeof HeaderNavigation
  NavigationItem: typeof NavigationItem
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

type HeaderNavigationProps = {
  containerProps?: HTMLProps<HTMLDivElement>
  listProps?: HTMLProps<HTMLUListElement>
  moreToggleProps?: Omit<NavigationMoreToggleProps, 'visible' | 'expanded'>
} & HTMLProps<HTMLDivElement> &
  PropsWithChildren

type NavItemProps = {
  mobileOnly?: boolean
} & AsElementLink<HTMLAnchorElement> &
  PropsWithChildren

type NavigationItemProps = {
  // mobileOnly?: boolean
} & AsElementLink<HTMLAnchorElement> &
  PropsWithChildren

type NavigationMoreToggleProps = {
  visible?: boolean
  expanded?: boolean
} & HTMLProps<HTMLButtonElement> &
  Partial<VisuallyHiddenProps>

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

/**
 * @deprecated This component will be removed in a future release.
 */
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

/**
 * @deprecated This component will be removed in a future release. Use {@link Header.Navigation} instead.
 */
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

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  children,
  className,
  role = 'navigation',
  containerProps = {},
  listProps = {},
  moreToggleProps = {
    visuallyHiddenText: 'Browse',
    children: 'More',
  },
  ...rest
}): React.JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps
  const { className: listClassName, ...restListProps } = listProps

  const navigationRef = useRef<HTMLDivElement>(null)
  const [breakpoints, setBreakpoints] = useState<number[]>([])
  const [visibleToIndex, setVisibleToIndex] = useState<number>(0)
  const items = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === NavigationItem,
  ) as ReactElement<NavigationItemProps>[]

  useEffect(() => {
    const links = navigationRef.current?.querySelectorAll<HTMLLIElement>(
      '.nhsuk-header__navigation-item',
    )

    const containerWidth = navigationRef.current?.offsetWidth ?? 0

    if (!links) {
      return
    }

    const bp = Array.from(links).map((link) => link.offsetWidth)
    bp.reduce((acc, cur, index) => {
      const total = acc + cur

      if (total <= containerWidth) {
        setVisibleToIndex(index)
      }

      return total
    }, 0)
    setBreakpoints(bp)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      // find the index of the breakpoint that totals the value of the container width
      const containerWidth = navigationRef.current?.offsetWidth ?? 0

      breakpoints.reduce((acc, cur, index) => {
        const total = acc + cur

        if (total <= containerWidth) {
          setVisibleToIndex(index)
        }

        return total
      }, 0)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [navigationRef, breakpoints, setVisibleToIndex])

  return (
    <div
      className={clsx('nhsuk-navigation-container', containerClassName)}
      {...restContainerProps}
    >
      <nav
        className={clsx('nhsuk-navigation', className)}
        role={role}
        {...rest}
        ref={navigationRef}
      >
        <ul
          className={clsx('nhsuk-header__navigation-list', listClassName)}
          {...restListProps}
        >
          {/* items go here */}
          {breakpoints.length ? items.slice(0, visibleToIndex) : children}
          <li
            className={clsx('nhsuk-mobile-menu-container', {
              'nhsuk-mobile-menu-container--visible': true,
            })}
          >
            <NavigationMenuToggle {...moreToggleProps} visible />
            <ul className="nhsuk-header__drop-down nhsuk-header__drop-down--hidden">
              {items.slice(visibleToIndex)}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

/**
 * @deprecated This component will be removed in a future release. Use {@link Header.NavigationItem} instead.
 */
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

const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  return (
    <li className={clsx('nhsuk-header__navigation-item', className)}>
      <Component className="nhsuk-header__navigation-link" {...rest}>
        {children}
      </Component>
    </li>
  )
}

const NavigationMenuToggle: React.FC<NavigationMoreToggleProps> = ({
  children,
  className,
  id = 'toggle-menu',
  visuallyHiddenText = 'Browse',
  visible,
  expanded,
  type = 'button',
  ...rest
}): JSX.Element => {
  return (
    <button
      className={clsx(
        'nhsuk-header__menu-toggle nhsuk-header__navigation-link',
        {
          'nhsuk-header__menu-toggle--visible': visible,
        },
      )}
      aria-expanded={expanded ? 'true' : 'false'}
      {...rest}
    >
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
      {children}
      <svg
        className="nhsuk-icon nhsuk-icon__chevron-down"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
      </svg>
    </button>
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
        'nhsuk-header js-enabled',
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
Header.Navigation = HeaderNavigation
Header.NavigationItem = NavigationItem

Header.displayName = 'Header'
HeaderContainer.displayName = 'Header.Container'
Logo.displayName = 'Header.Logo'
TransactionalServiceName.displayName = 'Header.TransactionalLink'
MenuToggle.displayName = 'Header.MenuToggle'
HeaderContent.displayName = 'Header.Content'
HeaderNav.displayName = 'Header.Nav'
NavItem.displayName = 'Header.NavItem'
HeaderNavigation.displayName = 'Header.Navigation'
NavigationItem.displayName = 'Header.NavigationItem'
Search.displayName = 'Header.Search'

export default Header
