import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Tag, TagColour } from './Tag';

it('should render the Tag component with the default grey variant', () => {
  const { container } = render(<Tag>Test</Tag>);
  expect(container.querySelector('.nhsuk-tag--grey')).toBeInTheDocument();
});

it.each([
  'aqua-green',
  'blue',
  'green',
  'grey',
  'orange',
  'pink',
  'purple',
  'red',
  'white',
  'yellow',
] as TagColour[])(
  'should render the Tag component with the %s variant',
  (variant) => {
    const { container } = render(<Tag variant={variant}>Test</Tag>);
    expect(
      container.querySelector(`.nhsuk-tag--${variant}`),
    ).toBeInTheDocument();
  },
);
