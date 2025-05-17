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
        'nhs-login',
        'nhs-login-no-logo',
        'nhs-login-simple',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoginButton>;

export const CareIdentity: Story = {};

export const CareIdentityNoCallToAction: Story = {
  args: {
    variant: 'cis2-no-cta',
    disabled: false,
  },
};

export const NHSLogin: Story = {
  args: {
    variant: 'nhs-login',
    disabled: false,
  },
};

export const NHSLoginNoLogo: Story = {
  args: {
    variant: 'nhs-login-no-logo',
    disabled: false,
  },
};

export const NHSLoginSimple: Story = {
  args: {
    variant: 'nhs-login-simple',
    disabled: false,
  },
};
