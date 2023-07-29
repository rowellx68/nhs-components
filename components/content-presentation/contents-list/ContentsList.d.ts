import { AsElementLink } from '../../../types/link-like';
import { HTMLProps } from 'react';
type ContentsListItemProps = {
    current?: boolean;
} & AsElementLink<HTMLAnchorElement>;
type ContentsListProps = {
    visuallyHiddenText?: string;
} & HTMLProps<HTMLDivElement>;
type ContentsListItem = React.FC<ContentsListItemProps>;
type ContentsList = {
    Item: ContentsListItem;
} & React.FC<ContentsListProps>;
/**
 * A component that displays a single item within a `ContentsList` component.
 *
 * @param {string} [props.className] - An optional class name to add to the component.
 * @param {boolean} [props.current] - Whether the item is the current page.
 * @param {React.ElementType} [props.asElement] - The element to render the component as.
 *
 * @example
 * ```tsx
 * <ContentsList.Item href="#section-1">Section 1</ContentsList.Item>
 * <ContentsList.Item asElement={Link} to="/section-2">Section 2</ContentsList.Item>
 * ```
 */
declare const ContentsListItem: ContentsListItem;
/**
 * Use contents lists to allow users to navigate between related pages, for example about a single condition.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/contents-list).
 *
 * @param {string} [props.className] - An optional class name to add to the component.
 * @param {string} [props.visuallyHiddenText] - The header text to display to screen readers.
 * @param {string} [props.role] - The role of the component.
 *
 * @example
 * ```tsx
 * <ContentsList>
 *  <ContentsList.Item href="#section-1">Section 1</ContentsList.Item>
 *  <ContentsList.Item href="#section-2">Section 2</ContentsList.Item>
 * </ContentsList>
 * ```
 */
declare const ContentsList: ContentsList;
export default ContentsList;
