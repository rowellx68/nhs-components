import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { ActionLink } from './ActionLink';

/**
 * Use action links to help users get to the next stage of a journey quickly by signposting the start of a digital service.
 *
 * https://service-manual.nhs.uk/design-system/components/action-link
 */
const meta = {
  title: 'Components/Navigation/Action Link',
  component: ActionLink,
  argTypes: {
    as: { control: false },
  },
} satisfies Meta<typeof ActionLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Find your nearest A&E',
    href: '#',
  },
  render: (args) => <ActionLink {...args} />,
};

export const Reverse: Story = {
  args: {
    children: 'Find your nearest A&E',
    href: '#',
    variant: 'reverse',
  },
  render: (args) => (
    <div style={{ background: '#005eb8', padding: '2rem' }}>
      <ActionLink {...args} />
    </div>
  ),
};
