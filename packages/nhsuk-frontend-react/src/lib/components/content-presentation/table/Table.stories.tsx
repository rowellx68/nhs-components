import type { Meta, StoryObj } from '@storybook/react'
import Table from '.'

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Components/Content Presentation/Table',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Table>

/**
 * The basic usage of the Table component.
 */
export const Basic: Story = {
  args: {
    caption: 'Skin symptoms and possible causes',
  },
  render: (args) => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>eczema</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

/**
 * The responsive usage of the Table component.
 */
export const Responsive: Story = {
  args: {
    caption: 'Ibuprofen tablet dosages for children',
    responsive: true,
  },
  render: (args) => (
    <Table {...args}>
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
    </Table>
  ),
}

/**
 * The usage of the Table component with a numeric column
 */
export const NumericColumn: Story = {
  args: {
    caption: 'Ibuprofen tablet dosages for children',
  },
  render: (args) => (
    <Table {...args}>
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
    </Table>
  ),
}
