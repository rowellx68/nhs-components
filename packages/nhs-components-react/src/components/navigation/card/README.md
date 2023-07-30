# Card

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/card).

## Basic Usage

```tsx
import { Card } from 'nhs-components-react'

const Component = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Heading>
          If you need help now, but it’s not an emergency
        </Card.Heading>
        <Card.Description>
          Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
```
