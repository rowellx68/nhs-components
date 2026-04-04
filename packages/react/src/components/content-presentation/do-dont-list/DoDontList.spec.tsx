import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { DoDontList } from './DoDontList';

it('renders with the card feature classes', async () => {
  const page = await render(
    <DoDontList>
      <DoDontList.Title>Do</DoDontList.Title>
      <DoDontList.List variant="do">
        <DoDontList.Item variant="do">Wash your hands</DoDontList.Item>
      </DoDontList.List>
    </DoDontList>,
  );
  expect(page.container.querySelector('.nhsuk-card.nhsuk-card--feature')).toBeInTheDocument();
});

it('applies nhsuk-list--tick for the do variant', async () => {
  const page = await render(
    <DoDontList>
      <DoDontList.List variant="do">
        <DoDontList.Item variant="do">Wash your hands</DoDontList.Item>
      </DoDontList.List>
    </DoDontList>,
  );
  expect(page.container.querySelector('ul.nhsuk-list--tick')).toBeInTheDocument();
});

it('applies nhsuk-list--cross for the dont variant', async () => {
  const page = await render(
    <DoDontList>
      <DoDontList.List variant="dont">
        <DoDontList.Item variant="dont">Do not smoke</DoDontList.Item>
      </DoDontList.List>
    </DoDontList>,
  );
  expect(page.container.querySelector('ul.nhsuk-list--cross')).toBeInTheDocument();
});

it('renders the title with the heading class', async () => {
  const page = await render(
    <DoDontList>
      <DoDontList.Title>Things to do</DoDontList.Title>
      <DoDontList.List variant="do" />
    </DoDontList>,
  );
  expect(page.container.querySelector('.nhsuk-card__heading')).toBeInTheDocument();
});
