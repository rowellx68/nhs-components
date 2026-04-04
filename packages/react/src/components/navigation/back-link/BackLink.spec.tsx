import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { BackLink } from './BackLink';

it('renders with the nhsuk-back-link class', async () => {
  const page = await render(<BackLink href="/previous">Go back</BackLink>);
  expect(page.container.querySelector('.nhsuk-back-link')).toBeInTheDocument();
});

it('renders the link text', async () => {
  const page = await render(<BackLink href="/previous">Go back</BackLink>);
  await expect.element(page.getByText('Go back')).toBeInTheDocument();
});

it('applies the reverse variant class', async () => {
  const page = await render(
    <BackLink href="/previous" variant="reverse">
      Go back
    </BackLink>,
  );
  expect(page.container.querySelector('.nhsuk-back-link--reverse')).toBeInTheDocument();
});

it('renders as a polymorphic element', async () => {
  const page = await render(
    <BackLink as="button" onClick={() => {}}>
      Go back
    </BackLink>,
  );
  expect(page.container.querySelector('button.nhsuk-back-link')).toBeInTheDocument();
});
