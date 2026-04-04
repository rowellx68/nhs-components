import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { NotificationBanner } from './NotificationBanner';

it('renders with the nhsuk-notification-banner class', async () => {
  const page = await render(
    <NotificationBanner>
      <NotificationBanner.Header>Important</NotificationBanner.Header>
      <NotificationBanner.Content>
        <NotificationBanner.Heading>You have a new message.</NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>,
  );
  expect(page.container.querySelector('.nhsuk-notification-banner')).toBeInTheDocument();
});

it('renders as a region landmark by default', async () => {
  const page = await render(
    <NotificationBanner>
      <NotificationBanner.Header>Important</NotificationBanner.Header>
      <NotificationBanner.Content />
    </NotificationBanner>,
  );
  await expect.element(page.getByRole('region')).toBeInTheDocument();
});

it('renders as an alert for the success variant', async () => {
  const page = await render(
    <NotificationBanner variant="success" disableAutoFocus>
      <NotificationBanner.Header>Success</NotificationBanner.Header>
      <NotificationBanner.Content />
    </NotificationBanner>,
  );
  await expect.element(page.getByRole('alert')).toBeInTheDocument();
});

it('applies the success modifier class', async () => {
  const page = await render(
    <NotificationBanner variant="success" disableAutoFocus>
      <NotificationBanner.Header>Success</NotificationBanner.Header>
      <NotificationBanner.Content />
    </NotificationBanner>,
  );
  expect(page.container.querySelector('.nhsuk-notification-banner--success')).toBeInTheDocument();
});
