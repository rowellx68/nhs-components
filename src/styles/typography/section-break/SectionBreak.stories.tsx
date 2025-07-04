import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionBreak } from './SectionBreak';

/**
 * You can use the `nhsuk-section-break` classes on an `<hr>` element to create a thematic break between sections of content. `nhsuk-section-break` has class-based modifiers for different size margins.
 *
 * By default `nhsuk-section-break` is only visible by its margin. You can add the `nhsuk-section-break--visible` class to make it visible with a separator line.
 *
 * https://service-manual.nhs.uk/design-system/styles/typography#section-break
 */
const meta: Meta<typeof SectionBreak> = {
  title: 'Styles/Typography/Section Break',
  component: SectionBreak,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: false,
  },
  render: (args) => <SectionBreak {...args} />,
};

export const Visible: Story = {
  args: {
    visible: true,
  },
  render: (args) => <SectionBreak {...args} />,
};
