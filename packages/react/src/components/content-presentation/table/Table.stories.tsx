import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Container } from '@/components/styles/layout/container/Container';
import { Column, Row } from '@/components/styles/layout/grid/Grid';

import { Table } from './Table';

/**
 * Use a table to make it easier for users to compare and scan information.
 *
 * https://service-manual.nhs.uk/design-system/components/table
 */
const meta = {
  title: 'Components/Content Presentation/Table',
  component: Table,
  subcomponents: {
    'Table.Caption': Table.Caption,
    'Table.Head': Table.Head,
    'Table.Body': Table.Body,
    'Table.Row': Table.Row,
    'Table.Cell': Table.Cell,
  } as Record<string, React.ComponentType<any>>,
  argTypes: {
    variant: {
      control: false,
      table: {
        type: {
          summary: 'responsive | undefined',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <Table.Caption size="m">Impetigo can look similar to other skin conditions</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>Cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>Eczema</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy blisters</Table.Cell>
          <Table.Cell>Shingles, chickenpox</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const Reverse: Story = {
  args: {
    reverse: true,
  },
  render: (args) => (
    <Table {...args}>
      <Table.Caption size="m">Impetigo can look similar to other skin conditions</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>Cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>Eczema</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy blisters</Table.Cell>
          <Table.Cell>Shingles, chickenpox</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const Responsive: Story = {
  render: (args) => (
    <Table {...args} variant="responsive">
      <Table.Caption size="m">Ibuprofen syrup dosages for children</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Age</Table.Cell>
          <Table.Cell>How much?</Table.Cell>
          <Table.Cell>How often?</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>3 to 5 months (weighing more than 5kg)</Table.Cell>
          <Table.Cell>2.5ml</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>6 to 11 months</Table.Cell>
          <Table.Cell>2.5ml</Table.Cell>
          <Table.Cell>Max 3 to 4 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1 to 3 years</Table.Cell>
          <Table.Cell>5ml</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>4 to 6 years</Table.Cell>
          <Table.Cell>7.5ml</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>7 to 9 years</Table.Cell>
          <Table.Cell>10ml</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>10 to 11 years</Table.Cell>
          <Table.Cell>15ml</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>12 to 17 years</Table.Cell>
          <Table.Cell>15ml to 20ml</Table.Cell>
          <Table.Cell>Max 3 to 4 times in 24 hours</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const ResponsiveWithFirstCellAsHeader: Story = {
  args: {
    firstCellIsHeader: true,
    variant: 'responsive',
  },
  render: (args) => (
    <Container>
      <Row>
        <Column width="two-thirds">
          <Table {...args}>
            <Table.Caption size="m">
              Prescription prepayment certificate (PPC) charges
            </Table.Caption>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Item</Table.Cell>
                <Table.Cell variant="numeric">Current charge</Table.Cell>
                <Table.Cell variant="numeric">New charge</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>3-month</Table.Cell>
                <Table.Cell variant="numeric">£31.25</Table.Cell>
                <Table.Cell variant="numeric">£32.05</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>12-month</Table.Cell>
                <Table.Cell variant="numeric">£111.60</Table.Cell>
                <Table.Cell variant="numeric">£114.50</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>HRT</Table.Cell>
                <Table.Cell variant="numeric">£19.30</Table.Cell>
                <Table.Cell variant="numeric">£19.80</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Column>
      </Row>
    </Container>
  ),
};
