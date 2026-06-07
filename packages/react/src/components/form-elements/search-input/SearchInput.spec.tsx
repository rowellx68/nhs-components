import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { SearchInput } from './SearchInput';

it('renders a search input with the search-input classes', async () => {
  const page = await render(<SearchInput name="search" label="Search the site" />);
  const input = page.container.querySelector<HTMLInputElement>('input[type="search"]')!;
  expect(input).toBeInTheDocument();
  expect(input).toHaveClass('nhsuk-input', 'nhsuk-search-input__input');
  expect(page.container.querySelector('.nhsuk-search-input')).toBeInTheDocument();
});

it('defaults the input id to the name', async () => {
  const page = await render(<SearchInput name="query" label="Search" />);
  expect(page.container.querySelector('#query')).toBeInTheDocument();
});

it('renders a search button labelled Search by default', async () => {
  const page = await render(<SearchInput name="search" label="Search" />);
  const button = page.getByRole('button', { name: 'Search' });
  await expect.element(button).toBeInTheDocument();
  expect(page.container.querySelector('.nhsuk-search-input__button')).toHaveClass(
    'nhsuk-button--icon',
  );
});

it('applies the large modifier', async () => {
  const page = await render(<SearchInput name="search" label="Search" large />);
  expect(page.container.querySelector('.nhsuk-search-input--large')).toBeInTheDocument();
  expect(page.container.querySelector('.nhsuk-input--large')).toBeInTheDocument();
});

it('disables the input and the button when disabled', async () => {
  const page = await render(<SearchInput name="search" label="Search" disabled />);
  expect(page.container.querySelector<HTMLInputElement>('input[type="search"]')!.disabled).toBe(
    true,
  );
  expect(page.container.querySelector<HTMLButtonElement>('button')!.disabled).toBe(true);
});

it('renders visible button text when provided', async () => {
  const page = await render(
    <SearchInput name="search" label="Search" button={{ text: 'Search' }} />,
  );
  expect(page.container.querySelector('.nhsuk-button__content')).toHaveTextContent('Search');
});
