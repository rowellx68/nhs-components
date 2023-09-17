import { HTMLProps } from 'react';
type DetailsProps = {
    expander?: boolean;
} & HTMLProps<HTMLDetailsElement>;
type Details = {
    Summary: React.FC<HTMLProps<HTMLDivElement>>;
    Text: React.FC<HTMLProps<HTMLDivElement>>;
    ExpanderGroup: React.FC<HTMLProps<HTMLDivElement>>;
} & React.FC<DetailsProps>;
/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/details).
 *
 * @param {boolean} [props.expander] - If true, the component will be styled as an expander.
 * @param {string} [props.className] - An optional class name to add to the component.
 *
 * @example
 *
 * ```tsx
 * <Details>
 *  <Details.Summary>How to find your NHS number</Details.Summary>
 *  <Details.Text>You can find your NHS number...</Details.Text>
 * </Details>
 * ```
 */
declare const Details: Details;
export default Details;
