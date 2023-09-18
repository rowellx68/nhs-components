# Breadcrumbs

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/breadcrumbs).

## Basic Usage

```jsx
import { Breadcrumbs } from 'nhsuk-frontend-react'

const Component = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="/item/1">Item 1</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/item/2">Item 2</Breadcrumbs.Item>
      <Breadcrumbs.Back href="/item/1">Item 1</Breadcrumbs.Back>
    </Breadcrumbs>
  )
}
```

## Usage with `react-router-dom`

```jsx
import { Breadcrumbs } from 'nhsuk-frontend-react'
import { Link } from 'react-router-dom'

const Component = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item asElement={Link} to="/item/1">
        Item 1
      </Breadcrumbs.Item>
      <Breadcrumbs.Item asElement={Link} to="/item/2">
        Item 2
      </Breadcrumbs.Item>
      <Breadcrumbs.Back asElement={Link} to="/item/1">
        Item 1
      </Breadcrumbs.Back>
    </Breadcrumbs>
  )
}
```
