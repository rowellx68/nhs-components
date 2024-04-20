import { HTMLProps } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import Details from '../details';
type Expander = Omit<Details, 'ExpanderGroup' | 'expander'> & React.FC<HTMLProps<HTMLDetailsElement>>;
/**
 * Make a complex topic easier to digest by letting users reveal more detailed information only if they need it.
 *
 * For more information on when to use this component, got to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/expander).
 *
 * @link https://service-manual.nhs.uk/design-system/components/expander
 *
 * @example
 *
 * ```tsx
 * <Expander>
 *  <Expander.Summary>How to find your NHS number</Expander.Summary>
 *  <Expander.Text>You can find your NHS number...</Expander.Text>
 * </Expander>
 */
declare const Expander: Expander;
export default Expander;
