import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  WithHint as WithHintStory,
  WithError as WithErrorStory,
  WithItemHint as WithItemHintStory,
  WithConditionalContent as WithConditionalContentStory,
  WithExclusiveOption as WithExclusiveOptionStory,
} from './Checkbox.stories';

const Default = composeStory(DefaultStory, meta);
const WithHint = composeStory(WithHintStory, meta);
const WithError = composeStory(WithErrorStory, meta);
const WithItemHint = composeStory(WithItemHintStory, meta);
const WithConditionalContent = composeStory(WithConditionalContentStory, meta);
const WithExclusiveOption = composeStory(WithExclusiveOptionStory, meta);

it('should render the Checkbox component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Checkbox with exclusive option', () => {
  const { container } = render(<WithExclusiveOption />);

  expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
  expect(
    container.querySelector('.nhsuk-checkboxes__divider'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Checkbox with conditional content', () => {
  const { container } = render(<WithConditionalContent />);

  expect(container.querySelector('input[type="email"]')).toBeInTheDocument();
  expect(container.querySelector('input[type="tel"]')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Checkbox with hint', () => {
  const { container } = render(<WithHint />);

  expect(container.querySelector('.nhsuk-hint')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Checkbox with item hint', () => {
  const { container } = render(<WithItemHint />);

  expect(container.querySelector('.nhsuk-hint')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Checkbox with error', () => {
  const { container } = render(<WithError />);

  expect(container.querySelector('.nhsuk-error-message')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
