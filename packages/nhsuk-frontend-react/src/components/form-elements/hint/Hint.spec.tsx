import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Hint } from './Hint';

it('renders with the nhsuk-hint class', async () => {
  const page = await render(<Hint>For example, 15 3 1984</Hint>);
  expect(page.container.querySelector('.nhsuk-hint')).toBeInTheDocument();
});

it('renders the hint text', async () => {
  const page = await render(<Hint>For example, 15 3 1984</Hint>);
  await expect.element(page.getByText('For example, 15 3 1984')).toBeInTheDocument();
});
