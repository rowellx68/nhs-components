# ActionLink

More details about this component can be found [here](https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/action-link) in the `nhsuk-frontend` repository.

## Basic Usage

```tsx
import { ActionLink } from 'nhs-components-react'

const Link = () => {
  return <ActionLink href="/to-somewhere">Link</ActionLink>
}
```

## Usage with `react-router-dom`

```tsx
import { ActionLink } from 'nhs-components-react'
import { Link } from 'react-router-dom'

const CustomLink = () => {
  return (
    <ActionLink asElement={Link} to="/to-somewhere">
      Link
    </ActionLink>
  )
}
```
