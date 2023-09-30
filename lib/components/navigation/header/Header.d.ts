import React, { ComponentProps, HTMLProps, PropsWithChildren } from 'react';
import { AsElementLink } from '../../../types/link-like';
import Container from '../../../components/core/container';
type Header = {
    Logo: typeof Logo;
    TransactionalLink: typeof TransactionalServiceName;
    Container: typeof HeaderContainer;
    MenuToggle: typeof MenuToggle;
    Content: typeof HeaderContent;
    Nav: typeof HeaderNav;
    NavItem: typeof NavItem;
    Search: typeof Search;
} & React.FC<HeaderProps>;
type HeaderProps = Partial<{
    transactional: boolean;
    orgName: string;
    orgSplit: string;
    orgDescriptor: string;
    serviceName: string;
    white: boolean;
}> & HTMLProps<HTMLDivElement> & PropsWithChildren;
type MenuToggleProps = {
    type?: 'button' | 'submit' | 'reset';
} & Omit<HTMLProps<HTMLButtonElement>, 'children'>;
type LogoProps = {
    image?: HTMLProps<HTMLImageElement>;
} & Omit<AsElementLink<HTMLAnchorElement>, 'children'>;
type HeaderNavProps = {
    containerProps?: ComponentProps<typeof Container>;
} & HTMLProps<HTMLDivElement> & PropsWithChildren;
type NavItemProps = {
    mobileOnly?: boolean;
} & AsElementLink<HTMLAnchorElement> & PropsWithChildren;
type HeaderContentProps = HTMLProps<HTMLDivElement> & PropsWithChildren;
type ButtonToggleProps = {
    'data-testid'?: string;
} & Omit<HTMLProps<HTMLButtonElement>, 'children' | 'type' | 'onClick' | 'className'>;
type SearchProps = {
    visuallyHiddenText?: string;
    toggleProps?: ButtonToggleProps;
    submitProps?: ButtonToggleProps;
    closeProps?: ButtonToggleProps;
} & Omit<HTMLProps<HTMLInputElement>, 'children'>;
declare const Logo: React.FC<LogoProps>;
declare const TransactionalServiceName: React.FC<Omit<AsElementLink<HTMLAnchorElement>, 'children'>>;
declare const MenuToggle: React.FC<MenuToggleProps>;
declare const HeaderContainer: React.FC<ComponentProps<typeof Container>>;
declare const HeaderContent: React.FC<HeaderContentProps>;
declare const HeaderNav: React.FC<HeaderNavProps>;
declare const NavItem: React.FC<NavItemProps>;
declare const Search: React.FC<SearchProps>;
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
declare const Header: Header;
export default Header;
