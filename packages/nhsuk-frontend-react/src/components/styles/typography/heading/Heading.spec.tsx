import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Heading } from './Heading';

it('renders an h1 element by default', async () => {
  const page = await render(<Heading>Page title</Heading>);
  await expect.element(page.getByRole('heading', { level: 1 })).toBeInTheDocument();
});

it.each(['xl', 'l', 'm', 's', 'xs'] as const)(
  'applies the nhsuk-heading-%s class',
  async (size) => {
    const page = await render(<Heading size={size}>Title</Heading>);
    expect(page.container.querySelector(`.nhsuk-heading-${size}`)).toBeInTheDocument();
  },
);

it('renders as a different heading level via the as prop', async () => {
  const page = await render(<Heading as="h2">Section title</Heading>);
  expect(page.container.querySelector('h2')).toBeInTheDocument();
});
