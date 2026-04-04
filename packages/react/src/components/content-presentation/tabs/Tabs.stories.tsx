import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Table } from '@/components/content-presentation/table/Table';

import { Tabs } from './Tabs';

/**
 * The tabs component lets users navigate between related sections of content, displaying 1 section at a time.
 *
 * https://service-manual.nhs.uk/design-system/components/tabs
 */
const meta = {
  title: 'Components/Content Presentation/Tabs',
  component: Tabs,
  subcomponents: {
    'Tabs.Title': Tabs.Title,
    'Tabs.List': Tabs.List,
    'Tabs.ListItem': Tabs.ListItem,
    'Tabs.Panel': Tabs.Panel,
  } as Record<string, React.ComponentType<any>>,
  argTypes: {
    as: { control: false },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

const CaseManagerTable = ({ caption }: { caption: string }) => (
  <Table>
    <Table.Caption>{caption}</Table.Caption>
    <Table.Head>
      <Table.Row>
        <Table.Cell>Case manager</Table.Cell>
        <Table.Cell variant="numeric">Cases opened</Table.Cell>
        <Table.Cell variant="numeric">Cases closed</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>David Francis</Table.Cell>
        <Table.Cell variant="numeric">
          {caption === 'Past day'
            ? 3
            : caption === 'Past week'
              ? 24
              : caption === 'Past month'
                ? 98
                : 1380}
        </Table.Cell>
        <Table.Cell variant="numeric">
          {caption === 'Past day'
            ? 0
            : caption === 'Past week'
              ? 18
              : caption === 'Past month'
                ? 95
                : 1472}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Paul Farmer</Table.Cell>
        <Table.Cell variant="numeric">
          {caption === 'Past day'
            ? 1
            : caption === 'Past week'
              ? 16
              : caption === 'Past month'
                ? 122
                : 1129}
        </Table.Cell>
        <Table.Cell variant="numeric">
          {caption === 'Past day'
            ? 0
            : caption === 'Past week'
              ? 20
              : caption === 'Past month'
                ? 131
                : 1083}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Rita Patel</Table.Cell>
        <Table.Cell variant="numeric">
          {caption === 'Past day'
            ? 2
            : caption === 'Past week'
              ? 24
              : caption === 'Past month'
                ? 126
                : 1539}
        </Table.Cell>
        <Table.Cell variant="numeric">
          {caption === 'Past day'
            ? 0
            : caption === 'Past week'
              ? 27
              : caption === 'Past month'
                ? 142
                : 1265}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Title>Contents</Tabs.Title>
      <Tabs.List>
        <Tabs.ListItem href="#past-day" selected>
          Past day
        </Tabs.ListItem>
        <Tabs.ListItem href="#past-week">Past week</Tabs.ListItem>
        <Tabs.ListItem href="#past-month">Past month</Tabs.ListItem>
        <Tabs.ListItem href="#past-year">Past year</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panel id="past-day">
        <CaseManagerTable caption="Past day" />
      </Tabs.Panel>
      <Tabs.Panel id="past-week" hidden>
        <CaseManagerTable caption="Past week" />
      </Tabs.Panel>
      <Tabs.Panel id="past-month" hidden>
        <CaseManagerTable caption="Past month" />
      </Tabs.Panel>
      <Tabs.Panel id="past-year" hidden>
        <CaseManagerTable caption="Past year" />
      </Tabs.Panel>
    </Tabs>
  ),
};
