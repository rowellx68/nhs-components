import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { fn } from 'storybook/test';

import { DateInput } from './DateInput';

/**
 * Use date input to help users enter a memorable date, like their date of birth.
 *
 * https://service-manual.nhs.uk/design-system/components/date-input
 */
const meta = {
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
        type: { summary: 'DateInputValue' },
      },
    },
  },
} satisfies Meta<typeof DateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading',
    },
  },
  render: (args) => <DateInput {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    error: 'Date of birth must be in the past',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading',
    },
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
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading',
    },
    error: {
      day: 'Enter a day',
      month: 'Enter a month',
    },
    value: {
      day: '',
      month: '',
      year: '',
    },
  },
  render: (args) => <DateInput {...args} />,
};

/**
 * Use the compound component API to render only specific date parts.
 */
export const DayAndMonth: Story = {
  args: {
    label: 'What is your birthday?',
    hint: 'For example, 5 12',
    namePrefix: 'birthday',
    labelProps: {
      size: 'l',
      variant: 'page-heading',
    },
  },
  render: (args) => (
    <DateInput {...args}>
      <DateInput.Day />
      <DateInput.Month />
    </DateInput>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading',
    },
    disabled: true,
    value: {
      day: '31',
      month: '3',
      year: '1980',
    },
  },
  render: (args) => <DateInput {...args} />,
};
