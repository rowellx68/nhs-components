import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Table } from '../table/Table';
import { Details } from './Details';

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * https://service-manual.nhs.uk/design-system/components/details
 */
const meta = {
  title: 'Components/Content Presentation/Details',
  component: Details,
  subcomponents: {
    'Details.Summary': Details.Summary,
    'Details.Text': Details.Text,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof Details>;

export default meta;

type Story = StoryObj<typeof Details>;

const NhsNumberContent = () => (
  <>
    <p>
      An NHS number is a 10 digit number, like <span className="nhsuk-u-nowrap">999 123 4567</span>.
    </p>
    <p>
      You can find your NHS number by logging in to the NHS App or on any document the NHS has sent
      you, such as your:
    </p>
    <ul>
      <li>prescriptions</li>
      <li>test results</li>
      <li>hospital referral letters</li>
      <li>appointment letters</li>
    </ul>
    <p>Ask your GP surgery for help if you cannot find your NHS number.</p>
  </>
);

export const Default: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>
        <NhsNumberContent />
      </Details.Text>
    </Details>
  ),
};

const openingTimes: [string, string][] = [
  ['Monday', '9am to 6pm'],
  ['Tuesday', '9am to 6pm'],
  ['Wednesday', '9am to 6pm'],
  ['Thursday', '9am to 6pm'],
  ['Friday', '9am to 6pm'],
  ['Saturday', '9am to 1pm'],
  ['Sunday', 'Closed'],
];

const OpeningTimesTable = () => (
  <Table firstCellIsHeader>
    <Table.Head>
      <Table.Row>
        <Table.Cell>Day of the week</Table.Cell>
        <Table.Cell>Opening hours</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {openingTimes.map(([day, hours]) => (
        <Table.Row key={day}>
          <Table.Cell>{day}</Table.Cell>
          <Table.Cell>{hours}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export const Expander: Story = {
  render: (args) => (
    <Details {...args} variant="expander">
      <Details.Summary>Opening times</Details.Summary>
      <Details.Text>
        <OpeningTimesTable />
      </Details.Text>
    </Details>
  ),
};

export const ExpanderOpen: Story = {
  name: 'Expander open',
  render: (args) => (
    <Details {...args} variant="expander" open>
      <Details.Summary>Opening times</Details.Summary>
      <Details.Text>
        <OpeningTimesTable />
      </Details.Text>
    </Details>
  ),
};

export const Open: Story = {
  render: (args) => (
    <Details {...args} open>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>
        <NhsNumberContent />
      </Details.Text>
    </Details>
  ),
};
