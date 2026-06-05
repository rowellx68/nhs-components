import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { SearchIcon } from '@/icons/search/Search';

import { Button } from './Button';

it('renders a button element', async () => {
  const page = await render(<Button>Submit</Button>);
  await expect.element(page.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
});

it('renders with the nhsuk-button class', async () => {
  const page = await render(<Button>Submit</Button>);
  await expect.element(page.getByRole('button')).toHaveClass('nhsuk-button');
});

it.each(['secondary', 'secondary-solid', 'reverse', 'warning'] as const)(
  'applies the %s variant class',
  async (variant) => {
    const page = await render(<Button variant={variant}>Action</Button>);
    await expect.element(page.getByRole('button')).toHaveClass(`nhsuk-button--${variant}`);
  },
);

it('does not add a variant class for primary (default)', async () => {
  const page = await render(<Button variant="primary">Action</Button>);
  const button = page.getByRole('button');
  await expect.element(button).not.toHaveClass('nhsuk-button--primary');
});

it('applies the small modifier class', async () => {
  const page = await render(<Button small>Action</Button>);
  await expect.element(page.getByRole('button')).toHaveClass('nhsuk-button--small');
});

it('sets aria-disabled when disabled', async () => {
  const page = await render(<Button disabled>Action</Button>);
  await expect.element(page.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
});

it('renders as an anchor element with role=button when as="a"', async () => {
  const page = await render(
    <Button as="a" href="/start">
      Start
    </Button>,
  );
  await expect.element(page.getByRole('button', { name: 'Start' })).toBeInTheDocument();
  expect(page.container.querySelector('a.nhsuk-button')).toBeInTheDocument();
});

it('does not render a type attribute when rendered as an anchor', async () => {
  const page = await render(
    <Button as="a" href="#">
      Go
    </Button>,
  );
  expect(page.container.querySelector('a.nhsuk-button')).toBeInTheDocument();
});

it('applies the icon modifier class and wraps text when an icon is set', async () => {
  const page = await render(<Button icon={<SearchIcon />}>Search</Button>);
  await expect.element(page.getByRole('button')).toHaveClass('nhsuk-button--icon');
  expect(page.container.querySelector('.nhsuk-button__content')).toHaveTextContent('Search');
  expect(page.container.querySelector('.nhsuk-icon--search')).toBeInTheDocument();
});

it('renders an icon-only button without a content wrapper', async () => {
  const page = await render(<Button icon={<SearchIcon />} aria-label="Search" />);
  await expect.element(page.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  expect(page.container.querySelector('.nhsuk-button__content')).not.toBeInTheDocument();
});

it('renders the icon after the text when iconPlacement is end', async () => {
  const page = await render(
    <Button icon={<SearchIcon />} iconPlacement="end">
      Search
    </Button>,
  );
  const button = page.container.querySelector('.nhsuk-button')!;
  const content = button.querySelector('.nhsuk-button__content')!;
  const icon = button.querySelector('.nhsuk-icon--search')!;
  expect(content.compareDocumentPosition(icon) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});
