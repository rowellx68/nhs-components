import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React from 'react';
import { Input } from '../input/Input';

import * as CheckboxStories from './Checkbox.stories';

const meta: Meta<typeof Checkbox.Item> = {
  title: 'Components/Form Elements/Checkbox/Checkbox.Item',
  component: Checkbox.Item,
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

type Story = StoryObj<typeof Checkbox.Item>;

export const Default: Story = {
  args: {
    value: 'email',
    children: 'Email',
  },
  render: (args) => (
    <Checkbox
      {...Object.assign(
        {},
        CheckboxStories.Default.args,
        CheckboxStories.default.args,
      )}
    >
      <Checkbox.Item {...args} />
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
  ),
};

export const WithItemHint: Story = {
  args: {
    value: 'british',
    hint: 'including English, Scottish, Welsh and Northern Irish',
    children: 'British',
  },
  render: (args) => (
    <Checkbox
      {...Object.assign(
        {},
        CheckboxStories.WithItemHint.args,
        CheckboxStories.default.args,
      )}
    >
      <Checkbox.Item {...args} />
      <Checkbox.Item value="irish">Irish</Checkbox.Item>
      <Checkbox.Item value="other">Citizen of another country</Checkbox.Item>
    </Checkbox>
  ),
};

export const WithExclusiveOption: Story = {
  args: {
    exclusive: true,
    exclusiveGroup: 'symptoms-list',
    children: 'No, I do not have any of these symptoms',
    value: 'none',
  },
  render: (args) => (
    <Checkbox
      {...Object.assign(
        {},
        CheckboxStories.WithExclusiveOption.args,
        CheckboxStories.default.args,
      )}
    >
      <Checkbox.Item value="sore throat" exclusiveGroup="symptoms-list">
        Sore throat
      </Checkbox.Item>
      <Checkbox.Item value="runny nose" exclusiveGroup="symptoms-list">
        Runny nose
      </Checkbox.Item>
      <Checkbox.Item
        value="muscle or joint pain"
        exclusiveGroup="symptoms-list"
      >
        Muscle or joint pain
      </Checkbox.Item>
      <Checkbox.Divider />
      <Checkbox.Item {...args} />
    </Checkbox>
  ),
};

export const WithConditionalContent: Story = {
  args: {
    value: 'sms',
    conditional: <Input label="Mobile number" width="two-thirds" />,
    children: 'Text message',
  },
  render: (args) => (
    <Checkbox
      {...Object.assign(
        {},
        CheckboxStories.WithConditionalContent.args,
        CheckboxStories.default.args,
      )}
    >
      <Checkbox.Item
        value="email"
        conditional={<Input label="Email address" width="two-thirds" />}
      >
        Email
      </Checkbox.Item>
      <Checkbox.Item
        value="phone"
        conditional={<Input label="Phone number" width="two-thirds" />}
      >
        Phone
      </Checkbox.Item>
      <Checkbox.Item {...args} />
    </Checkbox>
  ),
};
