import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Input, InputProps } from './Input';

it('should render the input component', () => {
  const { container } = render(<Input label="First name" />);

  expect(container).toMatchSnapshot();
});

it('should render the input component with hint', () => {
  const { container } = render(
    <Input label="First name" hint="Enter your first name" />,
  );

  expect(container).toMatchSnapshot();
});

it('should render the input component with error', () => {
  const { container } = render(
    <Input label="First name" error="Error message goes here" />,
  );

  expect(container).toMatchSnapshot();
});

it.each([
  '2',
  '3',
  '4',
  '5',
  '10',
  '20',
  'full',
  'one-half',
  'one-quarter',
  'one-third',
  'three-quarters',
  'two-thirds',
] as InputProps['width'][])(
  'should render the input component with width %s',
  (width) => {
    const { container } = render(<Input label="First name" width={width} />);

    expect(container).toMatchSnapshot();
  },
);

it('should render the input with prefix', () => {
  const { container } = render(<Input label="Cost" prefix="£" />);

  expect(container).toMatchSnapshot();
});

it('should render the input with suffix', () => {
  const { container } = render(<Input label="Weight" suffix="in grams" />);

  expect(container).toMatchSnapshot();
});
