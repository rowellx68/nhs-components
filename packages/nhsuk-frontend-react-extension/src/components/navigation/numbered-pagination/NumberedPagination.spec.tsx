import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Default } from './NumberedPagination.stories';

it('should render the NumberedPagination component with default props', () => {
  const NumberedPagination = composeStory(Default, meta);
  const { container } = render(<NumberedPagination />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('nav')).toBeInTheDocument();
});
