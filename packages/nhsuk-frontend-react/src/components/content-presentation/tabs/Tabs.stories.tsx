import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

/**
 * The tabs component lets users navigate between related sections of content, displaying 1 section at a time.
 *
 * https://service-manual.nhs.uk/design-system/components/tabs
 */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Content Presentation/Tabs',
  component: Tabs,
  subcomponents: {
    'Tabs.Title': Tabs.Title,
    'Tabs.List': Tabs.List,
    'Tabs.ListItem': Tabs.ListItem,
    'Tabs.Panel': Tabs.Panel,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Title>Contents</Tabs.Title>
      <Tabs.List>
        <Tabs.ListItem href="#past-day">Past day</Tabs.ListItem>
        <Tabs.ListItem href="#past-week">Past week</Tabs.ListItem>
        <Tabs.ListItem href="#past-month">Past month</Tabs.ListItem>
        <Tabs.ListItem href="#past-year">Past year</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panel id="past-day">
        <h2>Past day</h2>
        <p>Content for the past day</p>
      </Tabs.Panel>
      <Tabs.Panel id="past-week">
        <h2>Past week</h2>
        <p>Content for the past week</p>
      </Tabs.Panel>
      <Tabs.Panel id="past-month">
        <h2>Past month</h2>
        <p>Content for the past month</p>
      </Tabs.Panel>
      <Tabs.Panel id="past-year">
        <h2>Past year</h2>
        <p>Content for the past year</p>
      </Tabs.Panel>
    </Tabs>
  ),
};
