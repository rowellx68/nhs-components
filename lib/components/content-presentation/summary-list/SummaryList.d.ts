import { HTMLProps } from 'react';
type SummaryListProps = {
    borderless?: boolean;
} & HTMLProps<HTMLDListElement>;
type SummaryList = {
    Row: typeof Row;
    Key: typeof Key;
    Value: typeof Value;
    Actions: typeof Actions;
} & React.FC<SummaryListProps>;
declare const Row: React.FC<HTMLProps<HTMLDivElement>>;
declare const Key: React.FC<HTMLProps<HTMLDivElement>>;
declare const Value: React.FC<HTMLProps<HTMLDivElement>>;
declare const Actions: React.FC<HTMLProps<HTMLDivElement>>;
/**
 * Use the summary list to summarise information, for example, a user’s responses at the end of a form.
 *
 * For more information on when to use this component, go to the [NHS Service Manual website](https://service-manual.nhs.uk/design-system/components/summary-list).
 *
 * @link https://service-manual.nhs.uk/design-system/components/summary-list
 *
 * @example
 *
 * ```tsx
 * <SummaryList>
 *  <SummaryList.Row>
 *   <SummaryList.Key>Name</SummaryList.Key>
 *   <SummaryList.Value>Dr John Smith</SummaryList.Value>
 *   <SummaryList.Actions>
 *    <a href="#">Change<span className="nhsuk-u-visually-hidden"> name</span></a>
 *   </SummaryList.Actions>
 *  </SummaryList.Row>
 * </SummaryList>
 * ```
 */
declare const SummaryList: SummaryList;
export default SummaryList;
