import { AsElementHeadingProps } from '../../../types/heading';
import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
export type DoDontListType = 'do' | 'dont';
type DoDontListItemProps = HTMLProps<HTMLLIElement>;
type HeadingProps = AsElementHeadingProps & HTMLProps<HTMLHeadingElement>;
declare const Item: React.FC<DoDontListItemProps>;
type DoDontListProps = {
    type?: DoDontListType;
    headingProps?: HeadingProps;
} & HTMLProps<HTMLDivElement>;
type DoDontList = {
    Item: typeof Item;
} & React.FC<DoDontListProps>;
/**
 * Use Do and Don't lists to help users understand more easily what they should and shouldn't do.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/do-and-dont-lists).
 *
 * @link https://service-manual.nhs.uk/design-system/components/do-and-dont-lists
 *
 * @example
 * ```tsx
 * <DoDontList type="do">
 *  <DoDontList.Item>Do this</DoDontList.Item>
 *  <DoDontList.Item>Do that</DoDontList.Item>
 * </DoDontList>
 * ```
 */
declare const DoDontList: DoDontList;
export default DoDontList;
