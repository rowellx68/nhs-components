import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { ActionLink } from './ActionLink';

it('renders with the nhsuk-action-link class', async () => {
  const page = await render(<ActionLink href="/find-pharmacy">Find a pharmacy</ActionLink>);
  expect(page.container.querySelector('.nhsuk-action-link')).toBeInTheDocument();
});

it('renders the link text', async () => {
  const page = await render(<ActionLink href="/find-pharmacy">Find a pharmacy</ActionLink>);
  await expect.element(page.getByText('Find a pharmacy')).toBeInTheDocument();
});

it('applies the reverse variant class', async () => {
  const page = await render(
    <ActionLink href="/find-pharmacy" variant="reverse">
      Find a pharmacy
    </ActionLink>,
  );
  expect(page.container.querySelector('.nhsuk-action-link--reverse')).toBeInTheDocument();
});
