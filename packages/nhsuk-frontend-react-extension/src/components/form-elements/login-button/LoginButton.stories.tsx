import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoginButton } from './LoginButton';

const meta: Meta<typeof LoginButton> = {
  title: 'Components/Form Elements/Login Button',
  component: LoginButton,
  args: {
    variant: 'cis2',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',

      },
      options: [
        'cis2',
        'cis2-no-cta',
        'cis2-reverse',
        'cis2-reverse-no-cta',
        'nhs-login',
        'nhs-login-reverse',
        'nhs-login-no-logo',
        'nhs-login-reverse-no-logo',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const Example: Story = {};