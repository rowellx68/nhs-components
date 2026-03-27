import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { List } from './List';

it('renders an unordered list with the nhsuk-list class by default', async () => {
  const page = await render(
    <List>
      <List.Item>Item</List.Item>
    </List>,
  );
  expect(page.container.querySelector('ul.nhsuk-list')).toBeInTheDocument();
});

it('renders an ordered list when variant is ordered', async () => {
  const page = await render(
    <List variant="ordered">
      <List.Item>Item</List.Item>
    </List>,
  );
  expect(page.container.querySelector('ol.nhsuk-list--number')).toBeInTheDocument();
});

it('applies the bullet class when variant is unordered', async () => {
  const page = await render(
    <List variant="unordered">
      <List.Item>Item</List.Item>
    </List>,
  );
  expect(page.container.querySelector('.nhsuk-list--bullet')).toBeInTheDocument();
});

it('applies the border class when border is true', async () => {
  const page = await render(
    <List border>
      <List.Item>Item</List.Item>
    </List>,
  );
  expect(page.container.querySelector('.nhsuk-list--border')).toBeInTheDocument();
});

it('renders list items', async () => {
  const page = await render(
    <List>
      <List.Item>First</List.Item>
      <List.Item>Second</List.Item>
    </List>,
  );
  await expect.element(page.getByText('First')).toBeInTheDocument();
  await expect.element(page.getByText('Second')).toBeInTheDocument();
});
