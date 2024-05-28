import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ActionLink } from './ActionLink';

it('should render an anchor element', () => {
  const { container } = render(<ActionLink href="#">Go to page...</ActionLink>);

  expect(container.querySelector('a')).toBeInTheDocument();
  expect(container).toHaveTextContent('Go to page...');
  expect(container).toMatchSnapshot();
});
