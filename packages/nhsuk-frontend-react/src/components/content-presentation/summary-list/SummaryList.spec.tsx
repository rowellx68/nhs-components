import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { SummaryList } from './SummaryList';

it('renders a dl element with the nhsuk-summary-list class', async () => {
  const page = await render(
    <SummaryList>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Jane Smith</SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>,
  );
  expect(page.container.querySelector('dl.nhsuk-summary-list')).toBeInTheDocument();
});

it('renders key and value content', async () => {
  const page = await render(
    <SummaryList>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Jane Smith</SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>,
  );
  await expect.element(page.getByText('Name')).toBeInTheDocument();
  await expect.element(page.getByText('Jane Smith')).toBeInTheDocument();
});

it('applies the no-border variant class', async () => {
  const page = await render(
    <SummaryList variant="no-border">
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Jane</SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>,
  );
  expect(page.container.querySelector('.nhsuk-summary-list--no-border')).toBeInTheDocument();
});
