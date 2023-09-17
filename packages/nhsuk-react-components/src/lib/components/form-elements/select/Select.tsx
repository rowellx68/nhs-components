import FormGroup from '@/components/core/form-group/FormGroup'
import { FormElementProps } from '@/types/form-element-types'
import {
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  HTMLProps,
  RefAttributes,
  forwardRef,
} from 'react'
import clsx from 'clsx'

type Select = {
  Option: React.FC<OptionProps>
} & ForwardRefExoticComponent<Omit<SelectProps, 'ref'>> &
  RefAttributes<HTMLSelectElement>

type SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps
type OptionProps = HTMLProps<HTMLOptionElement>

/**
 * To be used as a child of the Select component.
 */
const Option: React.FC<OptionProps> = ({ children, ...rest }): JSX.Element => {
  return <option {...rest}>{children}</option>
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { children, ...rest },
  ref,
): JSX.Element => {
  return (
    <FormGroup<SelectProps>
      {...rest}
      inputType="select"
      render={({ id, name, className, error, ...renderRest }) => (
        <select
          id={id}
          name={name}
          className={clsx(
            'nhsuk-select',
            { 'nhsuk-select--error': error },
            className,
          )}
          ref={ref}
          {...renderRest}
        >
          {children}
        </select>
      )}
    />
  )
}

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
const SelectForwardRef = forwardRef(Select) as Select

SelectForwardRef.displayName = 'Select'
Option.displayName = 'Select.Option'

SelectForwardRef.Option = Option

export default SelectForwardRef
