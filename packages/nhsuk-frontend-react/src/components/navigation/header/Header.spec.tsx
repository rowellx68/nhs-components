import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Header } from './Header';

it('renders a header landmark', async () => {
  const page = await render(
    <Header>
      <Header.Container>
        <Header.ServiceLogo variant="logo-only" href="/" aria-label="NHS homepage" />
      </Header.Container>
    </Header>,
  );
  await expect.element(page.getByRole('banner')).toBeInTheDocument();
});

it('renders with the nhsuk-header class', async () => {
  const page = await render(
    <Header>
      <Header.Container>
        <Header.ServiceLogo variant="logo-only" href="/" aria-label="NHS homepage" />
      </Header.Container>
    </Header>,
  );
  expect(page.container.querySelector('header.nhsuk-header')).toBeInTheDocument();
});

it('applies the organisation variant class', async () => {
  const page = await render(
    <Header variant="organisation">
      <Header.Container>
        <Header.ServiceLogo href="/" serviceName="My Service" />
      </Header.Container>
    </Header>,
  );
  expect(page.container.querySelector('.nhsuk-header--organisation')).toBeInTheDocument();
});

it('renders navigation items', async () => {
  const page = await render(
    <Header>
      <Header.Container>
        <Header.ServiceLogo variant="logo-only" href="/" aria-label="NHS homepage" />
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="/conditions">Health A to Z</Header.NavItem>
          <Header.NavItem href="/live-well">Live Well</Header.NavItem>
        </Header.NavList>
      </Header.Nav>
    </Header>,
  );
  const navLinks = page.container.querySelectorAll('a.nhsuk-header__navigation-link');
  expect(navLinks).toHaveLength(2);
});
