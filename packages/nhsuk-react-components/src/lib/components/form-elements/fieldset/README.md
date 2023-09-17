# Fieldset

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/fieldtest).

## Basic Usage

```tsx
import { Fieldset } from 'nhsuk-react-components'

const Component = () => {
  return (
    <Fieldset>
      <Fieldset.Legend isPageHeading>What is your NHS number?</Fieldset.Legend>
    </Fieldset>
  )
}
```

## Custom Props

### Fieldset

| `name`             | `type`    | `default value` |
| ------------------ | --------- | --------------- |
| `disableErrorLine` | `boolean` | `false`         |

### Fieldset.Legend

| `name`          | `type`              | `default value` |
| --------------- | ------------------- | --------------- |
| `isPageHeading` | `boolean`           | `false`         |
| `asElement`     | `React.ElementType` | `h1`            |
| `size`          | `Size`              | `undefined`     |
