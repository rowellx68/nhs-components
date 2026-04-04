import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Main } from './Main';

it('renders a main element with the nhsuk-main-wrapper class', async () => {
  const page = await render(<Main>Content</Main>);
  await expect.element(page.getByRole('main')).toBeInTheDocument();
  expect(page.container.querySelector('main.nhsuk-main-wrapper')).toBeInTheDocument();
});

it('uses maincontent as the default id', async () => {
  const page = await render(<Main>Content</Main>);
  await expect.element(page.getByRole('main')).toHaveAttribute('id', 'maincontent');
});
