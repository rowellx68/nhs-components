import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Hint } from './Hint';

/**
 * Use hint text to help users understand a question.
 *
 * https://service-manual.nhs.uk/design-system/components/hint-text
 */
const meta = {
  title: 'Components/Form Elements/Hint',
  component: Hint,
} satisfies Meta<typeof Hint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Do not include personal information like your name, date of birth or NHS number',
  },
  render: (args) => <Hint {...args} />,
};
