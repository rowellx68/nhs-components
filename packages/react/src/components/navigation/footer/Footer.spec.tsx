import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Footer } from './Footer';

it('renders a footer landmark', async () => {
  const page = await render(
    <Footer>
      <Footer.Meta>
        <Footer.List />
        <Footer.Copyright>NHS England</Footer.Copyright>
      </Footer.Meta>
    </Footer>,
  );
  await expect.element(page.getByRole('contentinfo')).toBeInTheDocument();
});

it('renders with the nhsuk-footer class', async () => {
  const page = await render(
    <Footer>
      <Footer.Meta>
        <Footer.List />
        <Footer.Copyright>NHS England</Footer.Copyright>
      </Footer.Meta>
    </Footer>,
  );
  expect(page.container.querySelector('footer.nhsuk-footer')).toBeInTheDocument();
});

it('renders copyright text', async () => {
  const page = await render(
    <Footer>
      <Footer.Meta>
        <Footer.List />
        <Footer.Copyright>NHS England</Footer.Copyright>
      </Footer.Meta>
    </Footer>,
  );
  await expect.element(page.getByText('NHS England')).toBeInTheDocument();
});

it('renders footer links', async () => {
  const page = await render(
    <Footer>
      <Footer.Meta>
        <Footer.List>
          <Footer.ListItem href="/accessibility">Accessibility statement</Footer.ListItem>
          <Footer.ListItem href="/cookies">Cookies</Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>NHS England</Footer.Copyright>
      </Footer.Meta>
    </Footer>,
  );
  const links = page.container.querySelectorAll('.nhsuk-footer__list-item-link');
  expect(links).toHaveLength(2);
});
