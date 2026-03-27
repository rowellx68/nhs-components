import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { ErrorMessage } from './ErrorMessage';

it('renders a span with the nhsuk-error-message class', async () => {
  const page = await render(<ErrorMessage>Enter your name</ErrorMessage>);
  expect(page.container.querySelector('span.nhsuk-error-message')).toBeInTheDocument();
});

it('renders the error text', async () => {
  const page = await render(<ErrorMessage>Enter your name</ErrorMessage>);
  await expect.element(page.getByText('Enter your name')).toBeInTheDocument();
});

it('renders the default visually hidden prefix', async () => {
  const page = await render(<ErrorMessage>Enter your name</ErrorMessage>);
  expect(page.container.querySelector('.nhsuk-u-visually-hidden')).toBeInTheDocument();
});
