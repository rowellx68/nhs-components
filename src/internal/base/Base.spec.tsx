import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Base } from './Base';

it('should render the Base component as a div', () => {
  const { container } = render(<Base>Test</Base>);
  expect(container.querySelector('div')).toBeInTheDocument();
});

it.each(['a', 'button', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const)(
  'should render the Base component as a %s',
  (as) => {
    const { container } = render(<Base as={as}>Test</Base>);
    expect(container.querySelector(as)).toBeInTheDocument();
  },
);
