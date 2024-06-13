import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Form Elements/Password Input',
  component: PasswordInput,
  args: {
    label: 'Password',
    error: '',
    hint: '',
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Example: Story = {};
