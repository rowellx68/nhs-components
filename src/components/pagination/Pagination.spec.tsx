import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, { Default as DefaultStory } from './Pagination.stories';

const Default = composeStory(DefaultStory, meta);

it('should render the Pagination component', () => {
  const { getByText, container } = render(<Default />);

  expect(getByText('Treatments')).toBeDefined();
  expect(getByText('Symptoms')).toBeDefined();
  expect(container).toMatchSnapshot();
});
