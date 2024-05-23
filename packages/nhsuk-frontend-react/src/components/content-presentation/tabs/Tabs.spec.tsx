import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Tabs } from './Tabs';

it('should render the Tabs component', async () => {
  const { container } = render(
    <Tabs>
      <Tabs.Title>Contents</Tabs.Title>
      <Tabs.List>
        <Tabs.ListItem href="#past-day">Past day</Tabs.ListItem>
        <Tabs.ListItem href="#past-week">Past week</Tabs.ListItem>
        <Tabs.ListItem href="#past-month">Past month</Tabs.ListItem>
        <Tabs.ListItem href="#past-year">Past year</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panel id="past-day">
        <h2>Past day</h2>
        <p>Content for the past day</p>
      </Tabs.Panel>
      <Tabs.Panel id="past-week">
        <h2>Past week</h2>
        <p>Content for the past week</p>
      </Tabs.Panel>
      <Tabs.Panel id="past-month">
        <h2>Past month</h2>
        <p>Content for the past month</p>
      </Tabs.Panel>
      <Tabs.Panel id="past-year">
        <h2>Past year</h2>
        <p>Content for the past year</p>
      </Tabs.Panel>
    </Tabs>,
  );

  expect(container).toMatchSnapshot();

  const secondTab = container.querySelector('[href="#past-week"]');

  await userEvent.click(secondTab!);

  expect(
    container.querySelector('[href="#past-week"]')?.parentElement,
  ).toHaveClass('nhsuk-tabs__list-item--selected');
});
