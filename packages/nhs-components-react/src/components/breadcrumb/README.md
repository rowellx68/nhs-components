# Breadcrumb

More details about this component can be found [here](https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/breadcrumb) in the `nhsuk-frontend` repository.

## Basic Usage

```jsx
import { Breadcrumb } from 'nhs-components-react'

const Component = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/item/1">Item 1</Breadcrumb.Item>
      <Breadcrumb.Item href="/item/2">Item 2</Breadcrumb.Item>
      <Breadcrumb.Back href="/item/1">Item 1</Breadcrumb.Back>
    </Breadcrumb>
  )
}
```

## Usage with `react-router-dom`

```jsx
import { Breadcrumb } from 'nhs-components-react'
import { Link } from 'react-router-dom'

const Component = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item asElement={Link} to="/item/1">
        Item 1
      </Breadcrumb.Item>
      <Breadcrumb.Item asElement={Link} to="/item/2">
        Item 2
      </Breadcrumb.Item>
      <Breadcrumb.Back asElement={Link} to="/item/1">
        Item 1
      </Breadcrumb.Back>
    </Breadcrumb>
  )
}
```
