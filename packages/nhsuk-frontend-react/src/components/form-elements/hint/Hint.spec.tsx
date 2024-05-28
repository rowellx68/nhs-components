import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Hint } from './Hint';

it('should render the hint component', () => {
  const { container } = render(
    <Hint>Use hint text to help users understand a question.</Hint>,
  );

  expect(container).toMatchSnapshot();
});
