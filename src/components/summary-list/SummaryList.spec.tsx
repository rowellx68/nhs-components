import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultStory,
  NoBorder as NoBorderStory,
} from './SummaryList.stories';

const Default = composeStory(DefaultStory, meta);
const NoBorder = composeStory(NoBorderStory, meta);

it('should render the SummaryList component', () => {
  const { container } = render(<Default />);

  expect(container).toMatchSnapshot();
  expect(
    container.querySelectorAll('a > .nhsuk-u-visually-hidden'),
  ).toHaveLength(4);
});

it('should render the SummaryList component with no border', () => {
  const { container } = render(<NoBorder />);

  expect(
    container.querySelectorAll('.nhsuk-summary-list--no-border'),
  ).toHaveLength(1);
  expect(container).toMatchSnapshot();
  expect(
    container.querySelectorAll('a > .nhsuk-u-visually-hidden'),
  ).toHaveLength(4);
});
