# Checkboxes

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/checkboxes).

## Basic Usage

```tsx
import { Checkboxes } from 'nhsuk-frontend-react'

const Component = () => {
  return (
    <Checkboxes label="Which services?">
      <Checkboxes.Checkbox value="GP Practice">GP Practice</Checkboxes.Checkbox>
      <Checkboxes.Checkbox value="Dentist">Dentist</Checkboxes.Checkbox>
    </Checkboxes>
  )
}
```
