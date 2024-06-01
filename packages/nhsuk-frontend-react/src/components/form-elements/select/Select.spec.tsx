import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  WithHint as WithHintStory,
  WithError as WithErrorStory,
} from './Select.stories';

const Default = composeStory(DefaultStory, meta);
const WithHint = composeStory(WithHintStory, meta);
const WithError = composeStory(WithErrorStory, meta);

it('should render a select element', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('select')).toBeInTheDocument();
  expect(container.querySelectorAll('option')).toHaveLength(3);
  expect(container).toMatchSnapshot();
});

it('should render a select element with hint', () => {
  const { container } = render(<WithHint />);

  expect(container.querySelector('select')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-hint')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render a select element with error', () => {
  const { container } = render(<WithError />);

  expect(container.querySelector('select')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-error-message')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
