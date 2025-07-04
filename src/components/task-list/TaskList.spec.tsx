import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultStory,
  MultipleSections as MultipleSectionsStories,
} from './TaskList.stories';

const Default = composeStory(DefaultStory, meta);
const MultipleSections = composeStory(MultipleSectionsStories, meta);

it('should render the TaskList component with the incomplete tasks', () => {
  const { container } = render(<Default />);
  expect(container.querySelector('.nhsuk-tag--blue')).toBeInTheDocument();
});

it('should render the TaskList component with the completed tasks', () => {
  const { container } = render(<MultipleSections />);
  expect(container.querySelector('.nhsuk-task-list__hint')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
