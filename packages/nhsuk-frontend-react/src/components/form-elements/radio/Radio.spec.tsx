import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  Inline as InlineStory,
  WithHint as WithHintStory,
  WithError as WithErrorStory,
  WithItemHint as WithItemHintStory,
  WithDivider as WithDividerStory,
  WithConditionalContent as WithConditionalContentStory,
} from './Radio.stories';

const Default = composeStory(DefaultStory, meta);
const Inline = composeStory(InlineStory, meta);
const WithHint = composeStory(WithHintStory, meta);
const WithError = composeStory(WithErrorStory, meta);
const WithItemHint = composeStory(WithItemHintStory, meta);
const WithDivider = composeStory(WithDividerStory, meta);
const WithConditionalContent = composeStory(WithConditionalContentStory, meta);

it('should render the radio component', () => {
  const { container } = render(<Default />);

  expect(container).toMatchSnapshot();
});

it('should render the radio component with hint', () => {
  const { container } = render(<WithHint />);

  expect(container).toMatchSnapshot();
});

it('should render the radio component with error', () => {
  const { container } = render(<WithError />);

  expect(container).toMatchSnapshot();
});

it('should render the radio component with inline items', () => {
  const { container } = render(<Inline />);

  expect(container).toMatchSnapshot();
});

it('should render the radio component with item hints', () => {
  const { container } = render(<WithItemHint />);

  expect(container).toMatchSnapshot();
});

it('should render the radio component with divider', () => {
  const { container } = render(<WithDivider />);

  expect(container).toMatchSnapshot();
  expect(container).toHaveTextContent('or');
});

it('should render the radio component with conditional content', () => {
  const { container } = render(<WithConditionalContent />);

  expect(container).toMatchSnapshot();
  expect(container.querySelector('[type=email]')).toBeInTheDocument();
});
