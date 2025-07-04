import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, { Default as DefaultStory } from './InsetText.stories';

const Default = composeStory(DefaultStory, meta);

it('should render the InsetText component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-inset-text')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
