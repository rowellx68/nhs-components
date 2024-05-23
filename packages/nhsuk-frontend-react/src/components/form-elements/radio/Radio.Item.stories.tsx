import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import React from 'react';
import { Input } from '../input/Input';

import * as RadioStories from './Radio.stories';

const meta: Meta<typeof Radio.Item> = {
  title: 'Components/Form Elements/Radio/Radio.Item',
  component: Radio.Item,
  argTypes: {
    conditional: {
      description: 'Conditional content to show when the checkbox is selected',
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
    value: 'yes',
    children: 'Yes',
    name: 'adult',
  },
  render: (args) => (
    <Radio
      {...Object.assign(
        {},
        RadioStories.Default.args,
        RadioStories.default.args,
      )}
    >
      <Radio.Item {...args} />
      <Radio.Item value="no" name={args.name}>
        No
      </Radio.Item>
    </Radio>
  ),
};

export const WithItemHint: Story = {
  args: {
    value: 'yes',
    hint: 'We will text you a 6 digit security code',
    children: 'Yes, I have a mobile phone with signal',
    name: 'signal',
  },
  render: (args) => (
    <Radio
      {...Object.assign(
        {},
        RadioStories.WithItemHint.args,
        RadioStories.default.args,
      )}
    >
      <Radio.Item {...args} />
      <Radio.Item
        value="no"
        name={args.name}
        hint="We will call you to give you a 6 digit security code"
      >
        No, I want to use my landline
      </Radio.Item>
    </Radio>
  ),
};

export const WithConditionalContent: Story = {
  args: {
    value: 'sms',
    conditional: <Input label="Mobile number" width="two-thirds" />,
    children: 'Text message',
    name: 'contact-method',
  },
  render: (args) => (
    <Radio
      {...Object.assign(
        {},
        RadioStories.WithConditionalContent.args,
        RadioStories.default.args,
      )}
    >
      <Radio.Item
        name={args.name}
        value="email"
        conditional={<Input label="Email address" width="two-thirds" />}
      >
        Email
      </Radio.Item>
      <Radio.Item
        name={args.name}
        value="phone"
        conditional={<Input label="Phone number" width="two-thirds" />}
      >
        Phone
      </Radio.Item>
      <Radio.Item {...args} />
    </Radio>
  ),
};
