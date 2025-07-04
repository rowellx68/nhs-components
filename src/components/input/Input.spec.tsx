import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultStory,
  WithError as WithErrorStory,
  WithHint as WithHintStory,
  WithPrefix as WithPrefixStory,
  WithPrefixAndSuffix as WithPrefixAndSuffixStory,
  WithPrefixSuffixAndError as WithPrefixSuffixAndErrorStory,
  WholeNumbers as WholeNumbersStory,
  WithSuffix as WithSuffixStory,
} from './Input.stories';
import { InputProps } from './Input';

const Default = composeStory(DefaultStory, meta);
const WithError = composeStory(WithErrorStory, meta);
const WithHint = composeStory(WithHintStory, meta);
const WithPrefix = composeStory(WithPrefixStory, meta);
const WithPrefixAndSuffix = composeStory(WithPrefixAndSuffixStory, meta);
const WithPrefixSuffixAndError = composeStory(
  WithPrefixSuffixAndErrorStory,
  meta,
);
const WholeNumbers = composeStory(WholeNumbersStory, meta);
const WithSuffix = composeStory(WithSuffixStory, meta);

it('should render the input component', () => {
  const { container } = render(<Default label="First name" />);

  expect(container).toMatchSnapshot();
});

it('should render the input component with hint', () => {
  const { container } = render(<WithHint />);

  expect(container).toMatchSnapshot();
});

it('should render the input component with error', () => {
  const { container } = render(<WithError />);

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
    const { container } = render(<Default label="First name" width={width} />);

    expect(container).toMatchSnapshot();
  },
);

it('should render the input with prefix', () => {
  const { container } = render(<WithPrefix />);

  expect(container).toMatchSnapshot();
});

it('should render the input with suffix', () => {
  const { container } = render(<WithSuffix />);

  expect(container).toMatchSnapshot();
});

it('should render the input with prefix and suffix', () => {
  const { container } = render(<WithPrefixAndSuffix />);

  expect(container).toMatchSnapshot();
});

it('should render the input with prefix, suffix and error', () => {
  const { container } = render(<WithPrefixSuffixAndError />);

  expect(container).toMatchSnapshot();
});

it('should render the input with whole numbers', () => {
  const { container } = render(<WholeNumbers />);

  expect(container).toMatchSnapshot();
});
