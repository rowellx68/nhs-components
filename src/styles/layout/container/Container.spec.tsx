import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import meta, {
  Default as DefaultStory,
  FluidWidth as FluidWidthStory,
} from './Container.stories';

const Default = composeStory(DefaultStory, meta);
const FluidWidth = composeStory(FluidWidthStory, meta);

it('should render the Container component', () => {
  const { container } = render(<Default />);

  expect(container.querySelector('.nhsuk-width-container')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('should render the Container component with fluid width', () => {
  const { container } = render(<FluidWidth />);

  expect(
    container.querySelector('.nhsuk-width-container-fluid'),
  ).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
