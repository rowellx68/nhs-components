import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Label } from './Label';

it('renders a label element with the nhsuk-label class', async () => {
  const page = await render(<Label htmlFor="name">First name</Label>);
  expect(page.container.querySelector('label.nhsuk-label')).toBeInTheDocument();
});

it('renders the label text', async () => {
  const page = await render(<Label htmlFor="name">First name</Label>);
  await expect.element(page.getByText('First name')).toBeInTheDocument();
});

it.each(['s', 'm', 'l', 'xl'] as const)('applies the size class nhsuk-label--%s', async (size) => {
  const page = await render(
    <Label htmlFor="x" size={size}>
      Label
    </Label>,
  );
  expect(page.container.querySelector(`.nhsuk-label--${size}`)).toBeInTheDocument();
});

it('wraps in a page heading when variant is page-heading', async () => {
  const page = await render(
    <Label htmlFor="name" variant="page-heading" size="l">
      First name
    </Label>,
  );
  expect(page.container.querySelector('h1.nhsuk-label-wrapper')).toBeInTheDocument();
});
