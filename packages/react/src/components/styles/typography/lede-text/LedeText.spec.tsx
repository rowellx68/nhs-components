import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { LedeText } from './LedeText';

it('renders a div with the nhsuk-lede-text class by default', async () => {
  const page = await render(<LedeText>Lede text</LedeText>);
  expect(page.container.querySelector('div.nhsuk-lede-text')).toBeInTheDocument();
});

it('applies the small size class', async () => {
  const page = await render(<LedeText size="s">Small lede text</LedeText>);
  expect(page.container.querySelector('.nhsuk-lede-text')).not.toBeInTheDocument();
  expect(page.container.querySelector('.nhsuk-lede-text-s')).toBeInTheDocument();
});

it('renders without a size class when size is not provided', async () => {
  const page = await render(<LedeText>Lede text</LedeText>);
  expect(page.container.querySelector('.nhsuk-lede-text-s')).not.toBeInTheDocument();
});

it('renders the lede text content', async () => {
  const page = await render(<LedeText>Hello NHS</LedeText>);
  await expect.element(page.getByText('Hello NHS')).toBeInTheDocument();
});

it('renders as a different element when as prop is provided', async () => {
  const page = await render(<LedeText as="p">Lede text</LedeText>);
  expect(page.container.querySelector('p.nhsuk-lede-text')).toBeInTheDocument();
});

it('forwards additional class names', async () => {
  const page = await render(<LedeText className="custom-class">Lede text</LedeText>);
  expect(page.container.querySelector('.nhsuk-lede-text.custom-class')).toBeInTheDocument();
});
