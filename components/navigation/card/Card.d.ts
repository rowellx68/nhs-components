import { HTMLProps } from 'react';
import { AsElementLink } from '../../../types/link-like';
type Card = {
    Content: typeof Content;
    Description: typeof Description;
    Heading: typeof Heading;
    Link: typeof Link;
    Image: typeof Image;
    Group: typeof Group;
    GroupItem: typeof GroupItem;
} & React.FC<CardProps>;
type CardProps = {
    clickable?: boolean;
} & HTMLProps<HTMLDivElement>;
type GroupItemProps = {
    width?: GroupItemWidth;
} & HTMLProps<HTMLLIElement>;
type HeadingProps = {
    asElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLProps<HTMLHeadingElement>;
export type GroupItemWidth = 'one-half' | 'one-third' | 'one-quarter';
declare const Content: React.FC<HTMLProps<HTMLDivElement>>;
declare const Heading: React.FC<HeadingProps>;
declare const Link: React.FC<AsElementLink<HTMLAnchorElement>>;
declare const Description: React.FC<HTMLProps<HTMLParagraphElement>>;
declare const Image: React.FC<HTMLProps<HTMLImageElement>>;
declare const Group: React.FC<HTMLProps<HTMLUListElement>>;
declare const GroupItem: React.FC<GroupItemProps>;
/**
 * Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/card).
 *
 * @link https://service-manual.nhs.uk/design-system/components/card
 *
 * @example
 * ```tsx
 * <Card>
 *  <Card.Content>
 *   <Card.Heading>
 *    If you need help now, but it’s not an emergency
 *   </Card.Heading>
 *   <Card.Description>
 *    Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
 *   </Card.Description>
 *  </Card.Content>
 * </Card>
 * ```
 */
declare const Card: Card;
export default Card;
