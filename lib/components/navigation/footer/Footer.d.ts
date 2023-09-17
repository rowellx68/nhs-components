import { ContainerProps } from '../../../components/core/container/Container';
import { HTMLProps } from 'react';
import { AsElementLink } from '../../../types/link-like';
import { VisuallyHiddenProps } from '../../../types/visually-hidden';
type FooterProps = {
    containerProps?: ContainerProps;
    footerProps?: HTMLProps<HTMLDivElement>;
} & HTMLProps<HTMLDivElement> & Partial<VisuallyHiddenProps>;
type ListItemProps = {
    containerProps?: HTMLProps<HTMLLIElement>;
} & AsElementLink<HTMLAnchorElement>;
type Footer = {
    List: typeof List;
    ListItem: typeof ListItem;
    Copyright: typeof Copyright;
} & React.FC<FooterProps>;
declare const List: React.FC<HTMLProps<HTMLUListElement>>;
declare const ListItem: React.FC<ListItemProps>;
declare const Copyright: React.FC<HTMLProps<HTMLParagraphElement>>;
declare const Footer: Footer;
export default Footer;
