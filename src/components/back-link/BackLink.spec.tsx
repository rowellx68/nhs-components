import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultStory,
  AsButton as AsButtonStory,
} from './BackLink.stories';

const Default = composeStory(DefaultStory, meta);
const AsButton = composeStory(AsButtonStory, meta);

it('should render an anchor element with a back link', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('a')).toBeInTheDocument();
  expect(container).toHaveTextContent('Go back');
  expect(container).toMatchSnapshot();
});

it('should render a button element', () => {
  const { container } = render(<AsButton />);

  expect(container.querySelector('button')).toBeInTheDocument();
  expect(container).toHaveTextContent('Go back');
  expect(container).toMatchSnapshot();
});
