import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Textarea } from './Textarea';

it('should render a textarea element', () => {
  const { container } = render(<Textarea label="Textarea" />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render a textarea element with a hint', () => {
  const { container } = render(<Textarea label="Textarea" hint="Hint" />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-hint')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render a textarea element with an error', () => {
  const { container } = render(<Textarea label="Textarea" error="Error" />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-error-message')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
