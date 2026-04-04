import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { SkipLink } from './SkipLink';

it('renders with the nhsuk-skip-link class', async () => {
  const page = await render(
    <>
      <SkipLink>Skip to main content</SkipLink>
      <main id="maincontent">Content</main>
    </>,
  );
  expect(page.container.querySelector('a.nhsuk-skip-link')).toBeInTheDocument();
});

it('renders the link text', async () => {
  const page = await render(
    <>
      <SkipLink>Skip to main content</SkipLink>
      <main id="maincontent">Content</main>
    </>,
  );
  await expect.element(page.getByText('Skip to main content')).toBeInTheDocument();
});

it('uses the default href of #maincontent', async () => {
  const page = await render(
    <>
      <SkipLink>Skip to main content</SkipLink>
      <main id="maincontent">Content</main>
    </>,
  );
  await expect.element(page.getByRole('link')).toHaveAttribute('href', '#maincontent');
});

it('accepts a custom href', async () => {
  const page = await render(
    <>
      <SkipLink href="#main">Skip to main content</SkipLink>
      <main id="main">Content</main>
    </>,
  );
  await expect.element(page.getByRole('link')).toHaveAttribute('href', '#main');
});
