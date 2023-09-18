# Button

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/buttons).

## Basic Usage

```tsx
import { Button } from 'nhsuk-frontend-react'

const Component = () => {
  return <Button onClick={() => null}>Click me</Button>
}
```

## Usage with `react-router-dom`

```tsx
import { ButtonLink } from 'nhsuk-frontend-react'
import { Link } from 'react-router-dom'

const Component = () => {
  return (
    <ButtonLink asElement={Link} to="/some-page">
      Click me
    </ButtonLink>
  )
}
```

## Custom Props

### `Button` / `ButtonLink`

| name        | type      | default value |
| ----------- | --------- | ------------- |
| `disabled`  | `boolean` | `false`       |
| `secondary` | `boolean` | `false`       |
| `reverse`   | `boolean` | `false`       |

### `ButtonLink`

| name        | type                | default value |
| ----------- | ------------------- | ------------- |
| `asElement` | `React.ElementType` | `a`           |
| `to`        | `unknown`           | `undefined`   |
