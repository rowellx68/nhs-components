import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React from 'react';

/**
 * Use text input to let users enter a single line of text.
 *
 * https://service-manual.nhs.uk/design-system/components/text-input
 */
const meta: Meta = {
  title: 'Components/Form Elements/Input',
  component: Input,
  argTypes: {
    width: {
      control: {
        type: 'select',
      },
      options: [
        '2',
        '3',
        '4',
        '5',
        '10',
        '20',
        '30',
        'full',
        'one-half',
        'one-third',
        'two-thirds',
        'one-quarter',
        'three-quarters',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Full name',
  },
  render: (args) => <Input {...args} />,
};

export const WithFixedWidth: Story = {
  render: (args) => (
    <>
      <Input {...args} label="30 character width" width="30" />
      <Input {...args} label="20 character width" width="20" />
      <Input {...args} label="10 character width" width="10" />
      <Input {...args} label="5 character width" width="5" />
      <Input {...args} label="4 character width" width="4" />
      <Input {...args} label="3 character width" width="3" />
      <Input {...args} label="2 character width" width="2" />
    </>
  ),
};

export const WithFluidWidth: Story = {
  render: (args) => (
    <>
      <Input {...args} label="Full width" width="full" />
      <Input {...args} label="Three-quarters width" width="three-quarters" />
      <Input {...args} label="Two-thirds width" width="two-thirds" />
      <Input {...args} label="One-half width" width="one-half" />
      <Input {...args} label="One-third width" width="one-third" />
      <Input {...args} label="One-quarter width" width="one-quarter" />
    </>
  ),
};

export const WithHint: Story = {
  args: {
    label: 'Enter a full postcode in England',
    hint: 'For example, LS1 1AB',
    width: '10',
    error: '',
  },
  render: (args) => <Input {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Full name',
    error: 'Enter your full name',
  },
  render: (args) => <Input {...args} />,
};

export const WholeNumbers: Story = {
  args: {
    label: 'What is your NHS number?',
    hint: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.',
    width: '10',
  },
  render: (args) => (
    <Input {...args} type="text" inputMode="numeric" pattern="[0-9]*" />
  ),
};

export const WithPrefixAndSuffix: Story = {
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: '5',
  },
  render: (args) => <Input {...args} />,
};

export const WithPrefix: Story = {
  args: {
    label: 'Cost in pounds',
    prefix: '£',
    width: '5',
  },
  render: (args) => <Input {...args} />,
};

export const WithSuffix: Story = {
  args: {
    label: 'Weight in kilograms',
    suffix: 'kg',
    width: '5',
  },
  render: (args) => <Input {...args} />,
};

export const WithPrefixSuffixAndError: Story = {
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: '5',
    error: 'Enter a cost per item, in pounds',
  },
  render: (args) => <Input {...args} />,
};
