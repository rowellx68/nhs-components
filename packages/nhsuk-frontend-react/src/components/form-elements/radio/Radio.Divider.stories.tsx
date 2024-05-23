import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import React from 'react';

import * as RadioStories from './Radio.stories';

const meta: Meta<typeof Radio.Divider> = {
  title: 'Components/Form Elements/Radio/Radio.Divider',
  component: Radio.Divider,
  argTypes: {
    children: {
      control: false,
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <form>
        <Story />
      </form>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Radio.Item>;

export const Default: Story = {
  args: {
    children: 'or',
  },
  render: (args) => (
    <Radio
      {...Object.assign(
        {},
        RadioStories.WithDivider.args,
        RadioStories.default.args,
      )}
    >
      <Radio.Item value="nhs-login" name="sign-in">
        NHS login
      </Radio.Item>
      <Radio.Item value="gov-uk" name="sign-in">
        GOV.UK Verify
      </Radio.Item>
      <Radio.Divider {...args} />
      <Radio.Item value="create account" name="sign-in">
        Create an account
      </Radio.Item>
    </Radio>
  ),
};
