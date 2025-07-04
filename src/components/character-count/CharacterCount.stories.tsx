import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterCount } from './CharacterCount';

/**
 * Help users know how much text they can enter when there is a limit on the number of characters.
 *
 * https://service-manual.nhs.uk/design-system/components/character-count
 */
const meta: Meta<typeof CharacterCount> = {
  title: 'Components/Form Elements/Character Count',
  component: CharacterCount,
};

export default meta;

type Story = StoryObj<typeof CharacterCount>;

export const WithMaxCharacters: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal or financial information, for example, your National Insurance number or credit card details.',
    variant: 'character-count',
    maxCharacterLength: 10,
  },
  render: (args) => <CharacterCount {...args} />,
};

export const WithMaxWords: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal or financial information, for example, your National Insurance number or credit card details.',
    variant: 'word-count',
    maxWords: 5,
  },
  render: (args) => <CharacterCount {...args} />,
};
