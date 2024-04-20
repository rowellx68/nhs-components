import React, { ComponentProps, HTMLProps, PropsWithChildren } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { AsElementLink } from '../../../types/link-like';
import Container from '../../../components/core/container';
import { VisuallyHiddenProps } from '../../../types/visually-hidden';
type Header = {
    Logo: typeof Logo;
    TransactionalLink: typeof TransactionalServiceName;
    Container: typeof HeaderContainer;
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
type LogoProps = {
    image?: HTMLProps<HTMLImageElement>;
} & Omit<AsElementLink<HTMLAnchorElement>, 'children'>;
type HeaderNavProps = {
    containerProps?: HTMLProps<HTMLDivElement>;
    listProps?: HTMLProps<HTMLUListElement>;
    moreToggleProps?: Omit<NavMoreToggleProps, 'visible' | 'expanded'>;
} & HTMLProps<HTMLDivElement> & PropsWithChildren;
type NavItemProps = AsElementLink<HTMLAnchorElement> & PropsWithChildren & {
    __navIndex?: number;
    __mobileMenu?: boolean;
};
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
type NavMoreToggleProps = {
    visible?: boolean;
    label: string;
} & HTMLProps<HTMLButtonElement> & Partial<VisuallyHiddenProps>;
type HeaderNavContextValue = {
    breakpoints: number[];
    setBreakpoints: (breakpoints: number[]) => void;
    availableWidth: number;
    setAvailableWidth: (width: number) => void;
    dropdownHeight: number;
    setDropdownHeight: (height: number) => void;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
};
export declare const useHeaderNavContext: () => HeaderNavContextValue;
declare const Logo: React.FC<LogoProps>;
declare const TransactionalServiceName: React.FC<Omit<AsElementLink<HTMLAnchorElement>, 'children'>>;
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
declare const Header: Header;
export default Header;
