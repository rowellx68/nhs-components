import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Breadcrumb } from './Breadcrumb';

/**
 * Use breadcrumbs to help users understand where they are in the website.
 *
 * https://service-manual.nhs.uk/design-system/components/breadcrumbs
 */
const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  subcomponents: {
    'Breadcrumb.List': Breadcrumb.List,
    'Breadcrumb.ListItem': Breadcrumb.ListItem,
    'Breadcrumb.BackLink': Breadcrumb.BackLink,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.ListItem href="#">Home</Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="#">NHS services</Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="#">Hospitals</Breadcrumb.ListItem>
      </Breadcrumb.List>
      <Breadcrumb.BackLink href="#">Hospitals</Breadcrumb.BackLink>
    </Breadcrumb>
  ),
};

export const Reverse: Story = {
  args: {
    variant: 'reverse',
  },
  render: (args) => (
    <div style={{ background: '#005eb8', padding: '2rem' }}>
      <Breadcrumb {...args}>
        <Breadcrumb.List>
          <Breadcrumb.ListItem href="#">Home</Breadcrumb.ListItem>
          <Breadcrumb.ListItem href="#">NHS services</Breadcrumb.ListItem>
          <Breadcrumb.ListItem href="#">Hospitals</Breadcrumb.ListItem>
        </Breadcrumb.List>
        <Breadcrumb.BackLink href="#">Hospitals</Breadcrumb.BackLink>
      </Breadcrumb>
    </div>
  ),
};
