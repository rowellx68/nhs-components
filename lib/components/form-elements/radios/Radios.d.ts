import { HTMLProps, ReactNode } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
import { FormElementProps } from '../../../types/form-element-types';
type Radios = {
    Divider: typeof Divider;
    Radio: typeof RadioForwardRef;
} & React.FC<RadioContainerProps>;
type RadioProps = {
    conditional?: ReactNode;
    forceShowConditional?: boolean;
    conditionalWrapperProps?: HTMLProps<HTMLDivElement>;
} & HTMLProps<HTMLInputElement> & Omit<FormElementProps, 'error' | 'errorProps' | 'formGroupProps' | 'disableErrorLine'>;
type RadioContainerProps = {
    inline?: boolean;
    idPrefix?: string;
} & HTMLProps<HTMLDivElement> & FormElementProps;
declare const Divider: React.FC<HTMLProps<HTMLDivElement>>;
/**
 * Radio component that renders a single radio input.
 *
 * @param {RadioProps} props - The props to be passed to the radio input.
 * @param {React.ForwardedRef<HTMLInputElement>} ref - Optional ref to be passed to the radio input.
 *
 * @example
 * ```tsx
 * <Radios.Radio value="yes" hint="some hint">
 *  Yes
 * </Radios.Radio>
 * ```
 */
declare const RadioForwardRef: import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').ForwardRefExoticComponent<Omit<RadioProps, "ref"> & import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').RefAttributes<HTMLInputElement>>;
/**
 * Use radios when you want users to select only 1 option from a list.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/radios).
 *
 * @example
 * ```tsx
 * <Radios label="Do you have any allergies?">
 *  <Radios.Radio value="yes" hint="some hint">
 *   Yes
 *  </Radios.Radio>
 *  <Radios.Radio value="no">No</Radios.Radio>
 * </Radios>
 * ```
 */
declare const Radios: Radios;
export default Radios;
