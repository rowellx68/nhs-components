import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { composeStory } from '@storybook/react-vite';
import meta, { Default as DefaultStory } from './Tabs.stories';

const Default = composeStory(DefaultStory, meta);

it('should render the Tabs component', async () => {
  const { container } = render(<Default />);

  expect(container).toMatchSnapshot();

  const secondTab = container.querySelector('[href="#past-week"]');

  await userEvent.click(secondTab!);

  expect(
    container.querySelector('[href="#past-week"]')?.parentElement,
  ).toHaveClass('nhsuk-tabs__list-item--selected');
});
