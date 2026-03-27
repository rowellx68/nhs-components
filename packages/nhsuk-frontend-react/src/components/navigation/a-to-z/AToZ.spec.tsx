import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { AToZ } from './AToZ';

it('renders a navigation element', async () => {
  const page = await render(
    <AToZ aria-label="A to Z navigation">
      <AToZ.Item href="#A">A</AToZ.Item>
      <AToZ.Item href="#B">B</AToZ.Item>
    </AToZ>,
  );
  await expect
    .element(page.getByRole('navigation', { name: 'A to Z navigation' }))
    .toBeInTheDocument();
});

it('renders items as links', async () => {
  const page = await render(
    <AToZ aria-label="A to Z navigation">
      <AToZ.Item href="#A">A</AToZ.Item>
      <AToZ.Item href="#B">B</AToZ.Item>
    </AToZ>,
  );
  const links = page.container.querySelectorAll('a');
  expect(links).toHaveLength(2);
});

it('applies the noItems style when an item has no content', async () => {
  const page = await render(
    <AToZ aria-label="A to Z navigation">
      <AToZ.Item href="#A">A</AToZ.Item>
      <AToZ.Item href="#B" noItems>
        B
      </AToZ.Item>
    </AToZ>,
  );
  expect(page.container.querySelector('.nhsuk-u-secondary-text-color')).toBeInTheDocument();
});
