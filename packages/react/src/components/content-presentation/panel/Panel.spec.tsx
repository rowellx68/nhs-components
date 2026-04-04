import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Panel } from './Panel';

it('renders with the nhsuk-panel class', async () => {
  const page = await render(
    <Panel>
      <Panel.Title>Booking complete</Panel.Title>
      <Panel.Body>Your reference number is 12345.</Panel.Body>
    </Panel>,
  );
  expect(page.container.querySelector('.nhsuk-panel')).toBeInTheDocument();
});

it('renders title and body content', async () => {
  const page = await render(
    <Panel>
      <Panel.Title>Booking complete</Panel.Title>
      <Panel.Body>Your reference number is 12345.</Panel.Body>
    </Panel>,
  );
  await expect.element(page.getByText('Booking complete')).toBeInTheDocument();
  await expect.element(page.getByText('Your reference number is 12345.')).toBeInTheDocument();
});

it('applies the interruption variant class', async () => {
  const page = await render(
    <Panel variant="interruption">
      <Panel.Title>Important</Panel.Title>
    </Panel>,
  );
  expect(page.container.querySelector('.nhsuk-panel--interruption')).toBeInTheDocument();
});
