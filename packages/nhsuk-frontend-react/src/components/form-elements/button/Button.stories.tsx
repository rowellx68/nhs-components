import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Use buttons to help users carry out an action on a page like starting an application or saving their progress.
 *
 * https://service-manual.nhs.uk/design-system/components/buttons
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Form Elements/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['button', 'submit', 'reset'],
      table: {
        type: {
          summary: 'union',
        },
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'reverse'],
      table: {
        type: {
          summary: 'union',
        },
      },
    },
    as: {
      control: false,
      description:
        'The element to render the `Button` as. This can be a `button`, a anchor or a anchor-like component.',
      table: {
        type: {
          summary: 'React.ElementType',
        },
        defaultValue: {
          summary: 'button',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'button',
    children: 'Primary Button',
    disabled: false,
  },
  render: ({ type, children, disabled, ...props }) => (
    <Button type={type} children={children} disabled={disabled} {...props} />
  ),
};

export const Secondary: Story = {
  args: {
    type: 'button',
    children: 'Secondary Button',
    disabled: false,
  },
  render: ({ type, children, disabled, ...props }) => (
    <Button
      variant="secondary"
      type={type}
      children={children}
      disabled={disabled}
      {...props}
    />
  ),
};

export const Reverse: Story = {
  args: {
    type: 'button',
    children: 'Reverse Button',
    disabled: false,
  },
  render: ({ type, children, disabled, ...props }) => (
    <Button
      variant="reverse"
      type={type}
      children={children}
      disabled={disabled}
      {...props}
    />
  ),
};

export const PrimaryButtonAsLink: Story = {
  args: {
    children: 'Button as Link',
    disabled: false,
  },
  render: ({ children, disabled, ...props }) => (
    <Button
      as="a"
      href="#"
      children={children}
      disabled={disabled}
      {...props}
    />
  ),
};

export const SecondaryButtonAsLink: Story = {
  args: {
    children: 'Button as Link',
    disabled: false,
  },
  render: ({ children, disabled, ...props }) => (
    <Button
      as="a"
      href="#"
      variant="secondary"
      children={children}
      disabled={disabled}
      {...props}
    />
  ),
};

export const ReverseButtonAsLink: Story = {
  args: {
    children: 'Button as Link',
    disabled: false,
  },
  render: ({ children, disabled }) => (
    <Button
      as="a"
      href="#"
      variant="reverse"
      children={children}
      disabled={disabled}
    />
  ),
};
