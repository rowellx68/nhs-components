import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hint } from './Hint';

/**
 * Use hint text to help users understand a question.
 *
 * https://service-manual.nhs.uk/design-system/components/hint-text
 */
const meta: Meta<typeof Hint> = {
  title: 'Components/Form Elements/Hint',
  component: Hint,
};

export default meta;

type Story = StoryObj<typeof Hint>;

export const Default: Story = {
  args: {
    children: 'Use hint text to help users understand a question.',
  },
  render: (args) => <Hint {...args} />,
};
