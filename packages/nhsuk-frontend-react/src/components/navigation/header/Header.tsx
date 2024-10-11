'use client';

import React, {
  Children,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import { HeaderContextProvider, useHeaderContext } from './Header.context';
import { Factory, factory } from '@/internal/factory/factory';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import {
  AsElementProps,
  ElementProps,
  WithVisuallyHiddenTextProps,
} from '@/types/shared';
import { SearchIcon } from '@/icons/search/Search';
import { ChevronDownIcon } from '@/icons/chevron-down/ChevronDown';
import initHeader from '@/resources/header/header';

export type HeaderProps = (
  | {
      serviceName?: undefined;
      transactional?: false;
      organisationName?: undefined;
      organisationSplit?: undefined;
      organisationDescriptor?: undefined;
    }
  | {
      serviceName: string;
      transactional?: false;
      organisationName?: undefined;
      organisationSplit?: undefined;
      organisationDescriptor?: undefined;
    }
  | {
      serviceName?: undefined;
      transactional: true;
      organisationName?: undefined;
      organisationSplit?: undefined;
      organisationDescriptor?: undefined;
    }
  | {
      serviceName?: undefined;
      transactional?: false;
      organisationName: string;
      organisationSplit?: string;
      organisationDescriptor: string;
    }
) & {
  variant?:
    | 'blue-header-blue-nav'
    | 'blue-header-white-nave'
    | 'white-header-blue-nav'
    | 'white-header-white-nav';
} & ElementProps<'header'>;

type HeaderFactory = Factory<{
  props: HeaderProps;
  ref: HTMLDivElement;
  staticComponents: {
    Container: typeof HeaderContainer;
    Logo: typeof HeaderLogo;
    TransactionLink: typeof HeaderTransactionLink;
    Nav: typeof HeaderNav;
    NavList: typeof HeaderNavList;
    NavItem: typeof HeaderNavItem;
    MobileMenu: typeof HeaderMobileMenu;
    Content: typeof HeaderContent;
    Search: typeof HeaderSearch;
  };
}>;

const Header = factory<HeaderFactory>(
  (
    {
      children,
      className,
      serviceName,
      transactional,
      organisationName,
      organisationSplit,
      organisationDescriptor,
      variant = 'blue-header-blue-nav',
      ...props
    }: HeaderProps,
    ref,
  ) => {
    const value = useMemo(
      () => ({
        serviceName,
        transactional,
        organisationName,
        organisationSplit,
        organisationDescriptor,
        white: variant.includes('white-header'),
        whiteNav: variant.includes('white-nav'),
      }),
      [],
    );

    return (
      <HeaderContextProvider value={value}>
        <header
          className={clsx(
            'nhsuk-header',
            {
              'nhsuk-header__transactional': transactional,
              'nhsuk-header--organisation': organisationName,
              'nhsuk-header--white': variant.includes('white-header'),
              'nhsuk-header--white-nav': variant.includes('white-nav'),
            },
            className,
          )}
          role="banner"
          {...props}
          ref={ref}
        >
          {children}
        </header>
      </HeaderContextProvider>
    );
  },
);

export type HeaderContainerProps = ElementProps<'div'>;

const HeaderContainer = ({
  children,
  className,
  ...props
}: HeaderContainerProps) => {
  return (
    <div className={clsx('nhsuk-header__container', className)} {...props}>
      {children}
    </div>
  );
};

export type HeaderLogoProps = {
  'aria-label': string;
  /**
   * If set, there will be extra space around the logo to account for the lack of a service/oganisation name
   */
  variant?: 'logo-only';
} & Omit<BaseProps, 'children'>;

type HeaderLogoFactory = PolymorphicFactory<{
  props: HeaderLogoProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderLogo = polymorphicFactory<HeaderLogoFactory>(
  (
    {
      className,
      as: component = 'a',
      variant,
      ...props
    }: HeaderLogoProps & AsElementProps,
    ref,
  ) => {
    const {
      transactional,
      serviceName,
      organisationName,
      organisationSplit,
      organisationDescriptor,
    } = useHeaderContext();

    return (
      <div
        className={clsx('nhsuk-header__logo', {
          'nhsuk-header__logo--only': variant,
        })}
      >
        <Base
          as={component}
          className={clsx(
            'nhsuk-header__link',
            {
              'nhsuk-header__transactional--logo': transactional,
              'nhsuk-header__link--service': serviceName,
            },
            className,
          )}
          {...props}
          ref={ref}
        >
          <svg
            className="nhsuk-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 16"
            height="40"
            width="100"
          >
            <path
              className="nhsuk-logo__background"
              fill="#005eb8"
              d="M0 0h40v16H0z"
            />
            <path
              className="nhsuk-logo__text"
              fill="#fff"
              d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"
            />
          </svg>
          {serviceName && (
            <span className="nhsuk-header__service-name">{serviceName}</span>
          )}
          {organisationName && (
            <span className="nhsuk-organisation-name">
              {organisationName}
              {organisationSplit && (
                <>
                  {' '}
                  <span className="nhsuk-organisation-split">
                    {organisationSplit}
                  </span>
                </>
              )}
            </span>
          )}
          {organisationDescriptor && (
            <span className="nhsuk-organisation-descriptor">
              {organisationDescriptor}
            </span>
          )}
        </Base>
      </div>
    );
  },
);

export type HeaderTransactionLinkProps = AsElementProps & BaseProps;

type HeaderTransactionLinkFactory = PolymorphicFactory<{
  props: HeaderTransactionLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderTransactionLink = polymorphicFactory<HeaderTransactionLinkFactory>(
  (
    { className, as: component = 'a', ...props }: HeaderTransactionLinkProps,
    ref,
  ) => {
    const { transactional } = useHeaderContext();

    if (!transactional) {
      return null;
    }

    return (
      <div className="nhsuk-header__transactional-service-name">
        <Base
          as={component}
          className={clsx(
            'nhsuk-header__transactional-service-name--link',
            className,
          )}
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);

export type HeaderNavProps = ElementProps<'div'>;

const HeaderNav = ({ children, className, ...props }: HeaderNavProps) => {
  return (
    <div className="nhsuk-navigation-container">
      <nav
        className={clsx('nhsuk-navigation', className)}
        role="navigation"
        aria-label="Primary navigation"
        {...props}
      >
        {children}
      </nav>
    </div>
  );
};

export type HeaderNavListProps = ElementProps<'ul'>;

type HeaderNavListFactory = Factory<{
  props: HeaderNavListProps;
  ref: HTMLUListElement;
}>;

const HeaderNavList = factory<HeaderNavListFactory>(
  ({ children, className, ...props }: HeaderNavListProps, ref) => {
    const internalRef = useRef<HTMLUListElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLUListElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      initHeader();
    }, [internalRef, children]);

    const primaryLinks = Children.toArray(children).filter((child) => {
      return React.isValidElement(child) && child.type === HeaderNavItem;
    });

    return (
      <ul
        className={clsx(
          'nhsuk-header__navigation-list',
          {
            'nhsuk-header__navigation-list--left-aligned':
              primaryLinks.length < 4,
          },
          className,
        )}
        {...props}
        ref={internalRef}
      >
        {children}
      </ul>
    );
  },
);

export type HeaderNavItemProps = { variant?: 'home-link' } & BaseProps;

type HeaderNavItemFactory = PolymorphicFactory<{
  props: HeaderNavItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderNavItem = polymorphicFactory<HeaderNavItemFactory>(
  (
    {
      className,
      variant,
      as: component = 'a',
      ...props
    }: HeaderNavItemProps & AsElementProps,
    ref,
  ) => {
    return (
      <li
        className={clsx('nhsuk-header__navigation-item', {
          'nhsuk-header__navigation-item--home': variant === 'home-link',
        })}
      >
        <Base
          as={component}
          className={clsx('nhsuk-header__navigation-link', className)}
          {...props}
          ref={ref}
        />
      </li>
    );
  },
);

export type HeaderContentProps = ElementProps<'div'>;

const HeaderContent = ({
  children,
  className,
  ...props
}: HeaderContentProps) => {
  return (
    <div className={clsx('nhsuk-header__content', className)} {...props}>
      {children}
    </div>
  );
};

export type HeaderSearchProps = (
  | { children?: undefined; inputProps?: undefined; buttonProps?: undefined }
  | { children: ReactNode; inputProps?: undefined; buttonProps?: undefined }
  | {
      children?: undefined;
      inputProps: HeaderSearchInputProps;
      buttonProps: HeaderSearchButtonProps;
    }
) &
  ElementProps<'form', 'children'>;

type HeaderSearchFactory = Factory<{
  props: HeaderSearchProps;
  ref: HTMLFormElement;
  staticComponents: {
    Input: typeof HeaderSearchInput;
    Button: typeof HeaderSearchButton;
  };
}>;

const HeaderSearch = factory<HeaderSearchFactory>(
  (
    {
      children,
      className,
      inputProps = { visuallyHiddenText: 'Search the NHS website' },
      buttonProps = { visuallyHiddenText: 'Search' },
      ...props
    },
    ref,
  ) => {
    return (
      <div className="nhsuk-header__search">
        <div className="nhsuk-header__search-wrap">
          <form
            className={clsx('nhsuk-header__search-form', className)}
            role="search"
            {...props}
            ref={ref}
          >
            {children || (
              <>
                <HeaderSearchInput {...inputProps} />
                <HeaderSearchButton {...buttonProps} />
              </>
            )}
          </form>
        </div>
      </div>
    );
  },
);

export type HeaderSearchInputProps = ElementProps<'input'> &
  WithVisuallyHiddenTextProps;

type HeaderSearchInputFactory = Factory<{
  props: HeaderSearchInputProps;
  ref: HTMLInputElement;
}>;

const HeaderSearchInput = factory<HeaderSearchInputFactory>(
  (
    { visuallyHiddenText, className, placeholder = 'Search', ...props },
    ref,
  ) => {
    return (
      <>
        <label className="nhsuk-u-visually-hidden" htmlFor="search-field">
          {visuallyHiddenText}
        </label>
        <input
          className={clsx('nhsuk-search__input', className)}
          id="search-field"
          name="search-field"
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          {...props}
          ref={ref}
        />
      </>
    );
  },
);

export type HeaderSearchButtonProps = ElementProps<'button'> &
  WithVisuallyHiddenTextProps;

type HeaderSearchButtonFactory = Factory<{
  props: HeaderSearchButtonProps;
  ref: HTMLButtonElement;
}>;

const HeaderSearchButton = factory<HeaderSearchButtonFactory>(
  ({ visuallyHiddenText, className, ...props }, ref) => {
    return (
      <button
        className={clsx('nhsuk-search__submit', className)}
        {...props}
        type="submit"
        ref={ref}
      >
        <SearchIcon />
        <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
      </button>
    );
  },
);

export type HeaderMobileMenuProps = ElementProps<'button'> &
  WithVisuallyHiddenTextProps;

const HeaderMobileMenu = ({
  visuallyHiddenText = 'Browse',
  children = 'More',
  className,
  ...props
}: HeaderMobileMenuProps) => {
  return (
    <li className="nhsuk-mobile-menu-container">
      <button
        className={clsx(
          'nhsuk-header__menu-toggle nhsuk-header__navigation-link',
          className,
        )}
        id="toggle-menu"
        aria-expanded="false"
        {...props}
        type="button"
      >
        <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden> {children}
        <ChevronDownIcon />
      </button>
    </li>
  );
};

Header.displayName = 'Header';
HeaderContainer.displayName = 'Header.Container';
HeaderLogo.displayName = 'Header.Logo';
HeaderTransactionLink.displayName = 'Header.TransactionLink';
HeaderNav.displayName = 'Header.Nav';
HeaderNavList.displayName = 'Header.NavList';
HeaderNavItem.displayName = 'Header.NavItem';
HeaderMobileMenu.displayName = 'Header.MobileMenu';
HeaderContent.displayName = 'Header.Content';
HeaderSearch.displayName = 'Header.Search';
HeaderSearchInput.displayName = 'Header.Search.Input';
HeaderSearchButton.displayName = 'Header.Search.Button';

HeaderSearch.Input = HeaderSearchInput;
HeaderSearch.Button = HeaderSearchButton;

Header.Container = HeaderContainer;
Header.Logo = HeaderLogo;
Header.TransactionLink = HeaderTransactionLink;
Header.Nav = HeaderNav;
Header.NavList = HeaderNavList;
Header.NavItem = HeaderNavItem;
Header.MobileMenu = HeaderMobileMenu;
Header.Content = HeaderContent;
Header.Search = HeaderSearch;

export {
  Header,
  HeaderContainer,
  HeaderLogo,
  HeaderTransactionLink,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  HeaderMobileMenu,
  HeaderContent,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchButton,
};
