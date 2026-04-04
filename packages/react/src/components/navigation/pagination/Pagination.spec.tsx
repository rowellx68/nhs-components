import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Pagination } from './Pagination';

it('renders a navigation landmark labelled Pagination', async () => {
  const page = await render(
    <Pagination>
      <Pagination.Next pageTitle="Symptoms" href="/symptoms" />
    </Pagination>,
  );
  await expect.element(page.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
});

it('renders a previous link', async () => {
  const page = await render(
    <Pagination>
      <Pagination.Previous pageTitle="Overview" href="/overview" />
    </Pagination>,
  );
  expect(page.container.querySelector('.nhsuk-pagination__link--prev')).toBeInTheDocument();
});

it('renders a next link', async () => {
  const page = await render(
    <Pagination>
      <Pagination.Next pageTitle="Symptoms" href="/symptoms" />
    </Pagination>,
  );
  expect(page.container.querySelector('.nhsuk-pagination__link--next')).toBeInTheDocument();
});

it('renders numbered pagination items', async () => {
  const page = await render(
    <Pagination numbered>
      <Pagination.List>
        <Pagination.Item page={1} current href="/page/1" />
        <Pagination.Item page={2} href="/page/2" />
      </Pagination.List>
    </Pagination>,
  );
  expect(page.container.querySelector('.nhsuk-pagination--numbered')).toBeInTheDocument();
  expect(page.container.querySelector('[aria-current="page"]')).toBeInTheDocument();
});
