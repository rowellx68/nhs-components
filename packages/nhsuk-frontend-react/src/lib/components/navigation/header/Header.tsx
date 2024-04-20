import clsx from 'clsx'
import React, {
  ComponentProps,
  HTMLProps,
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
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
import { SearchIcon } from '@/icons'
import Container from '@/components/core/container'
import { VisuallyHiddenProps } from '@/types/visually-hidden'

type Header = {
  Logo: typeof Logo
  TransactionalLink: typeof TransactionalServiceName
  Container: typeof HeaderContainer
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

type LogoProps = {
  image?: HTMLProps<HTMLImageElement>
} & Omit<AsElementLink<HTMLAnchorElement>, 'children'>

type HeaderNavProps = {
  containerProps?: HTMLProps<HTMLDivElement>
  listProps?: HTMLProps<HTMLUListElement>
  moreToggleProps?: Omit<NavMoreToggleProps, 'visible' | 'expanded'>
} & HTMLProps<HTMLDivElement> &
  PropsWithChildren

type NavItemProps = AsElementLink<HTMLAnchorElement> &
  PropsWithChildren & {
    __navIndex?: number
    __mobileMenu?: boolean
  }

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

type NavMoreToggleProps = {
  visible?: boolean
  label: string
} & HTMLProps<HTMLButtonElement> &
  Partial<VisuallyHiddenProps>

type HeaderNavContextValue = {
  breakpoints: number[]
  setBreakpoints: (breakpoints: number[]) => void
  availableWidth: number
  setAvailableWidth: (width: number) => void
  dropdownHeight: number
  setDropdownHeight: (height: number) => void
  expanded: boolean
  setExpanded: (expanded: boolean) => void
}

const HeaderNavContext = createContext<HeaderNavContextValue>({
  breakpoints: [],
  setBreakpoints: () => {},
  availableWidth: 0,
  setAvailableWidth: () => {},
  dropdownHeight: 0,
  setDropdownHeight: () => {},
  expanded: false,
  setExpanded: () => {},
})

HeaderNavContext.displayName = 'HeaderNavContext'

export const useHeaderNavContext = () => useContext(HeaderNavContext)

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
        'nhsuk-header__logo--only': hasTransactionalLink,
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
  return (
    <div className={clsx('nhsuk-header__content', className)} id={id} {...rest}>
      {children}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-types
const debounce = (func: Function, timeout = 100) => {
  let timer: number
  return (...args: unknown[]) => {
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  children,
  className,
  open,
  role = 'navigation',
  containerProps = {},
  listProps = {},
  moreToggleProps = {
    visuallyHiddenText: 'Browse',
    label: 'More',
  },
  ...rest
}): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps
  const { className: listClassName, ...restListProps } = listProps

  const navigationRef = useRef<HTMLDivElement>(null)

  const [breakpoints, setBreakpoints] = useState<number[]>([])
  const [availableWidth, setAvailableWidth] = useState<number>(0)
  const [dropdownHeight, setDropdownHeight] = useState<number>(0)
  const [expanded, setExpanded] = useState<boolean>(false)

  const items = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === NavItem,
  ) as ReactElement<NavItemProps>[]

  const calculateBreakpoints = () => {
    const links = Array.from<HTMLLIElement>(
      navigationRef.current?.querySelectorAll(
        '.nhsuk-header__navigation-item',
      ) ?? [],
    )

    links?.reduce((acc, item) => {
      acc += item.offsetWidth

      setBreakpoints((prev) => {
        return [...prev, acc]
      })

      return acc
    }, 0)
  }

  const updateAvailableWidth = () => {
    const width = navigationRef.current?.offsetWidth ?? 0

    const moreToggleWidth =
      (
        navigationRef.current?.querySelector(
          '.nhsuk-mobile-menu-container',
        ) as HTMLLIElement
      )?.offsetWidth ?? 0

    setAvailableWidth(width - moreToggleWidth)
  }

  const handleResize = debounce(() => {
    updateAvailableWidth()
  })

  useEffect(() => {
    calculateBreakpoints()
    updateAvailableWidth()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className={clsx('nhsuk-navigation-container', containerClassName)}
      {...restContainerProps}
    >
      <nav
        className={clsx('nhsuk-navigation', 'js-enabled', className)}
        aria-label="Primary navigation"
        role={role}
        {...rest}
        ref={navigationRef}
      >
        <ul
          className={clsx('nhsuk-header__navigation-list', listClassName)}
          {...restListProps}
        >
          <HeaderNavContext.Provider
            value={{
              breakpoints,
              setBreakpoints,
              availableWidth,
              setAvailableWidth,
              dropdownHeight,
              setDropdownHeight,
              expanded,
              setExpanded,
            }}
          >
            {items.map((item, index) => {
              return React.cloneElement(item, {
                __navIndex: index,
                __mobileMenu: false,
              })
            })}

            <NavMoreToggle {...moreToggleProps}>
              {items.map((item, index) => {
                return React.cloneElement(item, {
                  __navIndex: index,
                  __mobileMenu: true,
                })
              })}
            </NavMoreToggle>
          </HeaderNavContext.Provider>
        </ul>
      </nav>
    </div>
  )
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  className,
  asElement: Component = 'a',
  __navIndex,
  __mobileMenu,
  ...rest
}) => {
  const { breakpoints, availableWidth } = useHeaderNavContext()
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    if (
      __navIndex === undefined ||
      __mobileMenu === undefined ||
      !availableWidth
    ) {
      return
    }

    if (__mobileMenu) {
      setVisible(breakpoints[__navIndex] > availableWidth)

      return
    }

    setVisible(breakpoints[__navIndex] < availableWidth)
  }, [breakpoints, availableWidth, __navIndex, __mobileMenu])

  return visible ? (
    <li className={clsx('nhsuk-header__navigation-item', className)}>
      <Component className="nhsuk-header__navigation-link" {...rest}>
        {children}
      </Component>
    </li>
  ) : null
}

