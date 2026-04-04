import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { BackToTopLink } from './BackToTopLink';

const meta = {
  title: 'Components/Navigation/Back To Top Link',
  component: BackToTopLink,
} satisfies Meta<typeof BackToTopLink>;

export default meta;

type Story = StoryObj<typeof BackToTopLink>;

export const Default: Story = {
  args: {
    href: '#top',
  },
  render: (args) => <BackToTopLink {...args}>Back to top</BackToTopLink>,
};
