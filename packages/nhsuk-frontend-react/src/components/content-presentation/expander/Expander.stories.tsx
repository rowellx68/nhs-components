import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Expander } from './Expander';
import { Link } from '@/components/styles/typography/link/Link';

/**
 * Make a complex topic easier to digest by letting users reveal more detailed information only if they need it.
 *
 * https://service-manual.nhs.uk/design-system/components/expander
 */

const meta: Meta<typeof Expander> = {
  title: 'Components/Content Presentation/Expander',
  component: Expander,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleExpander: Story = {
  render: (args) => (
    <Expander {...args}>
      <Expander.Summary>Get your medical records</Expander.Summary>
      <Expander.Text>
        <p>You can see your GP records by:</p>
        <ul>
          <li>asking for them at your GP surgery </li>
          <li>
            going online to see them (if you have signed up for{' '}
            <Link href="/using-the-nhs/nhs-services/gps/gp-online-services/">
              GP online services
            </Link>
            )
          </li>
        </ul>
      </Expander.Text>
    </Expander>
  ),
};

export const MoreThanOneExpander: Story = {
  render: (args) => (
    <Expander.Group>
      <Expander {...args}>
        <Expander.Summary>
          How to measure your blood glucose levels
        </Expander.Summary>
        <Expander.Text>
          <p>
            Testing your blood at home is quick and easy, although it can be
            uncomfortable. It does get better.
          </p>
          <p>You would have been given:</p>
          <ul>
            <li>a blood glucose metre</li>
            <li>small needles called lancets</li>
            <li>a plastic pen to hold the lancets</li>
            <li>small test strips</li>
          </ul>
        </Expander.Text>
      </Expander>
      <Expander {...args}>
        <Expander.Summary>
          When to check your blood glucose level
        </Expander.Summary>
        <Expander.Text>
          <p>Try to check your blood:</p>
          <ul>
            <li>before meals</li>
            <li>2 to 3 hours after meals</li>
            <li>before, during (take a break) and after exercise</li>
          </ul>
          <p>
            This helps you understand your blood glucose levels and how they’re
            affected by meals and exercise. It should help you have more stable
            blood glucose levels.
          </p>
        </Expander.Text>
      </Expander>
    </Expander.Group>
  ),
};
