import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  WithNoVisuallyHiddenText as WithNoVisuallyHiddenTextStory,
  WithDifferentHeadingLevels as WithDifferentHeadingLevelsStory,
} from './WarningCallout.stories';

const Default = composeStory(DefaultStory, meta);
const WithNoVisuallyHiddenText = composeStory(
  WithNoVisuallyHiddenTextStory,
  meta,
);
const WithDifferentHeadingLevels = composeStory(
  WithDifferentHeadingLevelsStory,
  meta,
);

it('should render the WarningCallout component', () => {
  const { getByRole } = render(<Default />);

  expect(getByRole('text')).toHaveTextContent('Important:');
  expect(getByRole('text')).toHaveTextContent('School, nursery or work');
});

it('should render the WarningCallout component without visually hidden text', () => {
  const { getByRole, container } = render(<WithNoVisuallyHiddenText />);

  expect(getByRole('text')).toHaveTextContent('Important');
  expect(container.querySelector('h3')).toBeInTheDocument();
});

it('should render the WarningCallout component with different heading levels', () => {
  const { container } = render(<WithDifferentHeadingLevels />);

  expect(container.querySelector('h2')).toBeInTheDocument();
});
