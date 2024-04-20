import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { VisuallyHiddenProps } from '../../../types/visually-hidden';
type InsetProps = HTMLProps<HTMLDivElement> & Partial<VisuallyHiddenProps>;
/**
 * Use inset text to help users identify and understand important content on the page, even if they do not read the whole page.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/inset-text).
 *
 * @link https://service-manual.nhs.uk/design-system/components/inset-text
 *
 * @example
 * ```tsx
 * <InsetText>
 *  <p>
 *  If you have symptoms of coronavirus (COVID-19), you must self-isolate
 *  immediately.
 *  </p>
 * </InsetText>
 * ```
 */
declare const InsetText: React.FC<InsetProps>;
export default InsetText;
