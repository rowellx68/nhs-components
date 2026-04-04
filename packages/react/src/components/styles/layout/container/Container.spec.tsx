import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Container } from './Container';

it('renders with the nhsuk-width-container class by default', async () => {
  const page = await render(<Container>Content</Container>);
  expect(page.container.querySelector('.nhsuk-width-container')).toBeInTheDocument();
});

it('applies the fluid class for the fluid variant', async () => {
  const page = await render(<Container variant="fluid">Content</Container>);
  expect(page.container.querySelector('.nhsuk-width-container-fluid')).toBeInTheDocument();
});
