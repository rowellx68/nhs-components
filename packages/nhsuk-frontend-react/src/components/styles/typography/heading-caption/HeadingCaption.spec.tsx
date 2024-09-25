import React from 'react';
import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import meta, { XL as HeadingCaptionStory } from './HeadingCaption.stories';

const HeadingCaption = composeStory(HeadingCaptionStory, meta);

it.each(['xl', 'l', 'm'] as const)(
  `should render the %s HeadingCaption component`,
  (size) => {
    const { container } = render(<HeadingCaption size={size} />);

    expect(
      container.querySelector(`.nhsuk-caption-${size}`),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  },
);
