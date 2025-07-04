import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

/**
 * Links are blue and underlined by default with a styled focus state for people who use keyboards or other devices to navigate through a page.
 *
 * If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.
 *
 * https://service-manual.nhs.uk/design-system/styles/typography#links
 */
const story: Meta<typeof Link> = {
  title: 'Styles/Typography/Link',
  component: Link,
};

export default story;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
  },
  render: (args) => <Link {...args}>Link</Link>,
};

export const NoVisitedState: Story = {
  args: {
    href: '#',
    noVisitedState: true,
  },
  render: (args) => <Link {...args}>Link nhsuk-link--no-visited-state</Link>,
};
