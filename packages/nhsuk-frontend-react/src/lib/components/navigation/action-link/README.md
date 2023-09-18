# ActionLink

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/action-link).

## Basic Usage

```tsx
import { ActionLink } from 'nhsuk-frontend-react'

const Link = () => {
  return <ActionLink href="/to-somewhere">Link</ActionLink>
}
```

## Usage with `react-router-dom`

```tsx
import { ActionLink } from 'nhsuk-frontend-react'
import { Link } from 'react-router-dom'

const CustomLink = () => {
  return (
    <ActionLink asElement={Link} to="/to-somewhere">
      Link
    </ActionLink>
  )
}
```
