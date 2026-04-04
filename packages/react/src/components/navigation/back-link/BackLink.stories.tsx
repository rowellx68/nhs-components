import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';

import { BackLink } from './BackLink';

/**
 * Use back links to help users go back to the previous page in a multi-page transaction.
 *
 * https://service-manual.nhs.uk/design-system/components/back-link
 */
const meta = {
  title: 'Components/Navigation/Back Link',
  component: BackLink,
  argTypes: {
    as: { control: false },
  },
} satisfies Meta<typeof BackLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Back',
    href: '#',
  },
  render: (args) => <BackLink {...args} />,
};

export const Reverse: Story = {
  args: {
    children: 'Back',
    href: '#',
    variant: 'reverse',
  },
  render: (args) => (
    <div style={{ background: '#005eb8', padding: '2rem' }}>
      <BackLink {...args} />
    </div>
  ),
};

export const AsButton: Story = {
  args: {
    children: 'Back',
    as: 'button',
    onClick: fn(),
  },
  render: (args) => <BackLink {...args} />,
};
