# Pagination

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/pagination).

## Basic Usage

```tsx
import { Pagination } from 'nhs-components-react'

const Component = () => {
  return (
    <Pagination>
      <Pagination.Link previous href="/page/1">
        Page 1
      </Pagination.Link>
      <Pagination.Link next href="/page/3">
        Page 3
      </Pagination.Link>
    </Pagination>
  )
}
```
