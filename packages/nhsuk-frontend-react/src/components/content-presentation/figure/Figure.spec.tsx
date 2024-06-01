import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, {
  ImageWithCaption as ImageWithCaptionStory,
  ImageWithoutCaption as ImageWithoutCaptionStory,
} from './Figure.stories';

const ImageWithCaption = composeStory(ImageWithCaptionStory, meta);
const ImageWithoutCaption = composeStory(ImageWithoutCaptionStory, meta);

it('should render the Figure component', () => {
  const { container } = render(<ImageWithCaption />);

  expect(container).toMatchSnapshot();
});

it('should render the Figure component without caption', () => {
  const { container } = render(<ImageWithoutCaption />);

  expect(container).toMatchSnapshot();
});
