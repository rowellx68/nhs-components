import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Panel } from './Panel';

/**
 * Use a panel to highlight that users have done something successfully.
 *
 * https://service-manual.nhs.uk/design-system/components/panel
 */
const meta: Meta<typeof Panel> = {
  title: 'Components/Content Presentation/Panel',
  component: Panel,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Panel {...args}>
      <Panel.Title>Application complete</Panel.Title>
      <Panel.Body>Confirmation has been sent to you by email</Panel.Body>
    </Panel>
  ),
};
