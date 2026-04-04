import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { WarningCallout } from './WarningCallout';

/**
 * Use a warning callout to help users identify and understand warning content on the page, even if they do not read the whole page.
 *
 * https://service-manual.nhs.uk/design-system/components/warning-callout
 */
const meta = {
  title: 'Components/Content Presentation/Warning Callout',
  component: WarningCallout,
  subcomponents: {
    'WarningCallout.Label': WarningCallout.Label,
    'WarningCallout.Description': WarningCallout.Description,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof WarningCallout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Label>Important</WarningCallout.Label>
      <WarningCallout.Description>
        For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
        including herbal medicines, vitamins or supplements.
      </WarningCallout.Description>
    </WarningCallout>
  ),
};

/**
 * When the label is not simply the word "Important", prepend visually hidden text so screen reader users still hear the "Important:" prefix.
 */
export const WithCustomHeading: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Label visuallyHiddenText="Important: ">
        School, nursery or work
      </WarningCallout.Label>
      <WarningCallout.Description>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </WarningCallout.Description>
    </WarningCallout>
  ),
};

/**
 * Use the `as` prop on `WarningCallout.Label` to change the heading level to fit the page hierarchy.
 */
export const WithDifferentHeadingLevels: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Label as="h2">Important</WarningCallout.Label>
      <WarningCallout.Description>
        For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
        including herbal medicines, vitamins or supplements.
      </WarningCallout.Description>
    </WarningCallout>
  ),
};
