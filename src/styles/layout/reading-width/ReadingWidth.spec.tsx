import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, { Default as DefaultStory } from './ReadingWidth.stories';

const Default = composeStory(DefaultStory, meta);

it('should render the ReadingWidth component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-reading-width')).toMatchSnapshot();
});
