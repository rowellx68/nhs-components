# Tabs

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/tabs).

## Basic Usage

```tsx
import { Tabs } from 'nhsuk-frontend-react'

const Component = () => {
  return (
    <Tabs>
      <Tabs.Tab id='item-1'>
        <Tabs.Item>Item 1</Tabs.Item>
        <Tabs.Panel>
          Content goes here 1
        </Tabs.Panel>
      </Tabs.Tab>
      <Tabs.Tab id='item-2'>
        <Tabs.Item>Item 2</Tabs.Item>
        <Tabs.Panel>
          Content goes here 2
        </Tabs.Panel>
      </Tabs.Tab>
    </Tabs>
  )
}
```
