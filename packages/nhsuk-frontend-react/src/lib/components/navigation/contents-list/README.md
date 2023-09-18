# Contents list

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/content-list).

## Basic Usage

```tsx
import { ContentsList } from 'nhsuk-frontend-react'

const Component = () => {
  return (
    <ContentsList>
      <ContentsList.Item current href="/current">
        Current page
      </ContentsList.Item>
      <ContentsList.Item href="/page-1">Page 1</ContentsList.Item>
    </ContentsList>
  )
}
```
