import React from 'react';
import { it, expect } from 'vitest';
import { render } from 'vitest-browser-react';

import { Tabs } from './Tabs';

it('renders with the nhsuk-tabs class', async () => {
  const page = await render(
    <Tabs>
      <Tabs.Title>Contents</Tabs.Title>
      <Tabs.List>
        <Tabs.ListItem href="#section-1">Section 1</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panel id="section-1">Section 1 content</Tabs.Panel>
    </Tabs>,
  );
  expect(page.container.querySelector('.nhsuk-tabs')).toBeInTheDocument();
});

it('applies the selected class to the active list item', async () => {
  const page = await render(
    <Tabs>
      <Tabs.List>
        <Tabs.ListItem href="#s1" selected>
          Active
        </Tabs.ListItem>
        <Tabs.ListItem href="#s2">Inactive</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panel id="s1">Content 1</Tabs.Panel>
      <Tabs.Panel id="s2">Content 2</Tabs.Panel>
    </Tabs>,
  );
  expect(page.container.querySelector('.nhsuk-tabs__list-item--selected')).toBeInTheDocument();
});

it('applies the hidden class to a hidden panel', async () => {
  const page = await render(
    <Tabs>
      <Tabs.List>
        <Tabs.ListItem href="#s1">Section 1</Tabs.ListItem>
        <Tabs.ListItem href="#s2">Section 2</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panel id="s1">Visible</Tabs.Panel>
      <Tabs.Panel id="s2" hidden>
        Hidden
      </Tabs.Panel>
    </Tabs>,
  );
  expect(page.container.querySelector('.nhsuk-tabs__panel--hidden')).toBeInTheDocument();
});
