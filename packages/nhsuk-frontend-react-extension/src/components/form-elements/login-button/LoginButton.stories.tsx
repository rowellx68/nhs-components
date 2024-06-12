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

export const CareIdentityNoCallToAction: Story = {
  args: {
    variant: 'cis2-no-cta',
    disabled: false,
  },
};

export const CareIdentityReverse: Story = {
  args: {
    variant: 'cis2-reverse',
    disabled: false,
  },
};

export const CareIdentityReverseNoCallToAction: Story = {
  args: {
    variant: 'cis2-reverse-no-cta',
    disabled: false,
  },
};

export const NHSLogin: Story = {
  args: {
    variant: 'nhs-login',
    disabled: false,
  },
};

export const NHSLoginReverse: Story = {
  args: {
    variant: 'nhs-login-reverse',
    disabled: false,
  },
};

export const NHSLoginNoLogo: Story = {
  args: {
    variant: 'nhs-login-no-logo',
    disabled: false,
  },
};

export const NHSLoginReverseNoLogo: Story = {
  args: {
    variant: 'nhs-login-reverse-no-logo',
    disabled: false,
  },
};
