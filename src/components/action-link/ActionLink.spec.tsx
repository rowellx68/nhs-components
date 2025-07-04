import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, { Default as DefaultStory } from './ActionLink.stories';

const Default = composeStory(DefaultStory, meta);

it('should render an anchor element', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('a')).toBeInTheDocument();
  expect(container).toHaveTextContent('Find a minor injuries unit');
  expect(container).toMatchSnapshot();
});
