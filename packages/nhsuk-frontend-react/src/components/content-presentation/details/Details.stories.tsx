import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
import { Details } from './Details';

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * https://service-manual.nhs.uk/design-system/components/details
 */
const meta: Meta<typeof Details> = {
  title: 'Components/Content Presentation/Details',
  component: Details,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Details {...args} data-testid="details">
      <Details.Summary data-testid="details-summary">
        How to find your NHS number
      </Details.Summary>
      <Details.Text data-testid="details-text">
        <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
        <p>
          You can find your NHS number by logging in to a GP online service or
          on any document the NHS has sent you, such as your:
        </p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
        </ul>
        <p>Ask your GP surgery for help if you can't find your NHS number.</p>
      </Details.Text>
    </Details>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await canvas.findByTestId('details');
    await canvas.findByTestId('details-text');
    const summary = await canvas.findByTestId('details-summary');

    await userEvent.click(summary);
  },
};
