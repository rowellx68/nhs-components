import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput } from './DateInput';
import { fn } from 'storybook/test';

/**
 * Use date input to help users enter a memorable date, like their date of birth.
 *
 * https://service-manual.nhs.uk/design-system/components/date-input
 */
const meta: Meta<typeof DateInput> = {
  title: 'Components/Form Elements/Date Input',
  component: DateInput,
  subcomponents: {
    'DateInput.Day': DateInput.Day,
    'DateInput.Month': DateInput.Month,
    'DateInput.Year': DateInput.Year,
  } as Record<string, React.ComponentType<any>>,
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: false,
      table: {
        type: {
          summary: 'DateInputValue',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    namePrefix: 'date-of-birth',
    value: {
      day: '31',
      month: '3',
      year: '1980',
    },
  },
  render: (args) => <DateInput {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    error: 'Please enter a valid date of birth',
    namePrefix: 'date-of-birth',
    value: {
      day: '',
      month: '',
      year: '',
    },
  },
  render: (args) => <DateInput {...args} />,
};

export const WithErrorObject: Story = {
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    namePrefix: 'date-of-birth',
    error: {
      day: 'Please enter a valid day.',
      month: 'Please enter a valid month.',
    },
    value: {
      day: '',
      month: '',
      year: '',
    },
  },
  render: (args) => <DateInput {...args} />,
};

export const Disabled: Story = {
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    disabled: true,
    value: {
      day: '31',
      month: '3',
      year: '1980',
    },
  },
  render: (args) => <DateInput {...args} />,
};
