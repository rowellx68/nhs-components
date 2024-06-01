import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React from 'react';
import { Input } from '../input/Input';

/**
 * Use checkboxes to let users select 1 or more options on a form.
 *
 * https://service-manual.nhs.uk/design-system/components/checkboxes
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form Elements/Checkbox',
  component: Checkbox,
  argTypes: {
    labelProps: {
      control: false,
      table: {
        type: {
          summary: 'LabelProps',
        },
      },
    },
  },
  args: {
    labelProps: {
      size: 'l',
      variant: 'page-heading',
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'How would you like to be contacted?',
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
  ),
};

export const WithHint: Story = {
  args: {
    label: 'How would you like to be contacted?',
    hint: 'Select all options that are relevant to you.',
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
  ),
};

export const WithError: Story = {
  args: {
    label: 'How would you like to be contacted?',
    error: 'Select one option',
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
  ),
};

export const WithItemHint: Story = {
  args: {
    label: 'What is your nationality?',
    hint: 'If you have dual nationality, select all options that are relevant to you.',
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Item
        value="email"
        hint="including English, Scottish, Welsh and Northern Irish"
      >
        British
      </Checkbox.Item>
      <Checkbox.Item value="phone">Irish</Checkbox.Item>
      <Checkbox.Item value="sms">Citizen of another country</Checkbox.Item>
    </Checkbox>
  ),
};

export const WithExclusiveOption: Story = {
  args: {
    label: 'Do you have any of these symptoms?',
    hint: 'Select all the symptoms you have.',
  },
  render: (args) => (
    <Checkbox {...args}>
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
      <Checkbox.Item value="none" exclusive exclusiveGroup="symptoms-list">
        No, I do not have any of these symptoms
      </Checkbox.Item>
    </Checkbox>
  ),
};

export const WithConditionalContent: Story = {
  args: {
    label: 'How would you like to be contacted?',
    hint: 'Select all options that are relevant to you.',
  },
  render: (args) => (
    <Checkbox {...args}>
      <Checkbox.Item
        value="email"
        conditional={
          <Input type="email" label="Email address" width="two-thirds" />
        }
      >
        Email
      </Checkbox.Item>
      <Checkbox.Item
        value="phone"
        conditional={
          <Input type="tel" label="Phone number" width="two-thirds" />
        }
      >
        Phone
      </Checkbox.Item>
      <Checkbox.Item
        value="sms"
        conditional={<Input label="Mobile number" width="two-thirds" />}
      >
        Text message
      </Checkbox.Item>
    </Checkbox>
  ),
};
