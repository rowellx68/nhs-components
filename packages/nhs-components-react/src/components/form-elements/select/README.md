# Select

Use select to let users choose an option from a long list but only use it as a last resort.

## Basic usage

```tsx
import { Select } from 'nhs-components-react'

const Component = () => {
  return (
    <Select label="Choose a country">
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
      <Select.Option value="channel-islands">Channel Islands</Select.Option>
      <Select.Option value="isle-of-man">Isle of Man</Select.Option>
    </Select>
  )
}
```
