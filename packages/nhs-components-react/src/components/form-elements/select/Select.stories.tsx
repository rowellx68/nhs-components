import type { Meta, StoryObj } from '@storybook/react'
import Select from '.'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Form Elements/Select',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Select>

/**
 * The basic usage of the Select component.
 */
export const Basic: Story = {
  args: {
    label: 'Select a country or territory',
    hint: 'If you are from the Guernsey or Jersey, please select Channel Islands',
    error: '',
    disabled: false,
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
      <Select.Option value="channel-islands">Channel Islands</Select.Option>
      <Select.Option value="isle-of-man">Isle of Man</Select.Option>
    </Select>
  ),
}

/**
 * The Select component with a disabled option.
 */
export const WithDisabledOption: Story = {
  args: {
    label: 'Select a country or territory',
    hint: 'If you are from the Guernsey or Jersey, please select Channel Islands',
    error: '',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
      <Select.Option value="channel-islands">Channel Islands</Select.Option>
      <Select.Option value="isle-of-man" disabled>
        Isle of Man
      </Select.Option>
    </Select>
  ),
}
