import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Button } from './Button';

/**
 * Use buttons to help users carry out an action on a page like starting an application or saving their progress.
 *
 * https://service-manual.nhs.uk/design-system/components/buttons
 */
const meta = {
  title: 'Components/Form Elements/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      table: {
        type: { summary: 'union' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'secondary-solid', 'reverse', 'warning', 'login'],
      table: {
        type: { summary: 'union' },
      },
    },
    as: {
      control: false,
      description:
        'The element to render the `Button` as. This can be a `button`, an anchor or an anchor-like component.',
      table: {
        type: { summary: 'React.ElementType' },
        defaultValue: { summary: 'button' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Save and continue',
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    children: 'Find my location',
    variant: 'secondary',
  },
  render: (args) => <Button {...args} />,
};

export const SecondarySolid: Story = {
  args: {
    children: 'Find my location',
    variant: 'secondary-solid',
  },
  render: (args) => <Button {...args} />,
};

export const Reverse: Story = {
  args: {
    children: 'Log out',
    variant: 'reverse',
  },
  render: (args) => <Button {...args} />,
};

export const Warning: Story = {
  args: {
    children: 'Yes, delete this vaccine',
    variant: 'warning',
  },
  render: (args) => <Button {...args} />,
};

export const Login: Story = {
  args: {
    children: 'Continue',
    variant: 'login',
  },
  render: (args) => <Button {...args} />,
};

export const Small: Story = {
  args: {
    children: 'Save and continue',
    small: true,
  },
  render: (args) => <Button {...args} />,
};

export const Disabled: Story = {
  args: {
    children: 'Disabled button',
    disabled: true,
  },
  render: (args) => <Button {...args} />,
};

export const PrimaryButtonAsLink: Story = {
  args: {
    children: 'Link button',
  },
  render: (args) => <Button {...args} as="a" href="#" />,
};

export const SecondaryButtonAsLink: Story = {
  args: {
    children: 'Find my location',
    variant: 'secondary',
  },
  render: (args) => <Button {...args} as="a" href="#" />,
};

export const SecondarySolidButtonAsLink: Story = {
  args: {
    children: 'Find my location',
    variant: 'secondary-solid',
  },
  render: (args) => <Button {...args} as="a" href="#" />,
};

export const ReverseButtonAsLink: Story = {
  args: {
    children: 'Log out',
    variant: 'reverse',
  },
  render: (args) => <Button {...args} as="a" href="#" />,
};

export const WarningButtonAsLink: Story = {
  args: {
    children: 'Yes, delete this vaccine',
    variant: 'warning',
  },
  render: (args) => <Button {...args} as="a" href="#" />,
};

export const LoginButtonAsLink: Story = {
  args: {
    children: 'Continue',
    variant: 'login',
  },
  render: (args) => <Button {...args} as="a" href="#" />,
};
