import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React from 'react';

import * as CheckboxStories from './Checkbox.stories';

const meta: Meta<typeof Checkbox.Divider> = {
  title: 'Components/Form Elements/Checkbox/Checkbox.Divider',
  component: Checkbox.Divider,
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

type Story = StoryObj<typeof Checkbox.Item>;

export const Default: Story = {
  args: {
    children: 'or',
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
      <Checkbox.Divider {...args} />
      <Checkbox.Item value="none" exclusive exclusiveGroup="symptoms-list">
        No, I do not have any of these symptoms
      </Checkbox.Item>
    </Checkbox>
  ),
};
