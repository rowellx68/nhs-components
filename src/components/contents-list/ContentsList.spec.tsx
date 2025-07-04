import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, { Default as DefaultStory } from './ContentsList.stories';

const Default = composeStory(DefaultStory, meta);

it('should render a navigation element with a contents list', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-contents-list')).toBeInTheDocument();
  expect(container.querySelectorAll('a')).toHaveLength(4);
  expect(container).toMatchSnapshot();
});
