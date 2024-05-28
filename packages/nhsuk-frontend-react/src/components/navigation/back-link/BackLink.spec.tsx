import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BackLink } from './BackLink';

it('should render an anchor element with a back link', () => {
  const { container } = render(<BackLink href="#">Go back</BackLink>);

  expect(container.querySelector('a')).toBeInTheDocument();
  expect(container).toHaveTextContent('Go back');
  expect(container).toMatchSnapshot();
});

it('should render a button element', () => {
  const { container } = render(<BackLink as="button">Go back</BackLink>);

  expect(container.querySelector('button')).toBeInTheDocument();
  expect(container).toHaveTextContent('Go back');
  expect(container).toMatchSnapshot();
});
