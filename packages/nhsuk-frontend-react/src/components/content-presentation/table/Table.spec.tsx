import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  TwoColumn as TwoColumnStory,
  ThreeColumn as ThreeColumnStory,
} from './Table.stories';

const TwoColumn = composeStory(TwoColumnStory, meta);
const ThreeColumn = composeStory(ThreeColumnStory, meta);

it('should render a two column table', () => {
  const { container } = render(<TwoColumn />);

  expect(container.querySelector('caption')).toHaveTextContent(
    'Skin symptoms and possible causes',
  );
  expect(container).toMatchSnapshot();
});

it('should render a three column table', () => {
  const { container } = render(<ThreeColumn />);

  expect(container.querySelector('caption')).toHaveTextContent(
    'Ibuprofen tablet dosages for children',
  );
  expect(
    container.querySelector('table.nhsuk-table-responsive'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
