import clsx from 'clsx';
import React, { Fragment, ReactNode } from 'react';

import { NhsLogo } from '@/assets/NhsLogo';
import { Base, BaseProps } from '@/components/core/base/Base';
import { SearchIcon } from '@/icons/search/Search';
import { UserIcon } from '@/icons/user/User';
import { Factory, factory } from '@/internal/factory/factory';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, WithVisuallyHiddenTextProps } from '@/types/shared';

import { HeaderNavList } from './HeaderNavList';

export type HeaderProps = {
  variant?: 'organisation' | 'inline';
  colour?: 'white';
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
    Account: typeof HeaderAccount;
    AccountItem: typeof HeaderAccountItem;
    Search: typeof HeaderSearch;
  };
}>;

const Header = factory<HeaderFactory>(
  ({ children, className, variant, colour, ...props }: HeaderProps, ref) => {
    return (
      <header
        className={clsx(
          'nhsuk-header',
          {
            'nhsuk-header--organisation': variant === 'organisation',
            'nhsuk-header--inline': variant === 'inline',
            'nhsuk-header--white': colour === 'white',
          },
          className,
        )}
        role="banner"
        data-module="nhsuk-header"
        {...props}
        ref={ref}
      >
        {children}
      </header>
    );
  },
);

export type HeaderContainerProps = ElementProps<'div'>;

const HeaderContainer = ({ children, className, ...props }: HeaderContainerProps) => {
  return (
    <div className={clsx('nhsuk-header__container nhsuk-width-container', className)} {...props}>
      {children}
    </div>
  );
};

export type HeaderServiceProps = ElementProps<'div'>;

const HeaderService = ({ children, className, ...props }: HeaderServiceProps) => {
  return (
    <div className={clsx('nhsuk-header__service', className)} {...props}>
      {children}
    </div>
  );
};

