import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { LedeText } from './LedeText';

/**
 * https://service-manual.nhs.uk/design-system/styles/typography
 */
const meta = {
  title: 'Styles/Typography/LedeText',
  component: LedeText,
} satisfies Meta<typeof LedeText>;

export default meta;

type Story = StoryObj<typeof LedeText>;

export const Default: Story = {
  args: {
    children: 'nhsuk-lede-text',
  },
  render: (args) => <LedeText {...args} />,
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'nhsuk-lede-text-s',
  },
  render: (args) => <LedeText {...args} />,
};
