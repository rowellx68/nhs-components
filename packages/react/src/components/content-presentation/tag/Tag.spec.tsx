import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Tag } from './Tag';

it('renders a strong element with the nhsuk-tag class', async () => {
  const page = await render(<Tag>Active</Tag>);
  expect(page.container.querySelector('strong.nhsuk-tag')).toBeInTheDocument();
});

it.each([
  'white',
  'grey',
  'green',
  'aqua-green',
  'blue',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
] as const)('applies the %s colour class', async (colour) => {
  const page = await render(<Tag colour={colour}>Label</Tag>);
  expect(page.container.querySelector(`.nhsuk-tag--${colour}`)).toBeInTheDocument();
});

it('applies the no-border class', async () => {
  const page = await render(<Tag noBorder>Label</Tag>);
  expect(page.container.querySelector('.nhsuk-tag--no-border')).toBeInTheDocument();
});
