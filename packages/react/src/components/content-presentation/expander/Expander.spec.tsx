import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Expander } from './Expander';

it('renders a details element with the expander classes', async () => {
  const page = await render(
    <Expander>
      <Expander.Summary>Show details</Expander.Summary>
      <Expander.Text>Here are the details.</Expander.Text>
    </Expander>,
  );
  expect(page.container.querySelector('details.nhsuk-details.nhsuk-expander')).toBeInTheDocument();
});

it('renders summary and text content', async () => {
  const page = await render(
    <Expander>
      <Expander.Summary>Show details</Expander.Summary>
      <Expander.Text>Here are the details.</Expander.Text>
    </Expander>,
  );
  await expect.element(page.getByText('Show details')).toBeInTheDocument();
  await expect.element(page.getByText('Here are the details.')).toBeInTheDocument();
});

it('wraps multiple expanders in a group', async () => {
  const page = await render(
    <Expander.Group>
      <Expander>
        <Expander.Summary>First</Expander.Summary>
        <Expander.Text>First content.</Expander.Text>
      </Expander>
      <Expander>
        <Expander.Summary>Second</Expander.Summary>
        <Expander.Text>Second content.</Expander.Text>
      </Expander>
    </Expander.Group>,
  );
  expect(page.container.querySelector('.nhsuk-expander-group')).toBeInTheDocument();
});
