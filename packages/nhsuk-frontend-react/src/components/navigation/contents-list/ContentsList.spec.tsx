import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { ContentsList } from './ContentsList';

it('renders a navigation landmark', async () => {
  const page = await render(
    <ContentsList aria-label="Pages in this guide">
      <ContentsList.Item>
        <ContentsList.Link href="/overview">Overview</ContentsList.Link>
      </ContentsList.Item>
    </ContentsList>,
  );
  await expect
    .element(page.getByRole('navigation', { name: 'Pages in this guide' }))
    .toBeInTheDocument();
});

it('renders list items as links', async () => {
  const page = await render(
    <ContentsList aria-label="Pages in this guide">
      <ContentsList.Item>
        <ContentsList.Link href="/overview">Overview</ContentsList.Link>
      </ContentsList.Item>
      <ContentsList.Item>
        <ContentsList.Link href="/symptoms">Symptoms</ContentsList.Link>
      </ContentsList.Item>
    </ContentsList>,
  );
  const links = page.container.querySelectorAll('a.nhsuk-contents-list__link');
  expect(links).toHaveLength(2);
});

it('marks the active item with aria-current', async () => {
  const page = await render(
    <ContentsList aria-label="Pages in this guide">
      <ContentsList.Item active>
        <ContentsList.Link href="/overview" active>
          Overview
        </ContentsList.Link>
      </ContentsList.Item>
    </ContentsList>,
  );
  expect(page.container.querySelector('[aria-current="page"]')).toBeInTheDocument();
});
