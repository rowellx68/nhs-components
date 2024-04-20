import { FormElementProps } from '../../../types/form-element-types';
import { ForwardRefExoticComponent, ForwardRefRenderFunction, HTMLProps, RefAttributes } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
type Select = {
    Option: React.FC<OptionProps>;
} & ForwardRefExoticComponent<Omit<SelectProps, 'ref'>> & RefAttributes<HTMLSelectElement>;
type SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;
type OptionProps = HTMLProps<HTMLOptionElement>;
declare const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps>;
/**
 * Use select to let users choose an option from a long list but only use it as a last resort.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/select).
 *
 * @link https://service-manual.nhs.uk/design-system/components/select
 *
 * @example
 * ```tsx
 * <Select label="Choose a country">
 *  <Select.Option value="england">England</Select.Option>
 *  <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
 *  <Select.Option value="scotland">Scotland</Select.Option>
 *  <Select.Option value="wales">Wales</Select.Option>
 *  <Select.Option value="channel-islands">Channel Islands</Select.Option>
 *  <Select.Option value="isle-of-man">Isle of Man</Select.Option>
 * </Select>
 * ```
 */
declare const SelectForwardRef: Select;
export default SelectForwardRef;
