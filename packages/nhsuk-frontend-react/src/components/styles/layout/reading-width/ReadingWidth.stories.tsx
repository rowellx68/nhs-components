import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ReadingWidth } from './ReadingWidth';
import { Container } from '../container/Container';

/**
 * To make it easy to read, lines of text should be no longer than 70 to 80 characters.
 *
 * When using the fluid-width container or wider grid columns, wrap text content with `.nhsuk-u-reading-width` to apply a maximum width and limit the number of characters per line.
 *
 * https://service-manual.nhs.uk/design-system/styles/layout#utility-classes
 */

const meta: Meta<typeof ReadingWidth> = {
  title: 'Styles/Layout/Reading Width',
  component: ReadingWidth,
  argTypes: {
    id: {
      control: false,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReadingWidth>;

export const Default: Story = {
  render: (args) => (
    <Container>
      <ReadingWidth {...args}>
        <p>
          This is example content which would exceed 70-80 characters per line,
          if used within a full width column. The .nhsuk-u-reading-width utility
          class will apply a maximum width and limit the number of characters
          per line.
        </p>
      </ReadingWidth>
    </Container>
  ),
};