export type HeaderServiceLogoProps = Omit<BaseProps, 'children'> &
  (
    | {
        variant?: 'logo-only';
        serviceName?: string;
        organisationName?: string;
        organisationSplit?: string;
        organisationDescriptor?: string;
      }
    | {
        variant: 'logo-only';
        serviceName: undefined;
        organisationName: undefined;
        organisationSplit: undefined;
        organisationDescriptor: undefined;
      }
    | {
        variant: undefined;
        serviceName: string;
        organisationName?: undefined;
        organisationSplit?: undefined;
        organisationDescriptor?: undefined;
      }
    | {
        variant: undefined;
        serviceName?: undefined;
        organisationName: string;
        organisationSplit?: string;
        organisationDescriptor: string;
      }
  ) & {
    logo?: ReactNode;
  };

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
      logo,
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
        {logo || <NhsLogo className="nhsuk-header__logo" />}
        {serviceName && <span className="nhsuk-header__service-name">{serviceName}</span>}
        {organisationName && (
          <span className="nhsuk-header__organisation-name">
            {organisationName}
            {organisationSplit && (
              <>
                {' '}
                <span className="nhsuk-header__organisation-name-split">{organisationSplit}</span>
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

export type HeaderNavProps = {
  variant?: 'justified';
  colour?: 'white';
} & ElementProps<'div', 'color'>;

const HeaderNav = ({ children, variant, colour, className, ...props }: HeaderNavProps) => {
  return (
    <nav
      className={clsx(
        'nhsuk-header__navigation',
        {
          'nhsuk-header__navigation--justified': variant === 'justified',
          'nhsuk-header__navigation--white': colour === 'white',
        },
        className,
      )}
      aria-label="Menu"
      {...props}
    >
      <div className="nhsuk-header__navigation-container nhsuk-width-container">{children}</div>
    </nav>
  );
};

export type HeaderNavItemProps = { active?: boolean } & BaseProps;

type HeaderNavItemFactory = PolymorphicFactory<{
  props: HeaderNavItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderNavItem = polymorphicFactory<HeaderNavItemFactory>(
  (
    {
      className,
      active = false,
      as: component = 'a',
      children,
      ...props
    }: HeaderNavItemProps & AsElementProps,
    ref,
  ) => {
    const linkProps = active ? { 'aria-current': true, ...props } : props;
    const currentFallbackProps = active
      ? { className: 'nhsuk-header__navigation-item-current-fallback' }
      : {};

    return (
      <li
        className={clsx('nhsuk-header__navigation-item', {
          'nhsuk-header__navigation-item--current': active,
        })}
      >
        <Base
          as={component}
          className={clsx('nhsuk-header__navigation-link', className)}
          {...linkProps}
          ref={ref}
        >
          <Base<any> as={active ? 'strong' : Fragment} {...currentFallbackProps}>
            {children}
          </Base>
        </Base>
      </li>
    );
  },
);

export type HeaderAccountProps = ElementProps<'ul'>;

export type HeaderAccountFactory = Factory<{
  props: HeaderAccountProps;
  ref: HTMLUListElement;
}>;

const HeaderAccount = factory<HeaderAccountFactory>(
  ({ children, className, ...props }: HeaderAccountProps, ref) => {
    return (
      <nav className="nhsuk-header__account" aria-label="Account">
        <ul className={clsx('nhsuk-header__account-list', className)} {...props} ref={ref}>
          {children}
        </ul>
      </nav>
    );
  },
);

export type HeaderAccountItemProps = {
  variant?: 'icon';
} & BaseProps;

type HeaderAccountItemFactory = PolymorphicFactory<{
  props: HeaderAccountItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const HeaderAccountItem = polymorphicFactory<HeaderAccountItemFactory>(
  (
    {
      className,
      children,
      as: component = 'a',
      variant,
      ...props
    }: HeaderAccountItemProps & AsElementProps,
    ref,
  ) => {
    return (
      <li className="nhsuk-header__account-item">
        <Base
          as={component}
          className={clsx('nhsuk-header__account-link', className)}
          {...props}
          ref={ref}
        >
          {variant === 'icon' && <UserIcon />}
          {children}
        </Base>
      </li>
    );
  },
);

export type HeaderSearchProps = (
  | { children?: undefined; inputProps?: undefined; buttonProps?: undefined }
  | { children: ReactNode; inputProps?: undefined; buttonProps?: undefined }
  | {
      children?: undefined;
      inputProps?: HeaderSearchInputProps;
      buttonProps?: HeaderSearchButtonProps;
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
      buttonProps = {},
      ...props
    },
    ref,
  ) => {
    const { visuallyHiddenText = 'Search the NHS website', ...inputRest } = inputProps ?? {};
    const { visuallyHiddenText: _buttonVisuallyHiddenText, ...buttonRest } = buttonProps ?? {};

    return (
      <search className="nhsuk-header__search">
        <form className={clsx('nhsuk-header__search-form', className)} {...props} ref={ref}>
          {children || (
            <div className="nhsuk-form-group">
              <label className="nhsuk-label nhsuk-u-visually-hidden" htmlFor="search-field">
                {visuallyHiddenText}
              </label>
              <div className="nhsuk-input-wrapper">
                <input
                  className="nhsuk-input"
                  id="search-field"
                  name="q"
                  type="search"
                  autoComplete="off"
                  placeholder="Search"
                  {...inputRest}
                />
                <button
                  className="nhsuk-button nhsuk-button--small"
                  data-module="nhsuk-button"
                  type="submit"
                  {...buttonRest}
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          )}
        </form>
      </search>
    );
  },
);

export type HeaderSearchInputProps = ElementProps<'input'> & WithVisuallyHiddenTextProps;

type HeaderSearchInputFactory = Factory<{
  props: HeaderSearchInputProps;
  ref: HTMLInputElement;
}>;

const HeaderSearchInput = factory<HeaderSearchInputFactory>(
  ({ visuallyHiddenText, className, placeholder = 'Search', ...props }, ref) => {
    return (
      <>
        <label className="nhsuk-label nhsuk-u-visually-hidden" htmlFor="search-field">
          {visuallyHiddenText}
        </label>
        <input
          className={clsx('nhsuk-input', className)}
          id="search-field"
          name="q"
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

export type HeaderSearchButtonProps = ElementProps<'button'> & WithVisuallyHiddenTextProps;

type HeaderSearchButtonFactory = Factory<{
  props: HeaderSearchButtonProps;
  ref: HTMLButtonElement;
}>;

const HeaderSearchButton = factory<HeaderSearchButtonFactory>(
  ({ visuallyHiddenText: _visuallyHiddenText, className, ...props }, ref) => {
    return (
      <button
        className={clsx('nhsuk-button nhsuk-button--small', className)}
        data-module="nhsuk-button"
        type="submit"
        {...props}
        ref={ref}
      >
        <SearchIcon />
      </button>
    );
  },
);

Header.displayName = 'Header';
HeaderContainer.displayName = 'Header.Container';
HeaderService.displayName = 'Header.Service';
HeaderServiceLogo.displayName = 'Header.ServiceLogo';
HeaderNav.displayName = 'Header.Nav';
HeaderNavList.displayName = 'Header.NavList';
HeaderNavItem.displayName = 'Header.NavItem';
HeaderAccount.displayName = 'Header.Account';
HeaderAccountItem.displayName = 'Header.Account.Item';
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
Header.Account = HeaderAccount;
Header.AccountItem = HeaderAccountItem;
Header.Search = HeaderSearch;

export {
  Header,
  HeaderContainer,
  HeaderService,
  HeaderServiceLogo,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  HeaderAccount,
  HeaderAccountItem,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchButton,
};
