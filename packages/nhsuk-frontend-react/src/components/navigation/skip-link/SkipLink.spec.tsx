import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SkipLink } from './SkipLink';

it('should render the SkipLink component', () => {
  const { container } = render(<SkipLink>Skip to main content</SkipLink>);

  expect(container).toMatchSnapshot();
});
