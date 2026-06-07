import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { SearchInput } from './SearchInput';

/**
 * Use the search input component to let users search for a word or phrase.
 *
 * https://service-manual.nhs.uk/design-system/components/search
 */
const meta = {
  title: 'Components/Form Elements/Search Input',
  component: SearchInput,
  decorators: [
    (Story) => (
      <form>
        <Story />
      </form>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'search',
    label: 'Search',
  },
  render: (args) => <SearchInput {...args} />,
};

export const Large: Story = {
  args: {
    name: 'search',
    label: 'Search',
    large: true,
  },
  render: (args) => <SearchInput {...args} />,
};

export const WithButtonText: Story = {
  args: {
    name: 'search',
    label: 'Search',
    button: { text: 'Search' },
  },
  render: (args) => <SearchInput {...args} />,
};

export const Disabled: Story = {
  args: {
    name: 'search',
    label: 'Search',
    disabled: true,
  },
  render: (args) => <SearchInput {...args} />,
};
