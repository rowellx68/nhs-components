import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { Default as DefaultStory } from './Breadcrumb.stories';

const Default = composeStory(DefaultStory, meta);

it('should render a breadcrumb element', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-breadcrumb')).toBeInTheDocument();
  expect(container.querySelectorAll('a')).toHaveLength(4);
  expect(container).toMatchSnapshot();
});
