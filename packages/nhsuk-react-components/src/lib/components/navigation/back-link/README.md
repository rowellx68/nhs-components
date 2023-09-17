# BackLink

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/back-link).

## Basic Usage

```tsx
import { BackLink } from 'nhsuk-react-components'

const Link = () => {
  return <BackLink href="/to-somewhere">Link</BackLink>
}
```

## Usage with `react-router-dom`

```tsx
import { BackLink } from 'nhsuk-react-components'
import { Link } from 'react-router-dom'

const CustomLink = () => {
  return (
    <BackLink asElement={Link} to="/to-somewhere">
      Link
    </BackLink>
  )
}
```
