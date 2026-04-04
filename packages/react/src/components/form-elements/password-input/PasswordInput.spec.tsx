import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { PasswordInput } from './PasswordInput';

it('renders a password input', async () => {
  const page = await render(<PasswordInput id="password" name="password" label="Password" />);
  expect(page.container.querySelector('input[type="password"]')).toBeInTheDocument();
});

it('renders the label text', async () => {
  const page = await render(<PasswordInput id="password" name="password" label="Password" />);
  await expect.element(page.getByText('Password')).toBeInTheDocument();
});

it('renders a show/hide toggle button', async () => {
  const page = await render(<PasswordInput id="password" name="password" label="Password" />);
  expect(page.container.querySelector('.nhsuk-password-input__toggle')).toBeInTheDocument();
});

it('applies the error class when an error is provided', async () => {
  const page = await render(
    <PasswordInput id="password" name="password" label="Password" error="Enter a password" />,
  );
  await expect.element(page.getByText('Enter a password')).toBeInTheDocument();
});
