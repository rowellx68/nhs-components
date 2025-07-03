'use client';

import React, {
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import { Factory, factory } from '@/internal/factory/factory';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import {
  AsElementProps,
  ElementProps,
  WithVisuallyHiddenTextProps,
} from '@/types/shared';
import { SearchIcon } from '@/icons/search/Search';
import { ChevronDownIcon } from '@/icons/chevron-down/ChevronDown';
import { NhsLogo } from '@/assets/NhsLogo';
import { Header as NhsHeader } from 'nhsuk-frontend';

export type HeaderProps = {
  variant?: 'default' | 'organisation';
  colour?: 'default' | 'white';
} & ElementProps<'header', 'color'>;

type HeaderFactory = Factory<{
  props: HeaderProps;
  ref: HTMLDivElement;
  staticComponents: {
    Container: typeof HeaderContainer;
    Service: typeof HeaderService;
    ServiceLogo: typeof HeaderServiceLogo;
    Nav: typeof HeaderNav;
    NavList: typeof HeaderNavList;
    NavItem: typeof HeaderNavItem;
    Search: typeof HeaderSearch;
  };
}>;

const Header = factory<HeaderFactory>(
  (
    {
      children,
      className,
      variant = 'default',
      colour = 'default',
      ...props
    }: HeaderProps,
    ref,
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      new NhsHeader(internalRef.current);
    }, [internalRef, children]);

    return (
      <header
        className={clsx(
          'nhsuk-header',
          {
            'nhsuk-header--organisation': variant === 'organisation',
            'nhsuk-header--white': colour === 'white',
          },
          className,
        )}
        role="banner"
        {...props}
        ref={internalRef}
      >
        {children}
      </header>
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
    <div
      className={clsx(
        'nhsuk-header__container nhsuk-width-container',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export type HeaderServiceProps = ElementProps<'div'>;

const HeaderService = ({
  children,
  className,
  ...props
}: HeaderServiceProps) => {
  return (
    <div className={clsx('nhsuk-header__service', className)} {...props}>
      {children}
    </div>
  );
};

export type HeaderServiceLogoProps = Omit<BaseProps, 'children'> &
  (
    | {
        serviceName: string;
        organisationName?: undefined;
        organisationSplit?: undefined;
        organisationDescriptor?: undefined;
      }
    | {
        serviceName?: undefined;
        organisationName: string;
        organisationSplit?: string;
        organisationDescriptor: string;
      }
  );

type HeaderServiceLogoFactory = PolymorphicFactory<{
  props: HeaderServiceLogoProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderServiceLogo = polymorphicFactory<HeaderServiceLogoFactory>(
  (
    {
      className,
      as: component = 'a',
      serviceName,
      organisationName,
      organisationSplit,
      organisationDescriptor,
      ...props
    }: HeaderServiceLogoProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        {...props}
        className={clsx('nhsuk-header__service-logo', className)}
        ref={ref}
      >
        <NhsLogo className="nhsuk-header__logo" />
        {serviceName && (
          <span className="nhsuk-header__service-name">{serviceName}</span>
        )}
        {organisationName && (
          <span className="nhsuk-header__organisation-name">
            {organisationName}
            {organisationSplit && (
              <>
                {' '}
                <span className="nhsuk-header__organisation-name-split">
                  {organisationSplit}
                </span>
              </>
            )}
          </span>
        )}
        {organisationDescriptor && (
          <span className="nhsuk-header__organisation-name-descriptor">
            {organisationDescriptor}
          </span>
        )}
      </Base>
    );
  },
);

export type HeaderNavProps = ElementProps<'div'>;

const HeaderNav = ({ children, className, ...props }: HeaderNavProps) => {
  return (
    <nav
      className={clsx('nhsuk-header__navigation', className)}
      aria-label="Menu"
      {...props}
    >
      <div className="nhsuk-header__navigation-container nhsuk-width-container">
        {children}
      </div>
    </nav>
  );
};

export type HeaderNavListProps = ElementProps<'ul'>;

type HeaderNavListFactory = Factory<{
  props: HeaderNavListProps;
  ref: HTMLUListElement;
}>;

const HeaderNavList = factory<HeaderNavListFactory>(
  ({ children, className, ...props }: HeaderNavListProps, ref) => {
    return (
      <ul
        className={clsx('nhsuk-header__navigation-list', className)}
        {...props}
        ref={ref}
      >
        {children}
        <li className="nhsuk-header__menu" hidden>
          <button
            className={clsx(
              'nhsuk-header__menu-toggle nhsuk-header__navigation-link',
              className,
            )}
            id="toggle-menu"
            aria-expanded="false"
            type="button"
          >
            <VisuallyHidden>Browse</VisuallyHidden> More
            <ChevronDownIcon />
          </button>
        </li>
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
      <search className="nhsuk-header__search">
        <form
          className={clsx('nhsuk-header__search-form', className)}
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
      </search>
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
          className={clsx('nhsuk-header__search-input nhsuk-input', className)}
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
        className={clsx('nhsuk-header__search-submit', className)}
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

// export type HeaderMobileMenuProps = ElementProps<'button'> &
//   WithVisuallyHiddenTextProps;

// const HeaderMobileMenu = ({
//   visuallyHiddenText = 'Browse',
//   children = 'More',
//   className,
//   ...props
// }: HeaderMobileMenuProps) => {
//   return (
//     <li className="nhsuk-header__menu" hidden>
//       <button
//         className={clsx(
//           'nhsuk-header__menu-toggle nhsuk-header__navigation-link',
//           className,
//         )}
//         id="toggle-menu"
//         aria-expanded="false"
//         {...props}
//         type="button"
//       >
//         <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden> {children}
//         <ChevronDownIcon />
//       </button>
//     </li>
//   );
// };

Header.displayName = 'Header';
HeaderContainer.displayName = 'Header.Container';
HeaderService.displayName = 'Header.Service';
HeaderServiceLogo.displayName = 'Header.ServiceLogo';
HeaderNav.displayName = 'Header.Nav';
HeaderNavList.displayName = 'Header.NavList';
HeaderNavItem.displayName = 'Header.NavItem';
HeaderSearch.displayName = 'Header.Search';
HeaderSearchInput.displayName = 'Header.Search.Input';
HeaderSearchButton.displayName = 'Header.Search.Button';

HeaderSearch.Input = HeaderSearchInput;
HeaderSearch.Button = HeaderSearchButton;

Header.Container = HeaderContainer;
Header.Service = HeaderService;
Header.ServiceLogo = HeaderServiceLogo;
Header.Nav = HeaderNav;
Header.NavList = HeaderNavList;
Header.NavItem = HeaderNavItem;
Header.Search = HeaderSearch;

export {
  Header,
  HeaderContainer,
  HeaderService,
  HeaderServiceLogo,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchButton,
};
