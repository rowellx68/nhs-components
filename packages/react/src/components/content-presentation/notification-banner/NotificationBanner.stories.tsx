import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { NotificationBanner } from './NotificationBanner';

/**
 * Use a notification banner to tell the user something they need to know that's not directly related to the page content.
 *
 * https://service-manual.nhs.uk/design-system/components/notification-banners
 */
const meta = {
  title: 'Components/Content Presentation/Notification Banner',
  component: NotificationBanner,
  subcomponents: {
    'NotificationBanner.Header': NotificationBanner.Header,
    'NotificationBanner.Content': NotificationBanner.Content,
    'NotificationBanner.Heading': NotificationBanner.Heading,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof NotificationBanner>;

export default meta;

type Story = StoryObj<typeof NotificationBanner>;

export const Default: Story = {
  render: () => (
    <NotificationBanner>
      <NotificationBanner.Header />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>
          You have 7 days left to confirm your email address
        </NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
  ),
};

export const Success: Story = {
  render: () => (
    <NotificationBanner variant="success">
      <NotificationBanner.Header variant="success" />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>
          Your email address has been confirmed
        </NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
  ),
};

export const SuccessWithDisableAutoFocus: Story = {
  render: () => (
    <NotificationBanner variant="success" disableAutoFocus={true}>
      <NotificationBanner.Header variant="success" />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>Your details have been updated</NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
  ),
};

export const WithRoleOverride: Story = {
  render: () => (
    <NotificationBanner role="region">
      <NotificationBanner.Header />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>This banner has a custom role</NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
  ),
};
