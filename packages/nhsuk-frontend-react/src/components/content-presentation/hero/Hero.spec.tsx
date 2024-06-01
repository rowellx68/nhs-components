import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  WithContentOnly as WithContentOnlyStory,
  WithImageContent as WithImageContentStory,
  WithImageOnly as WithImageOnlyStory,
} from './Hero.stories';

const WithContentOnly = composeStory(WithContentOnlyStory, meta);
const WithImageContent = composeStory(WithImageContentStory, meta);
const WithImageOnly = composeStory(WithImageOnlyStory, meta);

it('should render the Hero component', () => {
  const { container } = render(<WithContentOnly />);

  expect(container).toMatchSnapshot();
});

it('should render the image-and-content variant of the Hero component', () => {
  const { container } = render(<WithImageContent />);

  expect(container).toMatchSnapshot();
});

it('should render the image-only variant of the Hero component', () => {
  const { container } = render(<WithImageOnly />);

  expect(container).toMatchSnapshot();
});
