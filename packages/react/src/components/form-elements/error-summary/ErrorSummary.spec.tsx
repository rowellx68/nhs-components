import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { ErrorSummary } from './ErrorSummary';

it('renders with the nhsuk-error-summary class', async () => {
  const page = await render(
    <ErrorSummary disableAutoFocus>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <ErrorSummary.List>
          <ErrorSummary.ListItem href="#name">Enter your name</ErrorSummary.ListItem>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>,
  );
  expect(page.container.querySelector('.nhsuk-error-summary')).toBeInTheDocument();
});

it('renders with role=alert', async () => {
  const page = await render(
    <ErrorSummary disableAutoFocus>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body />
    </ErrorSummary>,
  );
  await expect.element(page.getByRole('alert')).toBeInTheDocument();
});

it('renders error links', async () => {
  const page = await render(
    <ErrorSummary disableAutoFocus>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <ErrorSummary.List>
          <ErrorSummary.ListItem href="#name">Enter your name</ErrorSummary.ListItem>
          <ErrorSummary.ListItem href="#dob">Enter your date of birth</ErrorSummary.ListItem>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>,
  );
  const links = page.container.querySelectorAll('.nhsuk-error-summary__list a');
  expect(links).toHaveLength(2);
});
