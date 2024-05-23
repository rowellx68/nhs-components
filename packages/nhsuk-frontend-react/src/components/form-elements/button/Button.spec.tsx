import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from './Button';

it('should render the Button component as a button', () => {
  const { container } = render(<Button type="submit">Submit</Button>);

  expect(container.querySelector('button')).toBeInTheDocument();
});

it.each(['secondary', 'reverse'] as const)(
  'should render the Button component with the %s variant',
  (variant) => {
    const { container } = render(<Button variant={variant}>Action</Button>);

    expect(
      container.querySelector('.nhsuk-button--' + variant),
    ).toBeInTheDocument();
  },
);

it('should render the Button component with the disabled attribute', () => {
  const { container } = render(<Button disabled>Disabled</Button>);

  expect(container.querySelector('button')).toHaveAttribute('disabled');
});

it('should render the Button component as a link', () => {
  const { container } = render(
    <Button as="a" href="https://www.nhs.uk">
      Link
    </Button>,
  );

  expect(container.querySelector('a')).toBeInTheDocument();
});
