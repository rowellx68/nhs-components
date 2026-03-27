import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { InsetText } from './InsetText';

/**
 * Use inset text to help users identify and understand important content on the page, even if they do not read the whole page.
 *
 * https://service-manual.nhs.uk/design-system/components/inset-text
 */
const meta = {
  title: 'Components/Content Presentation/Inset Text',
  component: InsetText,
  argTypes: {
    visuallyHiddenText: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof InsetText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visuallyHiddenText: 'Important: ',
  },
  render: (args) => (
    <InsetText {...args}>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ),
};
