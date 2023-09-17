import { HTMLProps } from 'react';
import { VisuallyHiddenProps } from '../../../types/visually-hidden';
import { AsElementHeadingProps } from '../../../types/heading';
type WarningCallout = {
    Label: typeof Label;
} & React.FC<HTMLProps<HTMLDivElement>>;
type WarningCalloutLabelProps = AsElementHeadingProps & HTMLProps<HTMLHeadingElement> & Partial<VisuallyHiddenProps>;
/**
 * The label for the `WarningCallout` component.
 *
 * @example
 * ```tsx
 * <WarningCallout.Label>Important</WarningCallout.Label>
 * ```
 */
declare const Label: React.FC<WarningCalloutLabelProps>;
/**
 * Use a warning callout to help users identify and understand warning content on the page, even if they do not read the whole page.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/warning-callout).
 *
 * @link https://service-manual.nhs.uk/design-system/components/warning-callout
 *
 * @example
 * ```tsx
 * <WarningCallout>
 *  <WarningCallout.Label>Important</WarningCallout.Label>
 *  <p>
 *   If you have symptoms of coronavirus (COVID-19), you must self-isolate
 *  immediately.
 *  </p>
 * </WarningCallout>
 * ```
 */
declare const WarningCallout: WarningCallout;
export default WarningCallout;
