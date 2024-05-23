import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import React from 'react';
import { Input } from '../input/Input';

/**
 * Use radios when you want users to select only 1 option from a list.
 *
 * https://service-manual.nhs.uk/design-system/components/radios
 */
const meta: Meta<typeof Radio> = {
  title: 'Components/Form Elements/Radio',
  component: Radio,
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

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Are you 18 or over?',
    labelProps: {
      size: 'l',
      variant: 'page-heading',
    },
  },
  render: (args) => (
    <Radio {...args}>
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>
  ),
};

export const Inline: Story = {
  args: {
    label: 'Are you 18 or over?',
    inline: true,
  },
  render: (args) => (
    <Radio {...args}>
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>
  ),
};

export const WithHint: Story = {
  args: {
    label: 'Do you know your NHS number?',
    hint: [
      'This is a 10 digit number, like 485 777 3456.',
      'You can find it on any letter the NHS has sent you, on a prescription or by logging in to a GP practice online service.',
    ],
  },
  render: (args) => (
    <Radio {...args}>
      <Radio.Item value="yes" name="nhs-number">
        Yes, I know my NHS number
      </Radio.Item>
      <Radio.Item value="no" name="nhs-number">
        No, I do not know my NHS number
      </Radio.Item>
      <Radio.Item value="not sure" name="nhs-number">
        I'm not sure
      </Radio.Item>
    </Radio>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Have you changed your name?',
    hint: 'This includes changing your last name or spelling your name differently.',
    error: 'Select yes if you have changed your name',
  },
  render: (args) => (
    <Radio {...args}>
      <Radio.Item value="yes" name="change-name">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="change-name">
        No
      </Radio.Item>
    </Radio>
  ),
};

export const WithItemHint: Story = {
  args: {
    label: 'Do you have a mobile phone with signal?',
  },
  render: (args) => (
    <Radio {...args}>
      <Radio.Item
        value="yes"
        name="mobile-signal"
        hint="We will text you a 6 digit security code"
      >
        Yes, I have a mobile phone with signal
      </Radio.Item>
      <Radio.Item
        value="no"
        name="mobile-signal"
        hint="We will call you to give you a 6 digit security code"
      >
        No, I want to use my landline
      </Radio.Item>
    </Radio>
  ),
};

export const WithDivider: Story = {
  args: {
    label: 'How do you want to sign in?',
  },
  render: (args) => (
    <Radio {...args}>
      <Radio.Item value="nhs-login" name="sign-in">
        NHS login
      </Radio.Item>
      <Radio.Item value="gov-uk" name="sign-in">
        GOV.UK Verify
      </Radio.Item>
      <Radio.Divider />
      <Radio.Item value="create account" name="sign-in">
        Create an account
      </Radio.Item>
    </Radio>
  ),
};

export const WithConditionalContent: Story = {
  args: {
    label: 'How would you like to be contacted?',
    hint: 'Select one option',
  },
  render: (args) => (
    <Radio {...args}>
      <Radio.Item
        name="contact-method"
        value="email"
        conditional={<Input label="Email address" width="two-thirds" />}
      >
        Email
      </Radio.Item>
      <Radio.Item
        name="contact-method"
        value="phone"
        conditional={<Input label="Phone number" width="two-thirds" />}
      >
        Phone
      </Radio.Item>
      <Radio.Item
        name="contact-method"
        value="sms"
        conditional={<Input label="Mobile number" width="two-thirds" />}
      >
        Text message
      </Radio.Item>
    </Radio>
  ),
};
