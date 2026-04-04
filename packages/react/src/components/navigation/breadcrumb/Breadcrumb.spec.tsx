import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Breadcrumb } from './Breadcrumb';

it('renders a navigation landmark labelled Breadcrumb', async () => {
  const page = await render(
    <Breadcrumb>
      <Breadcrumb.List />
      <Breadcrumb.BackLink href="/">Home</Breadcrumb.BackLink>
    </Breadcrumb>,
  );
  await expect.element(page.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
});

it('renders list items as links with the breadcrumb link class', async () => {
  const page = await render(
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.ListItem href="/">Home</Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="/health-a-to-z">Health A to Z</Breadcrumb.ListItem>
      </Breadcrumb.List>
      <Breadcrumb.BackLink href="/health-a-to-z">Health A to Z</Breadcrumb.BackLink>
    </Breadcrumb>,
  );
  expect(page.container.querySelector('a.nhsuk-breadcrumb__link')).toBeInTheDocument();
});

it('renders the back link with the correct class', async () => {
  const page = await render(
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.ListItem href="/">Home</Breadcrumb.ListItem>
      </Breadcrumb.List>
      <Breadcrumb.BackLink href="/">Home</Breadcrumb.BackLink>
    </Breadcrumb>,
  );
  expect(page.container.querySelector('.nhsuk-back-link')).toBeInTheDocument();
});

it('applies the reverse variant class to the nav and back link', async () => {
  const page = await render(
    <Breadcrumb variant="reverse">
      <Breadcrumb.List />
      <Breadcrumb.BackLink href="/" variant="reverse">
        Home
      </Breadcrumb.BackLink>
    </Breadcrumb>,
  );
  await expect.element(page.getByRole('navigation')).toHaveClass('nhsuk-breadcrumb--reverse');
  expect(page.container.querySelector('.nhsuk-back-link--reverse')).toBeInTheDocument();
});

it('renders list items as a polymorphic element', async () => {
  const page = await render(
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.ListItem as="span">Home</Breadcrumb.ListItem>
      </Breadcrumb.List>
      <Breadcrumb.BackLink href="/">Home</Breadcrumb.BackLink>
    </Breadcrumb>,
  );
  expect(page.container.querySelector('span.nhsuk-breadcrumb__link')).toBeInTheDocument();
});
