import { FormElementProps } from '../../../types/form-element-types';
import { HTMLProps, ReactNode } from 'react';
type Checkboxes = {
    Box: typeof BoxForwardRef;
} & React.FC<CheckboxContainerProps>;
type CheckboxContainerProps = {
    idPrefix?: string;
} & HTMLProps<HTMLDivElement> & FormElementProps;
type CheckboxProps = {
    conditional?: ReactNode;
    forceShowConditional?: boolean;
    conditionalWrapperProps?: HTMLProps<HTMLDivElement>;
} & Omit<HTMLProps<HTMLInputElement>, 'label'> & Omit<FormElementProps, 'error' | 'errorProps' | 'formGroupProps' | 'disableErrorLine'>;
/**
 * A checkbox component that can be used within a `Checkboxes` component.
 *
 * @example
 * ```tsx
 * <Checkboxes.Box value="GP Practice">GP Practice</Checkboxes.Box>
 * ```
 */
declare const BoxForwardRef: import("react").ForwardRefExoticComponent<Omit<CheckboxProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
/**
 * Use checkboxes to let users select 1 or more options on a form.
 *
 * For more information on when to use this component, got to the [NHS Digital service manual](https://service-manual.nhs.uk/design-system/components/checkboxes).
 *
 * @example
 * ```tsx
 * <Checkboxes label="Which services?" name="fruit">
 *  <Checkboxes.Box value="GP Practice">GP Practice</Checkboxes.Box>
 *  <Checkboxes.Box value="Dentist">Dentist</Checkboxes.Box>
 * </Checkboxes>
 * ```
 */
declare const Checkboxes: Checkboxes;
export default Checkboxes;