const NavMoreToggle: React.FC<NavMoreToggleProps> = ({
  visible,
  visuallyHiddenText,
  children,
  label,
  className,
  type = 'button',
  ...rest
}) => {
  const {
    availableWidth,
    breakpoints,
    setDropdownHeight,
    expanded,
    setExpanded,
  } = useHeaderNavContext()

  const ulRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (ulRef.current && expanded) {
      setDropdownHeight(ulRef.current.offsetHeight)

      return
    }

    setDropdownHeight(0)
    setExpanded(false)
  }, [ulRef, expanded, setDropdownHeight, setExpanded])

  return availableWidth > breakpoints[breakpoints.length - 1] ? null : (
    <li className="nhsuk-mobile-menu-container nhsuk-mobile-menu-container--visible">
      <button
        className="nhsuk-header__menu-toggle nhsuk-header__navigation-link nhsuk-header__menu-toggle--visible"
        aria-expanded={expanded}
        {...rest}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
        {label}
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
      <ul
        className={clsx('nhsuk-header__drop-down', {
          'nhsuk-header__drop-down--hidden': !expanded,
        })}
        ref={ulRef}
      >
        {children}
      </ul>
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
  return (
    <div className={clsx('nhsuk-header__search', className)}>
      <div className="nhsuk-header__search-wrap">
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
            autoComplete="off"
            {...rest}
          />
          <button
            className="nhsuk-search__submit"
            type="submit"
            {...submitProps}
          >
            <SearchIcon />
            <span className="nhsuk-u-visually-hidden">Search</span>
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
 *    <Header.Search />
 *   </Header.Content>
 *  </Header.Container>
 *  <Header.Nav>
 *   <Header.NavItem href="/">Home</Header.NavItem>
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
  const [hasTransactionalLink, setHasTransactionalLink] =
    useState<boolean>(false)

  const value: HeaderContextValue = {
    orgName,
    orgSplit,
    orgDescriptor,
    serviceName,
    transactional: transactional ?? false,
    hasTransactionalLink,
    setHasTransactionalLink,
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
Header.Content = HeaderContent
Header.Nav = HeaderNav
Header.NavItem = NavItem
Header.Search = Search

Header.displayName = 'Header'
HeaderContainer.displayName = 'Header.Container'
Logo.displayName = 'Header.Logo'
TransactionalServiceName.displayName = 'Header.TransactionalLink'
HeaderContent.displayName = 'Header.Content'
HeaderNav.displayName = 'Header.Nav'
NavItem.displayName = 'Header.NavItem'
Search.displayName = 'Header.Search'

export default Header
