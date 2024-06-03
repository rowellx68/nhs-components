import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@/components/styles/typography/paragraph/Paragraph';

/**
 * Use review dates to let users know when a page was last checked and will be checked again.
 *
 * https://service-manual.nhs.uk/design-system/patterns/reassure-users-that-a-page-is-up-to-date
 */
const meta: Meta = {
  title: 'Patterns/Tasks/Reassure users that a page is up to date',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ReassureUsersThatAPageIsUpToDate: Story = {
  render: (args) => (
    <Paragraph
      {...args}
      variant="small"
      className="nhsuk-u-secondary-text-color nhsuk-u-margin-top-7 nhsuk-u-margin-bottom-0"
    >
      Page last reviewed: 15 March 2021
      <br />
      Next review due: 15 March 2024
    </Paragraph>
  ),
};
