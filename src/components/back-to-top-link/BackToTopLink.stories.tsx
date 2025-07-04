import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BackToTopLink } from './BackToTopLink';

const meta: Meta<typeof BackToTopLink> = {
  title: 'Components/Navigation/Back To Top Link',
  component: BackToTopLink,
};

export default meta;

type Story = StoryObj<typeof BackToTopLink>;

export const Default: Story = {
  args: {
    href: '#top',
  },
  render: (args) => <BackToTopLink {...args}>Back to top</BackToTopLink>,
};
