import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  Default as DefaultStory,
  Bulleted as BulletedStory,
  Numbered as NumberedStory,
  WithBorders as WithBordersStory,
} from './List.stories';

const Default = composeStory(DefaultStory, meta);
const Bulleted = composeStory(BulletedStory, meta);
const Numbered = composeStory(NumberedStory, meta);
const WithBorders = composeStory(WithBordersStory, meta);

it('should render the List component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-list')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the List component with bulleted items', () => {
  const { container } = render(<Bulleted />);

  expect(container.querySelector('ul')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-list--bullet')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the List component with numbered items', () => {
  const { container } = render(<Numbered />);

  expect(container.querySelector('ol')).toBeInTheDocument();
  expect(container.querySelector('.nhsuk-list--number')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the List component with borders', () => {
  const { container } = render(<WithBorders />);

  expect(container.querySelector('.nhsuk-list--border')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
