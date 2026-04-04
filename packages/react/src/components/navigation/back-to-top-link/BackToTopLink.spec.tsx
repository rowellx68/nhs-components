import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { BackToTopLink } from './BackToTopLink';

it('renders with the nhsuk-back-to-top class', async () => {
  const page = await render(<BackToTopLink href="#top">Back to top</BackToTopLink>);
  expect(page.container.querySelector('.nhsuk-back-to-top')).toBeInTheDocument();
});

it('renders the link with the nhsuk-back-to-top__link class', async () => {
  const page = await render(<BackToTopLink href="#top">Back to top</BackToTopLink>);
  expect(page.container.querySelector('a.nhsuk-back-to-top__link')).toBeInTheDocument();
});

it('renders the link text', async () => {
  const page = await render(<BackToTopLink href="#top">Back to top</BackToTopLink>);
  await expect.element(page.getByText('Back to top')).toBeInTheDocument();
});
