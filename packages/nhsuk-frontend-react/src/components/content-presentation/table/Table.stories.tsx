import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

/**
 * Use a table to make it easier for users to compare and scan information.
 *
 * https://service-manual.nhs.uk/design-system/components/table
 */
const meta: Meta<typeof Table> = {
  title: 'Components/Content Presentation/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const TwoColumn: Story = {
  render: (args) => (
    <Table {...args}>
      <Table.Caption>Skin symptoms and possible causes</Table.Caption>
      <Table.Head>
        <Table.Row variant="head">
          <Table.Cell variant="head">Skin symptoms</Table.Cell>
          <Table.Cell variant="head">Possible cause</Table.Cell>
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
        <Table.Row>
          <Table.Cell>Red, scaly patches</Table.Cell>
          <Table.Cell>psoriasis</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const ThreeColumn: Story = {
  render: (args) => (
    <Table {...args} variant="responsive">
      <Table.Caption>Ibuprofen tablet dosages for children</Table.Caption>
      <Table.Head>
        <Table.Row variant="head">
          <Table.Cell variant="head" responsiveHeading="Age">
            Age
          </Table.Cell>
          <Table.Cell variant="head" responsiveHeading="How much?">
            How much
          </Table.Cell>
          <Table.Cell variant="head" responsiveHeading="How often?">
            How often
          </Table.Cell>
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
        <Table.Row>
          <Table.Cell>12 to 17 years</Table.Cell>
          <Table.Cell>200mg to 400mg</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
