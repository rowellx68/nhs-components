import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Details } from './Details';

it('renders a details element with the base class', async () => {
  const page = await render(
    <Details>
      <Details.Summary>What is this?</Details.Summary>
      <Details.Text>This is the answer.</Details.Text>
    </Details>,
  );
  expect(page.container.querySelector('details.nhsuk-details')).toBeInTheDocument();
});

it('renders summary and text content', async () => {
  const page = await render(
    <Details>
      <Details.Summary>What is this?</Details.Summary>
      <Details.Text>This is the answer.</Details.Text>
    </Details>,
  );
  await expect.element(page.getByText('What is this?')).toBeInTheDocument();
  await expect.element(page.getByText('This is the answer.')).toBeInTheDocument();
});

it('applies the expander class for the expander variant', async () => {
  const page = await render(
    <Details variant="expander">
      <Details.Summary>Show more</Details.Summary>
      <Details.Text>More content here.</Details.Text>
    </Details>,
  );
  expect(page.container.querySelector('details.nhsuk-expander')).toBeInTheDocument();
});
