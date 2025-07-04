import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultStory,
  WithRows as WithRowsStory,
  WithError as WithErrorStory,
} from './Textarea.stories';

const Default = composeStory(DefaultStory, meta);
const WithRows = composeStory(WithRowsStory, meta);
const WithError = composeStory(WithErrorStory, meta);

it('should render a textarea element', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render a textarea element with a hint', () => {
  const { container } = render(<Default hint="Hint" />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-hint')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render a textarea element with an error', () => {
  const { container } = render(<WithError />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-error-message')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render a textarea element with rows', () => {
  const { container } = render(<WithRows />);

  expect(container.querySelector('textarea')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
