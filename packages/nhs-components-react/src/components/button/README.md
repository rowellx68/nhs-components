# Button

More details about this component can be found [here](https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/button) in the `nhsuk-frontend` repository.

## Basic Usage

```tsx
import { Button } from 'nhs-components-react'

const Component = () => {
  return <Button onClick={() => null}>Click me</Button>
}
```

## Usage with `react-router-dom`

```tsx
import { ButtonLink } from 'nhs-components-react'
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
