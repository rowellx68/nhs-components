import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { Size } from '../../../types/nhsuk-sizes';
import { AsElementHeadingProps } from '../../../types/heading';
type LegendProps = {
    isPageHeading?: boolean;
    size?: Size;
} & AsElementHeadingProps & Omit<HTMLProps<HTMLLegendElement>, 'size'>;
type Legend = React.FC<LegendProps>;
/**
 * Use a legend to provide a heading for a fieldset.
 *
 * @param {string} [props.className] - Optional additional classes to add to the legend.
 * @param {boolean} [props.isPageHeading] - Sets the legend as a page heading.
 * @param {string} [props.size] - Sets the size of the legend. Overrides `isPageHeading`.
 * @param {React.ElementType} [props.asElement] - Sets the element type of the legend. Defaults to `h1` if `isPageHeading` is true.
 *
 * @example
 * ```tsx
 * <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
 * ```
 */
declare const Legend: Legend;
type FieldsetProps = {
    disableErrorLine?: boolean;
} & HTMLProps<HTMLFieldSetElement>;
type Fieldset = {
    Legend: Legend;
} & React.FC<FieldsetProps>;
/**
 * Use a fieldset to group related form inputs.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/fieldset).
 *
 * @param {string} [props.className] - Optional additional classes to add to the fieldset.
 * @param {boolean} [props.disableErrorLine] - Disables the error line on the fieldset.
 *
 * @example
 * ```tsx
 * <Fieldset>
 *  <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
 * </Fieldset>
 * ```
 */
declare const Fieldset: Fieldset;
export default Fieldset;
