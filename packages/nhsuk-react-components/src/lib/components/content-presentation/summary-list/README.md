# SummaryList

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/summary-list).

## Basic Usage

```tsx
import { SummaryList } from 'nhsuk-react-components'

const Component = () => {
  return (
    <SummaryList>
      <SummaryList.Row>
        <SummaryList.Key>Key</SummaryList.Key>
        <SummaryList.Value>Value</SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  )
}
```
