import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Link } from './Link';

it('renders with the nhsuk-link class', async () => {
  const page = await render(<Link href="/conditions">Health A to Z</Link>);
  expect(page.container.querySelector('a.nhsuk-link')).toBeInTheDocument();
});

it('renders the link text', async () => {
  const page = await render(<Link href="/conditions">Health A to Z</Link>);
  await expect.element(page.getByText('Health A to Z')).toBeInTheDocument();
});

it('applies the no-visited-state class', async () => {
  const page = await render(
    <Link href="/conditions" noVisitedState>
      Health A to Z
    </Link>,
  );
  expect(page.container.querySelector('.nhsuk-link--no-visited-state')).toBeInTheDocument();
});
