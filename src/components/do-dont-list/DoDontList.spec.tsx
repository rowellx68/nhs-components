import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  DoList as DoListStory,
  DontList as DontListStory,
} from './DoDontList.stories';

const DoList = composeStory(DoListStory, meta);
const DontList = composeStory(DontListStory, meta);

it('should render the do variant of the DoDontList component', () => {
  const { getByRole, container } = render(<DoList />);

  expect(getByRole('list')).toHaveClass('nhsuk-list nhsuk-list--tick');
  expect(container.querySelectorAll('.nhsuk-icon__tick')).toHaveLength(3);
  expect(container).toMatchSnapshot();
});

it('should render the dont variant of the DoDontList component', () => {
  const { getByRole, container } = render(<DontList />);

  expect(getByRole('list')).toHaveClass('nhsuk-list nhsuk-list--cross');
  expect(container.querySelectorAll('.nhsuk-icon__cross')).toHaveLength(4);
  expect(container).toMatchSnapshot();
});
