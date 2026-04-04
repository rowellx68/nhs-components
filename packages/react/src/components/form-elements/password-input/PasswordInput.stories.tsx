import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { PasswordInput } from './PasswordInput';

/**
 * Use the password input component to help users reliably enter passwords.
 *
 * https://service-manual.nhs.uk/design-system/components/password-input
 */
const meta = {
  title: 'Components/Form Elements/Password Input',
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    id: 'example',
    name: 'example',
    label: 'Password',
    labelProps: { variant: 'page-heading' },
  },
};

export const WithHint: Story = {
  args: {
    id: 'with-hint-text',
    name: 'example',
    label: 'Password',
    labelProps: { variant: 'page-heading' },
    hint: 'It probably has some letters, numbers and maybe even some symbols in it',
  },
};

export const WithError: Story = {
  args: {
    id: 'with-error-message',
    name: 'example',
    label: 'Password',
    labelProps: { variant: 'page-heading' },
    error: 'Enter a password',
  },
};

export const WithoutPageHeading: Story = {
  args: {
    id: 'without-heading',
    name: 'example',
    label: 'Password',
  },
};

export const NewPassword: Story = {
  args: {
    id: 'new-password',
    name: 'example',
    label: 'Create a password',
    labelProps: { variant: 'page-heading' },
    autoComplete: 'new-password',
  },
};
