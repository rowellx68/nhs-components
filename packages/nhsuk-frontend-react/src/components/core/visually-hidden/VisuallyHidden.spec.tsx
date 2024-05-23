import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { VisuallyHidden } from './VisuallyHidden';

it('should render the VisuallyHidden component as a span', () => {
  const { container } = render(
    <VisuallyHidden>This is visually hidden</VisuallyHidden>,
  );
  expect(container.querySelector('span')).toBeInTheDocument();
});

it.each(['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const)(
  'should render the VisuallyHidden component as a %s',
  (as) => {
    const { container } = render(
      <VisuallyHidden as={as}>This is visually hidden</VisuallyHidden>,
    );
    expect(container.querySelector(as)).toBeInTheDocument();
  },
);
