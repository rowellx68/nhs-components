import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Table from '..'

describe('Table', () => {
  test('should match snapshot', () => {
    render(
      <Table data-testid="table">
        <Table.Head>
          <Table.Row>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>How much</Table.Cell>
            <Table.Cell>How often</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>7 to 9 years</Table.Cell>
            <Table.Cell>200mg</Table.Cell>
            <Table.Cell>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>10 to 11 years</Table.Cell>
            <Table.Cell>200mg to 300mg</Table.Cell>
            <Table.Cell>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    expect(screen.getByTestId('table')).toMatchSnapshot()
  })

  test('should match snapshot - responsive', () => {
    render(
      <Table data-testid="table" responsive>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>How much</Table.Cell>
            <Table.Cell>How often</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>7 to 9 years</Table.Cell>
            <Table.Cell>200mg</Table.Cell>
            <Table.Cell>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>10 to 11 years</Table.Cell>
            <Table.Cell>200mg to 300mg</Table.Cell>
            <Table.Cell>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    expect(screen.getByTestId('table')).toMatchSnapshot()
  })

  test('should match snapshot - numeric column', () => {
    render(
      <Table data-testid="table">
        <Table.Head>
          <Table.Row>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>How much</Table.Cell>
            <Table.Cell isNumeric>How often</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>7 to 9 years</Table.Cell>
            <Table.Cell>200mg</Table.Cell>
            <Table.Cell isNumeric>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>10 to 11 years</Table.Cell>
            <Table.Cell>200mg to 300mg</Table.Cell>
            <Table.Cell isNumeric>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    expect(screen.getByTestId('table')).toMatchSnapshot()
  })

  test('should match snapshot - caption', () => {
    render(
      <Table data-testid="table" caption="Caption">
        <Table.Head>
          <Table.Row>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>How much</Table.Cell>
            <Table.Cell>How often</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>7 to 9 years</Table.Cell>
            <Table.Cell>200mg</Table.Cell>
            <Table.Cell>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>10 to 11 years</Table.Cell>
            <Table.Cell>200mg to 300mg</Table.Cell>
            <Table.Cell>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    expect(screen.getByTestId('table')).toMatchSnapshot()
  })

  test('should match snapshot - other children', () => {
    render(
      <Table data-testid="table" responsive>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>How much</Table.Cell>
            <Table.Cell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>7 to 9 years</Table.Cell>
            <Table.Cell>200mg</Table.Cell>
            <td>Max 3 times in 24 hours</td>
          </Table.Row>
          <Table.Row>
            <Table.Cell>10 to 11 years</Table.Cell>
            <Table.Cell>200mg to 300mg</Table.Cell>
            <Table.Cell>Max 3 times in 24 hours</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    )

    expect(screen.getByTestId('table')).toMatchSnapshot()
  })
})
