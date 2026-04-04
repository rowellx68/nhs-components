import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { CharacterCount } from './CharacterCount';

/**
 * Help users know how much text they can enter when there is a limit on the number of characters.
 *
 * https://service-manual.nhs.uk/design-system/components/character-count
 */
const meta = {
  title: 'Components/Form Elements/Character Count',
  component: CharacterCount,
  args: {
    labelProps: {
      size: 'l',
      variant: 'page-heading',
    },
  },
} satisfies Meta<typeof CharacterCount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal information like your name, date of birth or NHS number',
    variant: 'character-count',
    maxCharacterLength: 200,
  },
  render: (args) => <CharacterCount {...args} />,
};

export const WithWordCount: Story = {
  args: {
    label: 'Enter a job description',
    variant: 'word-count',
    maxWords: 150,
  },
  render: (args) => <CharacterCount {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Enter a job description',
    hint: 'Do not include personal information like your name, date of birth or NHS number',
    error: 'Job description must be 350 characters or less',
    variant: 'character-count',
    maxCharacterLength: 350,
    defaultValue:
      'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.',
  },
  render: (args) => <CharacterCount {...args} />,
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Enter a job description',
    variant: 'character-count',
    maxCharacterLength: 350,
    defaultValue:
      'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels.',
  },
  render: (args) => <CharacterCount {...args} />,
};
