import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Select } from './Select';

it('should render a select element', () => {
  const { container } = render(
    <Select id="select" name="select" label="Select">
      <Select.Option value="Select.Option1">Option 1</Select.Option>
      <Select.Option value="Select.Option2">Option 2</Select.Option>
      <Select.Option value="Select.Option3">Option 3</Select.Option>
    </Select>,
  );

  expect(container.querySelector('select')).toBeInTheDocument();
  expect(container.querySelectorAll('option')).toHaveLength(3);
  expect(container).toMatchSnapshot();
});
