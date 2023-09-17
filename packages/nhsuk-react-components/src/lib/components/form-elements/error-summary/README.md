# ErrorSummary

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/error-summary).

## Basic Usage

```tsx
import { ErrorSummary } from 'nhsuk-react-components'

const Component = () => {
  return (
    <ErrorSummary>
      <ErrorSummary.Title>Error summary title</ErrorSummary.Title>
      <ErrorSummary.Body>
        <ErrorSummary.List>
          <ErrorSummary.Item href="#example-error-1">Example error 1</ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>
  )
}
```
