import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Label } from './Label';

it('should render the Label component with the default label', () => {
  const { container } = render(<Label>Test</Label>);
  expect(container.querySelector('label')).toHaveTextContent('Test');
});
