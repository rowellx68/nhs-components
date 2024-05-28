import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WarningCallout } from './WarningCallout';

/**
 * Use a warning callout to help users identify and understand warning content on the page, even if they do not read the whole page.
 *
 * https://service-manual.nhs.uk/design-system/components/warning-callout
 */
const meta: Meta<typeof WarningCallout> = {
  title: 'Components/Content Presentation/Warning Callout',
  component: WarningCallout,
  subcomponents: {
    'WarningCallout.Label': WarningCallout.Label,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Label visuallyHiddenText="Important: ">
        School, nursery or work
      </WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted
        over. This is usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
  ),
};

/**
 * If the heading is simply the word "Important" or it includes the word "important", you do not need to use visually hidden text.
 */
export const WithNoVisuallyHiddenText: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Label>Important</WarningCallout.Label>
      <p>
        For safety, tell your doctor or pharmacist if you're taking any other
        medicines, including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>
  ),
};

export const WithDifferentHeadingLevels: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Label as="h3">Important</WarningCallout.Label>
      <p>
        For safety, tell your doctor or pharmacist if you're taking any other
        medicines, including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>
  ),
};
