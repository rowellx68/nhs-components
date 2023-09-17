# Table

More details about this component can be found [here](https://service-manual.nhs.uk/design-system/components/table).

## Basic Usage

```tsx
import { Table } from 'nhsuk-react-components'

const Component = () => {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Column 1</Table.Cell>
          <Table.Cell>Column 2</Table.Cell>
          <Table.Cell>Column 3</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1</Table.Cell>
          <Table.Cell>Row 1</Table.Cell>
          <Table.Cell>Row 1</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 2</Table.Cell>
          <Table.Cell>Row 2</Table.Cell>
          <Table.Cell>Row 2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Row 3</Table.Cell>
          <Table.Cell>Row 3</Table.Cell>
          <Table.Cell>Row 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
```
