import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BackLink } from './BackLink';

/**
 * Use back links to help users go back to the previous page in a multi-page transaction.
 *
 * https://service-manual.nhs.uk/design-system/components/back-link
 */
const meta: Meta<typeof BackLink> = {
  title: 'Components/Navigation/Back Link',
  component: BackLink,
  argTypes: {
    as: {
      control: false,
      description:
        'The component to render the `BackLink` as. This can be an anchor or a link-like component.',
      table: {
        defaultValue: {
          summary: 'a',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackLink>;

export const Default: Story = {
  args: {
    children: 'Go back',
    href: '#',
  },
  render: (args) => <BackLink {...args} />,
};

export const AsButton: Story = {
  args: {
    children: 'Go back',
    as: 'button',
    onClick: fn(),
  },
  render: (args) => <BackLink {...args} />,
};
